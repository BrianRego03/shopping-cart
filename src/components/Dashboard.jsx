import { useEffect } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";

const Dashboard = ()=>{

    const navigate = useNavigate();
    const productArray=[];

    const useFetchProducts =()=>{
        useEffect(()=>{
            const fetchData= async ()=>{
                try{
                    const response = await fetch("https://fakestoreapi.com/products");
                    if(!response.ok){
                        throw new Error('HTTP error');

                    }
                    let postData=await response.json();
                    console.log(postData);
                }
                catch(err){
                    console.log(err.message);

                }
                finally{
                    console.log("done");
                }
            }
            fetchData();
        },[]);

    }
    useFetchProducts();


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
        <Outlet />


        </>
    )
}

export default Dashboard;