import React from 'react'
import './CartItem.css'

function CartItem({item, title, image, price, rating }) {
    return (
        <div className="cartItem">
            <img className="cartItem_image" src={image} alt="item image" />

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

                <button>Remove from Cart</button>
            </div>    
        </div>
    )
}

export default CartItem;
