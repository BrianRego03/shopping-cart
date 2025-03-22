import { useEffect, useState } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "../styles/dashboard.css"

const Dashboard = ()=>{

    const navigate = useNavigate();
    const [productArray,setProductArray]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    class CartObject{
        constructor(objectData){
            Object.assign(this,objectData);
            this.quantity=0;
            this.id=uuidv4();
        }
        changeQuantity(amount){
            this.quantity=amount;
            return this;
            
        }
    }

    const useFetchProducts =()=>{
        useEffect(()=>{
            const fetchData= async ()=>{
                try{
                    const response = await fetch("https://fakestoreapi.com/products");
                    if(!response.ok){
                        throw new Error('HTTP error');

                    }
                    let postData=await response.json();
                    postData=[...postData.map((item)=>{return new CartObject(item)})];
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

    const addToCart=(identity,productQuantity)=>{   
        const cartSelectionArray=productArray.map((item)=>{
            if(item.id===identity)
                return item.changeQuantity(productQuantity);
            else return item;
        })
        console.log(cartSelectionArray);
        setProductArray(cartSelectionArray);
    }

    const cartCount= productArray.reduce((total,items)=>total+items.quantity,0);


    return (
        <>
        <div className="dashboardContainer">
            <p className="siteTitle">Shop-It</p>
            <nav className="navBar">
                <div>
                    <button onClick={()=>{navigate("/")}}>Home</button>
                </div>
                <div>
                    <button onClick={()=>{navigate("/catalog")}}>Catalog</button>
                </div>
                <div>
                    <button onClick={()=>{navigate("/checkout")}}>Cart {cartCount>0?cartCount:null}</button>
                </div>    
            </nav>

        </div>
        
        <Outlet context={{productArray,error,loading,addToCart}}/>


        </>
    )
}

export default Dashboard;