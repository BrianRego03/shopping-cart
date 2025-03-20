import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";


const Checkout = ()=>{
    const {productArray,addToCart}=useOutletContext();


    return (
    
        <>
            <p>Checkout Page</p>
            {productArray.filter(item=>item.quantity>0)
                        .map((item)=><CheckoutCard key={item.id} product={item}/>)}
        </>

    )
}

export default Checkout;