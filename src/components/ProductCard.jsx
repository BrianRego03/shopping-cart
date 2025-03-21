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
                        <button onClick={decreaseCardQuantity}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>):(<div>
                    <button onClick={initialCardQuantity}>Add to cart</button>
                    </div>)
                }
                
               
            </div>
        </>
    )

}

export default ProductCard;