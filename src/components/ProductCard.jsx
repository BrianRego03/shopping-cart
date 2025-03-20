import  '../styles/productCard.css'

const ProductCard=({product})=>{
    

    return(
        <>
            <div className="cardStyle">
                <div className='imageContainer'><img src={product.image}></img></div>
                <p>{product.title}</p>
                <div className='buttonDivision'>
                    <button>+</button>
                    <span>{product.quantity}</span>
                    <button>-</button>
                </div>
            </div>
        </>
    )

}

export default ProductCard;