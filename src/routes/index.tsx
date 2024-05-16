import { Navigate } from "react-router-dom";

// Dashboard
import Home from "../pages/Home";

// Authorization
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/sign-in", component: <SignIn />},
    { path: "/sign-up", component: <SignUp />},
]; 

export { publicRoutes };
