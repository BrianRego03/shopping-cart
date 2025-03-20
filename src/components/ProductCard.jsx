import { useState } from 'react'
import  '../styles/productCard.css'

const ProductCard=({product,cartUpdate})=>{
    const [cardQuantity,setCardQuantity]=useState(product.quantity);
    const decreaseCardQuantity=()=>{
        if(cardQuantity===0){
            return;
        }
        else{
            setCardQuantity(itemNumber=>itemNumber-1);
            cartUpdate(product.id,product.quantity-1);

        }
    }

    const initialCardQuantity=()=>{
        setCardQuantity(1);
        cartUpdate(product.id,1);

    }
    const increaseQuantity=()=>{
        setCardQuantity(itemNumber=>itemNumber+1);
        cartUpdate(product.id,product.quantity+1);


    }
    

    return(
        <>
            <div className="cardStyle">
                <div className='imageContainer'><img src={product.image}></img></div>
                <p>{product.title}</p>
                {
                    cardQuantity>0?(<div className='buttonDivision'>
                        <button onClick={decreaseCardQuantity}>-</button>
                        <span>{cardQuantity}</span>
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