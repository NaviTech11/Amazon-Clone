import React from 'react'
import './CartItem.css'
import { useStateValue } from "./StateProvider";

function CartItem({id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove the irem from the basket
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="cartItem">
            <img className="cartItem_image" src={image} alt="item" />

            <div className="cartItem_info">
                <p className="cartItem_title">{title}</p>
               
                <p className="cartItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartItem_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>

                {/* {!hideButton && ( */}
                    <button onClick={removeFromCart}>Remove from Cart</button>
                {/* )} */}
            </div>    
        </div>
    )
}

export default CartItem;
