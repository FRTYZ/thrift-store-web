import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

// Layout/Navbar.tsx
export const navbarStyles: Record<string, SxProps<Theme> | undefined> = { 
    appBar: {
        bgcolor: '#FFFFFF', 
        boxShadow: 1
    },
    navContainer: {
        marginTop: '3px',
        marginBottom: '3px',
        paddingLeft: {sm : '0px'},
        paddingRight: {sm: '0px'}
    },
    navToolbar: {
        paddingRight: { sm: '0px' },
        paddingLeft: { sm: '0px', xs: '0px' },
        display: { md: 'flex', xs: 'none' }
    },
    logoIconButton: {
        display: { md: 'flex', xs: 'none' }
    },

    // Right elements
    rightButtonsGrid: {
        display: { md: 'contents', sm: 'contents', xs: 'none' },
    },
    rightLoginButtonGrid :{
        display : 'inline-flex', marginRight: '20px'
    },
    loginButtonTextOnLeft: {
        fontSize: '14px',
        color: '#3b3b3b',
        fontWeight: '600',
        borderRight: '1px solid #e73e61',
        width: 'max-content',
        textTransform: 'none',
        textDecoration: 'none',
        marginLeft: '24px',
        paddingRight: '20px'
    },
    loginButtonTextOnRight: {
        fontSize: '14px',
        color: '#3b3b3b',
        fontWeight: '600',
        width: 'max-content',
        textTransform: 'none',
        textDecoration: 'none',
        marginLeft: '24px',
        marginRight: '20px'
    },

    // Mobile navbar
    mobileToolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        display: { md: 'none' }
    },
    mobileNavbarHamburgerBox: {
        float: 'left'
    },
    mobileTopBox: {
        display: 'block',
        textAlign: 'center',
    },
    mobileTopLogo: {
        p: '5px 0px 5px 0px'
    },
    mobileTopSearchBox: {
        float: 'right', 
        border: '2px solid black', 
        borderRadius: 0 
    },

    // Drawer styles
    drawerCloseIconGrid: {
        marginTop: '1px',
    },
    drawerCloseIcon : {
        fontSize: '2.5rem' 
    },
    

    // Drawer menu list area
    drawerMenuList: {
        width: '100%', 
       
        bgcolor: 'background.paper' 
    },
    drawerMobileAvatarListItem: {
        marginTop: '20px',
        marginBottom: '10px',
        paddingLeft: 0
    },
    drawerAvatar: {
        width: 50,
        height: 50
    },
    drawerAvatarLoginText: {
        fontWeight: 600, 
        marginLeft: '10px', 
        fontSize: '20px'
    },
    drawerProfileButtonItem: {
        display: 'grid',
        marginRight: '20px',
        marginBottom:'25px',
    },
    authMobileMenuProfileButton: {
        backgroundColor: '#ff3f55',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        padding: '0px 25px 0px 25px',
        fontSize: '16px',
        borderRadius: 15,
        '&:hover': { bgcolor: '#FFFFFF', border: '6px solid #ff3f55', color: '#ff3f55' },
    },
    drawerMenuListItemButton: {
        paddingLeft: 0 
    },
    drawerMenuListItemIcon: {
        minWidth: '45px'
    },
    drawerAuthButtonGrid: {
        display: 'grid',
        margin: '10px 10px'
    },
    drawerAuthLoginButton: {
        borderRadius: 5,
        backgroundColor: '#3f475f',
        color: '#FFFFFF',
        textTransform: 'none',
        marginTop: '20px',
        padding: '10px'
    },
    drawerRegisterButton: {
        borderRadius: 5,
        backgroundColor: '#FFE800',
        color: '#000000',
        textTransform: 'none',
        marginTop: '20px',
        padding: '10px'
    },
}

// components/SearchBar.tsx
export const searchStyles: Record<string, SxProps<Theme> | undefined> = {
    // Location Input
    selectLocation: {
        flex: 1,
        fontSize: '15px'
    },
    selectLocationListItem: {
        padding: '0px'
    },

    // Search Input
    inputSearchGrid: {
        paddingLeft: '2%'
    },
    inputSearchPaper: { 
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid #c4baba', 
        boxShadow: '0', 
        p: '0px', 
        width: '100%',
        '&:hover': {
            borderColor: '#000000'
        }
    },
    inputSearchErrorPaper: {
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid red', 
        boxShadow: '0', 
        p: '0px', 
        width: '100%' 
    },
    inputSearchAreaInputBase: {
        ml: 1.5, 
        flex: 1, 
        pt: 0.5,
        color:'#000000',
        fontWeight: 500 
    },
    searchInputIconButton: {
        p: '5px',
        color: '#2c2c2c',
        borderRadius: '0px 2px 2px 0px',
        '&:hover': { 
            color: 'FFFFFF', 
            backgroundColor: '#2c2c2c' 
        }
    },

    // Mobile
    drawerBoxTitle : {
        p:'5px',
    },
    drawerBoxLeftIcon: {
        float: 'left'
    },
    drawerBoxRightButton: {
        float: 'right',
        position: 'relative',
        bottom: '50px',
        color: '#FFFFFF',
        p:0,
        borderRadius: 1,
        fontSize: '12px',
        backgroundColor: '#25d6a2',
        border: '3px solid #25d6a2'
    },
    dialogTitleClose: {
        fontSize: '2rem' 
    },
    dialogContent: {
        backgroundColor: '#25d6a226',
    },
    inputMobileSearchGrid: {
        paddingLeft: '0',
        marginBottom: '15px',
        marginTop: '10px',
    },
    mobileSelectLocation: {
        backgroundColor: '#ffffff',
        marginBottom: '40px'
    },
    // Recent Search
    dialogCategoryBox: {
        marginTop: '25px'
    },
    dialogRecentSearchListItem: {
        p: '0px 5px 5px 0px'
    },
    dialogRecentSearchListItemButton: {
        padding: '5px 5px 5px 10px'
    },
    dialogRecentSearchText: {
        color: '#2c2c2c',
        fontSize: '14px',
        fontWeight: 700
    }
}

// Layout/Footer.tsx
export const footerStyles: Record<string, SxProps<Theme> | undefined> = {
    footerMainBox: {
        padding: '15px 10px 15px 10px',
        borderTop: '3px solid #25d6a2',
    },
    footerHead: {
        color: '#000000',
        textDecoration: 'underline',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '20px',
        textTransform: 'uppercase',
        marginBottom: '15px'
    },
    footerContent: {
        marginTop: '15px',
        marginBottom: {lg: '35px', xs: '20px', sm: '20px'},
        paddingLeft: '0px',
        listStyleType: 'none'
    },
    footerContentText: {
        color: '#000000',
        fontSize: '12px',
        cursor: 'pointer',
        paddingBottom: '6px'
    },

    // Bottom footer
    bottomFooterBox: {
        marginBottom: '5px',
        textAlign: 'center',
    },
    bottomFooterHeader: {
        color: '#000000', 
        fontSize: '14px',
        fontWeight: 600
    },
    bottomFooterText: {
        color: '#000000', 
        fontSize: '12px',
    }
// component/FormElements
export const formElementsStyles: Record<string, SxProps<Theme> | undefined> = {
    // FileViewSection
    imageBox: {
        position: 'relative', 
        margin: '20px 20px 10px 0px' ,
        display: 'inline-block', 
        border: '2px solid #7c4b00'
    },
    closeIconBox: {
        position: 'absolute', 
        top: 0, 
        right: 0, 
        padding: '5px', 
        display: 'flex', 
        flexDirection: 'column'
    },
    closeIconButton : {
        border: '2px solid red',
        borderRadius: 3, 
        '&:hover': {
            backgroundColor :'#FFFFFF'
        },
    },
    closeIcon: {
        fontSize: '16px',
        color: 'red' 
    },
    processBox: {
        display :'grid'
    },
    dowloadProcessText: {
        color: 'blue', 
        cursor: 'pointer'
    }
}
}