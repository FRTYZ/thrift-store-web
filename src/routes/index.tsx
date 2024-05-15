import { Navigate } from "react-router-dom";

// Dashboard
import Home from "../pages/Home";


 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
]; 

export { publicRoutes };
