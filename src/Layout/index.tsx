import React, {
    useState
    } from 'react'

// Layout Components
import Navbar from './Navbar';
    
// interface
import { LayoutProps } from './layout';

const Layout = (props: LayoutProps) => {
  return (
    <>
        <Navbar isLogin={false} />
        <> {props.children} </>
    </>
  )
}

export default Layout