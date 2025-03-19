import { useOutletContext } from "react-router-dom";
import ProductCard from "./Productcard";

const Catalog = ()=>{
    const {productArray}=useOutletContext();

    console.log(productArray);


    return (
        <>
            <ProductCard array={productArray}/>
            <p>Catalog Page</p>
        </>
    )
}

export default Catalog;