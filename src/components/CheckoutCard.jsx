import { useState } from "react";



const CheckoutCard=({product,updateCart})=>{
    
    const decrementItem=()=>{
        updateCart(product.id,product.quantity-1);
    }
    const incrementItem=()=>{
        updateCart(product.id,product.quantity+1);

    }
    const deleteItem=()=>{
        updateCart(product.id,0);
    }

    return(
        <>
            <div>
                {product.title}
            </div>
            <div>    
                <button onClick={decrementItem}>-</button>
                {product.quantity}
                <button onClick={incrementItem}>+</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </>
    )

}

export default CheckoutCard;