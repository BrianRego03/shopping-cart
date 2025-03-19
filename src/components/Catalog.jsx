import { useOutletContext } from "react-router-dom";
import ProductCard from "./Productcard";
import "../styles/catalog.css"

const Catalog = ()=>{
    const {productArray}=useOutletContext();

    console.log(productArray);


    return (
        <>
            <div id="productCatalog">
                {productArray.map((item,index)=>{
                    return <ProductCard key={index} product={item}/>
                })}
            </div>
            
            <p>Catalog Page</p>
        </>
    )
}

export default Catalog;