import React, { useState, useEffect } from 'react'
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CartItem from './CartItem';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';




function Payment() {
    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] =useState(true);
    const [clientSecret, setClientSecret] =useState(true);

    useEffect(() => {
        //generate the special stripe secret that allows charging the client
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expect the total in currencies subunits
                url: `/payment/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])


    const handleSubmit = async event => {
        //do all stripe code

        event.preventDefault();
        setProcessing(true);
        

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replaceState('/orders')
        })

    }

    const handleChange = event => {
        //Listen for changes in CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
   
   
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Brownsville, TX</p>
                    </div>
                </div>
                
                {/* Payment section - Review Items*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {cart.map(item => (
                            <CartItem 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Payment section - Payment Method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe code will go here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Payment
