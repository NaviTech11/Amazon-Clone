import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CartItem from './CartItem';
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
          <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon banner" />

            {cart?.length === 0 ? (
                <div>
                    <h3>Hello {user?.email},</h3>
                    <h2>
                        Your Shopping Cart is Empty
                    </h2> 
                    <p>
                        You have no items in you cart. To buy one or more items, please click on "Add to cart" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h3>Hello {user.email},</h3>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>
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
            )}
            
            
          </div>  
          
          <div className="checkout_right">
            <Subtotal />
          </div>
        </div>

        
    );
}

export default Checkout
