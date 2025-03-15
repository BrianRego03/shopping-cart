import { Link,Outlet } from "react-router-dom";

const Dashboard = ()=>{


    return (
        <>
        <p>Dashboard</p>
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/catalog">Catalog</Link>

            </div>
            <div>
                <Link to="/checkout">Cart</Link>
            </div>    
        </nav>
        <Outlet />


        </>
    )
}

export default Dashboard;