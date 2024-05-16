import React, {
    useState,
    useEffect
    } from 'react';

import { Container } from '@mui/material';

// Layout Components
import Navbar from './Navbar';
import Footer from './Footer';

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
  const {loginData} = useAppSelector((state) => state?.authUser)

  // useState elements
  const [login, setLogin] = useState(false);

  // useEffect elements
  useEffect(() => {
      if(loginData) {
          setLogin(true)
      }
  }, [])


  return (
    <React.Fragment>
        <Navbar isLogin={login} />
        <Container>{props.children}</Container>
        <Footer />
    </React.Fragment>
  )
}

export default Layout