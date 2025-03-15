import { Link,Outlet, useNavigate } from "react-router-dom";

const Dashboard = ()=>{

    const navigate = useNavigate();


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