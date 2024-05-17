import { Navigate } from "react-router-dom";

// Dashboard
import Home from "../pages/Home";

// Authorization
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

// Adverts
import Sell from "../pages/Adverts/Sell";
import SellCategory from '../pages/Adverts/SellCategory'

 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/sign-in", component: <SignIn />},
    { path: "/sign-up", component: <SignUp />},
]; 

const authProtectedRoutes = [
    { path: "/post", component: <SellCategory /> },
    { path: "/post/attributes", component: <Sell /> },
]

export { publicRoutes, authProtectedRoutes };
