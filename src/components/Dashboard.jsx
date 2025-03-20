import { useEffect, useState } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Dashboard = ()=>{

    const navigate = useNavigate();
    const [productArray,setProductArray]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [cartArray,setCartArray]=useState([]);

    const useFetchProducts =()=>{
        useEffect(()=>{
            const fetchData= async ()=>{
                try{
                    const response = await fetch("https://fakestoreapi.com/products");
                    if(!response.ok){
                        throw new Error('HTTP error');

                    }
                    let postData=await response.json();
                    postData.map((item)=>{item.id=uuidv4()})
                    setProductArray([...postData]);
                    
                    console.log(productArray);
                }
                catch(err){
                    setError(err);

                }
                finally{
                    setLoading(false);
                }
            }
            fetchData();
        },[]);

    }
    useFetchProducts();

    const addToCart=()=>{

    }


    return (
        <>
        <p>Dashboard</p>
        <nav>
            <div>
                <button onClick={()=>{navigate("/")}}>Home</button>
            </div>
            <div>
                <button onClick={()=>{navigate("/catalog")}}>Catalog</button>
            </div>
            <div>
                <button onClick={()=>{navigate("/checkout")}}>Cart</button>
            </div>    
        </nav>
        <Outlet context={{productArray,error,loading}}/>


        </>
    )
}

export default Dashboard;