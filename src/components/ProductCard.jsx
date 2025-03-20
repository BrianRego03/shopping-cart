import { useState } from 'react'
import  '../styles/productCard.css'

const ProductCard=({product,cartUpdate})=>{
    const [cardQuantity,setCardQuantity]=useState(1);
    const decreaseCardQuantity=()=>{
        if(cardQuantity===1){
            return;
        }
        else{setCardQuantity(itemNumber=>itemNumber-1)}
    }
    
    

    return(
        <>
            <div className="cardStyle">
                <div className='imageContainer'><img src={product.image}></img></div>
                <p>{product.title}</p>
                <div className='buttonDivision'>
                    <button onClick={()=>{setCardQuantity(itemNumber=>itemNumber+1)}}>+</button>
                    <span>{cardQuantity}</span>
                    <button onClick={decreaseCardQuantity}>-</button>
                </div>
                <div><button onClick={()=>{cartUpdate(product.id,cardQuantity)}}>Add to cart</button></div>
            </div>
        </>
    )

}

export default ProductCard;