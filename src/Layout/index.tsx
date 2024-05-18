import React, {
    useState,
    useEffect
    } from 'react';

import { Container } from '@mui/material';

// Layout Components
import Navbar from './Navbar';
import Footer from './Footer';
import SubNavbar from './SubNavbar';

// Helpers
import { RequestPublic } from '../helpers/Request';

// Redux
import { 
  setMenuData, 
  useAppSelector, 
  useAppDispatch 
  } from '../redux/store';

    
// interface
import { LayoutProps } from './layout';

const Layout = (props: LayoutProps) => {

  // Redux elements
  const {loginData} = useAppSelector((state) => state?.authUser);
  const dispatch = useAppDispatch();
  const {menuData} = useAppSelector((state) => state?.Menu);

  // useState elements
  const [login, setLogin] = useState(false);

  // useEffect elements
  useEffect(() => {
      if(loginData) {
          setLogin(true)
      }
  }, [loginData])

  useEffect(() => {
    const getCategories = async() => {
        const categoryGetUrl = "/advert/categories";
        
        const categoryData = await RequestPublic({
            method: 'GET',
            url: categoryGetUrl
        });
       
        dispatch(setMenuData(categoryData))
    }
    
    if(menuData?.length == 0) {
        getCategories()
    }
  }, [])

  return (
    <React.Fragment>
        <Navbar isLogin={login} />
        <SubNavbar categories={menuData!}/>
        <Container>{props.children}</Container>
        <Footer />
    </React.Fragment>
  )
}

export default Layout