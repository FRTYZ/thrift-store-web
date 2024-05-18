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
import AdvertDetail from "../pages/Adverts/Detail";

// Profile
import MyAdsView from "../pages/Profile/MyAdsList";
import MyFavoriteView from "../pages/Profile/MyFavoriteList";
import ProfileEdit from "../pages/Profile/ProfileEdit";
import ProfileView from "../pages/Profile/ProfileView";

 const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/", exact: true, component: <Navigate to="/" />},
    { path: "/item/:title/:itemId", component: <AdvertDetail /> },
    { path: "/sign-in", component: <SignIn />},
    { path: "/sign-up", component: <SignUp />},
    { path: "/profile/:userId", component: <ProfileView /> },
]; 

const authProtectedRoutes = [
    { path: "/post", component: <SellCategory /> },
    { path: "/post/attributes", component: <Sell /> },
    { path: "/post/edit/:advertId", component: <AdvertEdit /> },
    { path: "/profile/myads", component: <MyAdsView /> },
    { path: "/profile/myfavorite", component: <MyFavoriteView /> },
    { path: "/editProfile/info", component: <ProfileEdit /> },
    { path: "/profile/", component: <ProfileView /> },
]

export { publicRoutes, authProtectedRoutes };
