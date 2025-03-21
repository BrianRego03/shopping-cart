import  '../styles/productCard.css'

const ProductCard=({product,cartUpdate})=>{
    const decreaseCardQuantity=()=>{
            cartUpdate(product.id,product.quantity-1);

    }

    const initialCardQuantity=()=>{
        cartUpdate(product.id,1);

    }
    const increaseQuantity=()=>{
        cartUpdate(product.id,product.quantity+1);


    }
    

    return(
        <>
            <div className="cardStyle">
                <div className='imageContainer'><img src={product.image}></img></div>
                <p>{product.title}</p>
                {
                    product.quantity>0?(<div className='buttonDivision'>
                        <button className="quantityButton" onClick={decreaseCardQuantity}>-</button>
                        <span>{product.quantity}</span>
                        <button className="quantityButton" onClick={increaseQuantity}>+</button>
                    </div>):(<div className='addCartContainer'>
                    <button className='addCartButton' onClick={initialCardQuantity}>Add to cart</button>
                    </div>)
                }
                
               
            </div>
        </>
    )

}

export default ProductCard;