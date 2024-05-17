import { Navigate } from "react-router-dom";

// Dashboard
import Home from "../pages/Home";

// Authorization
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

// Adverts
import Sell from "../pages/Adverts/Sell";
import SellCategory from '../pages/Adverts/SellCategory';
import AdvertEdit from "../pages/Adverts/Edit";

// Profile
import MyAdsView from "../pages/Profile/MyAdsList";
import MyFavoriteView from "../pages/Profile/MyFavoriteList";

 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/sign-in", component: <SignIn />},
    { path: "/sign-up", component: <SignUp />},
]; 

const authProtectedRoutes = [
    { path: "/post", component: <SellCategory /> },
    { path: "/post/attributes", component: <Sell /> },
    { path: "/post/edit/:advertId", component: <AdvertEdit /> },
    { path: "/profile/myads", component: <MyAdsView /> },
    { path: "/profile/myfavorite", component: <MyFavoriteView /> },
]

export { publicRoutes, authProtectedRoutes };
