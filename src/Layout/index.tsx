import React, {
    useState
    } from 'react';

import { Container } from '@mui/material';

// Layout Components
import Navbar from './Navbar';
import Footer from './Footer';
    
// interface
import { LayoutProps } from './layout';

const Layout = (props: LayoutProps) => {
  return (
    <>
        <Navbar isLogin={false} />
        <Container>{props.children}</Container>
        <Footer />
    </>
  )
}

export default Layout