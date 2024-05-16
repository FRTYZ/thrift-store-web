import { Navigate } from "react-router-dom";

// Dashboard
import Home from "../pages/Home";

// Authorization
import SignIn from "../pages/Authentication/SignIn";

 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/sign-in", component: <SignIn />},
]; 

export { publicRoutes };
