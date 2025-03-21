import "../styles/checkoutCard.css"


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
            <div className="checkoutContainer">
                <div><img className="checkoutImage" src={product.image}></img></div>
                <div className="checkoutSection">
                    <div className="checkoutTitle">
                        {product.title}
                    </div>
                    <div className="buttonSection"> 
                        <div className="quantityChange">
                            <button className="decrement" onClick={decrementItem}>-</button>
                            <span>{product.quantity}</span>
                            <button className="increment" onClick={incrementItem}>+</button>
                            
                        </div> 
                        <div>
                            <button className="deleteButton" onClick={deleteItem}>Delete</button>
                            
                        </div>  
                        
                            
                    </div>

                </div>
            </div>
            
        </>
    )

}

export default CheckoutCard;