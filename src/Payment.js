import React from 'react'
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CartItem from './CartItem';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
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
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Payment
