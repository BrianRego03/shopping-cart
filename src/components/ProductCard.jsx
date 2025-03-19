import  '../styles/productCard.css'

const ProductCard=({product})=>{
    

    return(
        <>
            <div className="cardStyle">
                <div className='imageContainer'><img src={product.image}></img></div>
                <p>{product.title}</p>
                <p className='buttonDivision'>+/-</p>
            </div>
        </>
    )

}

export default ProductCard;