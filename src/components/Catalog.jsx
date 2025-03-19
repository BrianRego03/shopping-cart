import { useOutletContext } from "react-router-dom";
import ProductCard from "./Productcard";

const Catalog = ()=>{
    const {productArray}=useOutletContext();

    console.log(productArray);


    return (
        <>
            {productArray.map((item,index)=>{
                return <ProductCard key={index} product={item}/>
            })}
            <p>Catalog Page</p>
        </>
    )
}

export default Catalog;