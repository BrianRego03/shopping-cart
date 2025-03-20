import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/catalog.css"

const Catalog = ()=>{
    const {productArray,error,loading,addToCart}=useOutletContext();

    console.log(productArray);

    if(error){
        return (
            <>
                <div>A network error is encountered</div>
            </>
        )
    }

    if(loading){
        return(
            <>
                <div>Loading....</div>
            </>
        )
    }


    return (
        <>
            <div id="productCatalog">
                {productArray.map((item,index)=>{
                    return <ProductCard key={index} product={item} cartUpdate={addToCart}/>
                })}
            </div>
            
            <p>Catalog Page</p>
        </>
    )
}

export default Catalog;