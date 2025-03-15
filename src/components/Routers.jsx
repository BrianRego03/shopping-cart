import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Catalog from "./Catalog";
import Homepage from "./Homepage";
import Checkout from "./Checkout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children:[
            {path:"/", element: <Homepage/>},
            {path:"catalog",element: <Catalog />},
            {path:"checkout", element:<Checkout />}
        ],
    },
]);

export default router;