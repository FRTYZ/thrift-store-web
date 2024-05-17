import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

// Layout/Navbar.tsx
export const navbarStyles: Record<string, SxProps<Theme> | undefined> = { 
    appBar: {
        bgcolor: '#FFFFFF', 
        boxShadow: 1,
        marginBottom: 1,
        borderBottom: '1px solid #25d6a2'
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
        borderRight: '1px solid #25d6a2',
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

    // Right elements for user
    authAvatarIconButton: {
        ml: 2
    },
    authAvatar: {
        width: 32,
        height: 32,
        marginRight: '5px'
    },

    authMenuSellButton: {
        color: '#000000',
        backgroundColor: '#25d6a2 ',
        borderRadius: 2,
        '&:hover': { backgroundColor: '#FFFFFF', color: '#25d6a2' },
        padding: '6px 25px'
    },
    authMenuSellButtonText: {
        fontWeight: '600', 
        textTransform: 'none'
    },


    // Menu popover
    authMenuAvatar: {
        width: '56px !important',
        height: '56px !important',
    },
    authMenuAvatarText: {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: 700,
        paddingLeft: '15px'
    },
    authMenuProfileButton: {
        backgroundColor: '#25d6a2',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        padding: '0px 25px 0px 25px',
        fontSize: '16px',
        marginTop:'15px',
        marginBottom:'5px',
        borderRadius: 15,
        '&:hover': { bgcolor: '#FFFFFF', border: '6px solid #25d6a2', color: '#25d6a2' },
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

// Layout/navbar.tsx
export const authUserMenuStyle = {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
    },
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
    }
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
        marginTop: '2%',
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

// pages/Authentication/SignIn.tsx ve
// pages/Authentication/SignUp.tsx

export const authenticationStyles: Record<string, SxProps<Theme> | undefined> = { 
    bottomBox: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        m: 1
    },
    formBox: {
        mt: '50px'
    },
    bottomText: {
        color: 'blue', 
        cursor: 'pointer'
    }
}

// pages/Home/index.tsx
export const homeBannerStyles: Record<string, CSSProperties | undefined > = {
    bannerDesktop: {
        width: '100%',
        height: 'auto',
    },
    bannerMobile: {
        width: '100%',
        height: 'auto'
    },
}

// pages/Home/index.tsx
export const homePageStyles: Record<string, CSSProperties | SxProps<Theme>  | undefined > = {
    bannerDiv: {
        marginTop: '10px',
        display :'block'
    },
    bannerDesktopBox: {
        display: {
            xl: 'block', 
            lg: 'block', 
            md: 'block', 
            sm: 'none', 
            xs: 'none'
        }
    },
    bannerMobileBox: {
        display: {
            xl: 'none', 
            lg: 'none', 
            md: 'none', 
            sm : 'block', 
            xs: 'block'
        },
       
    },
    bannerContainer: {
        position: 'absolute',
        bottom: '14px',
        left: '16px'
    },
    bannerButton: {
        padding: {lg: '7px 20px 7px 20px', md: '7px 20px 7px 20px', sm: '5px 15px 5px 15px', xs: '2px 10px 2px 10px'},
        backgroundColor: '#c95e7e',
        marginRight:'20px',
        textTransform: 'none',
        color: '#FFFFFF',
        fontWeight: 700,
        borderRadius: '50px',
        border: '3px solid #3f475f',
        '&:hover': { 
            backgroundColor: '#FFFFFF', 
            border: '3px solid #3f475f', 
            color: '#c95e7e' 
        },
    },
    homeTitle: {
        marginTop: '25px',
        marginBottom: '15px',
        fontSize: '24px',
        fontWeight: 200
// components/AdCard.tsx
export const adCardStyles: Record<string, SxProps<Theme> | undefined> = {
    cardLazy: {
        maxWidth: '345px',
        height: '250px',
        boxShadow: '0 1px 3px 0 rgba(0,47,52,.2), 0 1px 3px 0 rgba(0,47,52,.2)',
        backgroundColor: '#ddd9d9'
    },
    card: {
        maxWidth: '345px'
    },
    cardHeader: {
        display: {
            xl : 'flex', 
            md: 'flex', 
            sm: 'flex', 
            xs: 'none'
        }, 
    },
    
    // Card content
    cardMainCategoryText: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#3b3b3b'
    },
    cardSubCategoryText: {
        fontSize: '14px',
        lineHeight: '20px',
        color: '#3b3b3b'
    },
    cardPriceText: {
        textAlign: {xl : 'right', md: 'right', sm: 'right', xs: 'left'},
        fontSize: '22px',
        lineHeight: '26px',
        marginTop: '18px',
        fontWeight: 500,
        color: '#3b3b3b'
    },
    
    // Card footer
    cardLocationText: {
        fontSize: '10px',
        lineHeight: '20px',
        color: '#3b3b3b',
        textAlign: 'left',
    },
    cardFavoriteBox: {
        float: 'right'
    },

    // Pagination
    paginationBox: {
        textAlign: 'center', 
        marginTop: '30px' 
    },
    paginationButton: {
        backgroundColor: '#25d6a2',
        color: '#FFFFFF',
        borderRadius: '50px',
        border: '3px solid transparent',
        textTransform: 'none',
        marginRight: {xl: '20px', lg: '20px', md: '0px', sm:'0px', xs: '0px'}, 
        marginBottom: '60px',
        fontSize :'16',
        fontWeight: 700,
        '&:hover': { 
            backgroundColor: '#FFFFFF', 
            border: '3px solid #25d6a2', 
            color: '#25d6a2' 
        },
    }
}
}
// pages/Adverts/SellCategory.tsx
export const homePostAdvertStyles: Record<string, SxProps<Theme>  | undefined > = {
    topTitle: {
        fontSize: '24px', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        marginTop: '15px', 
        marginBottom: '15px', 
        textAlign: 'center'
    },
    categoryMainBox: {
        border: '1px solid #e0e0e0', 
        borderRadius: '8' 
    },
    categoryColumnTitle: {
        fontSize: '16px', 
        fontWeight: 700, 
        lineHeight: 1.5, 
        margin: '25px 15px 15px 30px' 
    },
    // Left category column
    leftCategoryGrid: {
        marginBottom: '20px' 
    },
    leftCategoryTabs: {
        borderRight: 1, 
        borderColor: 'divider'
    },
    leftCategoryTab: {
        justifyContent: 'flex-start',
        minHeight: '54px',
        maxWidth: '100%',
    },

    // right category column
    rightCategoryListItem: {
        padding: 0,
        display: 'contents'
    },
    rightCategoryListItemButton: {
        padding: '0', 
        border: '1px solid #e0e0e0',
        maxWidth: '100%', 
        minHeight: '54px'
    },
    rightCategoryListItemText: {
        paddingLeft: '20px', 
        color: '#2c2c2c' 
    }
}
