import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

// Layout/Navbar.tsx
export const navbarStyles: Record<string, SxProps<Theme> | undefined> = { 
    appBar: {
        bgcolor: '#FFFFFF', 
        boxShadow: 1,
        marginBottom: 0,
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

// components/Layout/SubNavbar.tsx
export const subNavbarStyles: Record<string, SxProps<Theme> | undefined> = {
    appBar: {
        bgcolor: 'hsla(0,0%,100%,.87)', 
        boxShadow: 1,
        display: 'contents'
    },

    //MOBİLE
    mobileContainer: {
        marginBottom: '2px',
        paddingRight: '0px',
        paddingLeft: '0px',
        backgroundColor: '#3b3b3b',
    },
    mobileToolbar: {
        textAlign: 'center',
        minHeight:  '30px',
        marginBottom: '7px',
        display: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'grid',
            xs: 'grid'
        }
    },
    allCategoryButton: {
        color: '#fff',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '16.1px',
        textTransform: 'uppercase',
    },
    mobileSubDrawerBoxTitle : {
        p:'5px',
    },
    mobileSubDrawerBoxLeftIcon: {
        float: 'left'
    },
    mobileSubDialogTitleClose: {
        fontSize: '2rem' 
    },
    leftCategoryTabs: {
        borderRight: 1, 
        borderColor: 'divider'
    },
    leftCategoryTab: {
        justifyContent: 'flex-start',
        '&.Mui-selected': {
            color: '#2c2c2c',
            backgroundColor: '#e0e0e0'
        },
        minHeight: '54px',
        maxWidth: '100%',
        border: '1px solid #e0e0e0'
    },
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
    fileInputValidationText: {
        color : '#ff3f55', 
        fontSize: '12px',
    },
    fileInputImageText: {
        position: 'absolute', 
        top: '68px',
        right:'22px',
        backgroundColor: 'red',
        color: 'white', 
        padding: '3px',
        borderRadius: '5px', 
        margin: '5px',
        fontSize: '12px',
        fontWeight: 300
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
    },   
}

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

// components/common/Favorite.tsx
export const favoriteStyles: Record<string, SxProps<Theme>  | undefined > = {
    favoriteIconButton: {
        padding:'6px 6px 5.5px 6px', 
        backgroundColor: '#757575'
    },
    favorite: {
        color:'red', fontSize: '16px'
    },
    nonFavorite : {
        color:'white', fontSize: '16px' 
    }
}

// pages/Adverts/search.tsx
export const advertSearchStyles: Record<string, SxProps<Theme> | undefined> = {
                            // Left Filter Columns
    leftFilterGrid: {
        marginTop: '30px',
        paddingRight: '22px'
    },

    // Title
    leftFilterTitleLink: {
        fontSize: '12px', 
        fontWeight: 400,
        color: '#424242'
    },
    leftFilterTitle: {
        fontSize: '24px', 
        fontWeight: 600
    },
    leftFilterAccording: {
        boxShadow: 'none'
    },
    leftFilterAccordingSummary: {
        padding:0
    },
    leftFilterCardsTitle: {
        flexShrink: 0, 
        fontWeight: 700, 
        textTransform: 'uppercase'
    },
    leftFilterAccordingTitleBox: {
        display :'flex', 
        marginTop: '10px'
    },
    leftFilterAccordingTitle: {
        fontSize: '14px', 
        fontWeight: 700, 
        color: '#2c2c2c'
    },
    leftFilterAccordingContentBox: {
        display :'flex', 
        marginTop: '10px'
    },
    leftFilterAccordingContentActiveBox: {
        display :'flex',
        marginTop: '10px',
        fontWeight: 700, 
        backgroundColor: '#f5f5f5',
        color: '#2c2c2c',
    },
    leftFilterAccordingMainContent: {
        fontSize: '14px', 
        fontWeight: 700, 
        color: '#2c2c2c',
        marginLeft: '5px', 
    },
    leftFilterAccordingSubContent: {
        fontSize: '14px', 
        fontWeight: 500, 
        color: '#616161', 
        paddingLeft: '30px' , 
        marginBottom: '10px',
        cursor: 'pointer'
    },
    leftFilterAccordingActiveSubContent: {
        color: '#2c2c2c', 
        fontSize: '14px', 
        fontWeight: 700, 
        paddingLeft: '30px' , 
        marginBottom: '10px',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5'
    },

    // Filter Price 
    textBetweenPriceFilter: {
        textAlign: 'center', 
        marginTop: '10px'
    },
    priceFilterButton: {
        color: '#FFFFFF',
        backgroundColor: '#ff3f55',
        borderRadius: 5,
        border: '3px solid #ff3f55',
        textTransform: 'none',
        padding: 0,
        '&:hover': { 
            backgroundColor: '#FFFFFF', 
            color: '#ff3f55', 
            border: '3px solid #ff3f55' 
        },
    },

                             // Top Right Filter Columns
    rightFilterGrid: {
        marginTop: '15%',
        marginBottom: '10px',
        borderBottom: '1px solid #0000001f'
    },
    rightFilterInfoBox: {
        display :'flex',
        marginTop: '10px'
    },
    rightFilterInfo: {
        marginBottom: '15px',
        fontSize: '18px',
        fontWeight: 200,
    },
    rightFilterCount: {
        borderRadius: 2,
        backgroundColor: '#99b7e5',
        color: '#000000',
        fontWeight: 600,
        fontSize: '12px',
        marginTop: '7px',
    },
    rightSortingFilterText: {
        fontSize: '14px', 
        fontWeight: 600, 
        marginTop: 1.8, 
        textTransform: 'uppercase',
        textAlign: {xl : 'right', lg: 'right', md: 'right', sm: 'left', xs: 'left' }
    },
    rightSortingFilter: {
        textAlign: 'left'
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

// pages/Post/attributes and pages/Post/Edit
export const postAdvertStyles: Record<string, SxProps<Theme>  | undefined > = {
    toptTile: {
        fontSize: '24px', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        marginTop: '25px', 
        textAlign: 'center' 
    },
    mainBox: {
        border: '1px solid #e0e0e0', 
        borderRadius: 2 
    },
    subTitle: {
        fontSize: '16px', 
        fontWeight: 700, 
        lineHeight: 1.5, 
        margin: '25px 15px 15px 25px'
    },

    // Breadcrumb
    breadCrumbBox: {
        marginLeft: '25px', 
        marginRight: '25px', 
        paddingBottom: '25px', 
        display: 'inline-flex', 
    },
    breadCrumbText: {
        fontSize: '14px',
        color: '#00000099' 
    },
    breadCrumbChangeText: {
        color: '#ff3f55',
        fontSize: '14px', 
        marginLeft: '20px', 
        fontWeight: 700, 
        '&.hover': { 
            borderBottom: 'none' 
        }
    },
    // Inputs
    inputBox: {
        padding: '25px',
        width: {xl: '50%', md: '50%', sm: '50%', xs: 'auto'}
    },
    inputTopTitles: {
        fontSize: '16px', 
        fontWeight: 700, 
        lineHeight: 1.5, 
        margin: '25px 15px 15px 25px' 
    },
   
    sendButtonBox: {
        textAlign: 'center', 
        marginTop: '30px', 
        marginBottom: '30px'
    },
    sendButton: {
        backgroundColor: '#25d6a2',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        fontSize: '16px',
        borderRadius: 15,
        '&:hover': { bgcolor: '#FFFFFF', border: '6px solid #25d6a2', color: '#25d6a2' },
    }
}

// pages/Profile/MyAdsView.tsx
export const adViewStyles: Record<string, SxProps<Theme>  | undefined > = {
    mainGrid: {
        marginTop: '25px' 
    },
    topMenuBox: {
        display: 'inline-flex',
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '15px'
    },
    topMenuText: {
        color: '#2c2c2c',
        paddingRight: '20px'
    },
    adCard: {
        minWidth: 275,
        boxShadow: '0 1px 3px 0 rgba(0,47,52,.2), 0 1px 3px 0 rgba(0,47,52,.2)',
        borderLeft: '4px solid #004bbe'
    },
     adCardDisabled: {
        minWidth: 275,
        boxShadow: '0 1px 3px 0 rgba(0,47,52,.2), 0 1px 3px 0 rgba(0,47,52,.2)',
        borderLeft: '4px solid #004bbe',
        opacity: '0.5'
    },
    cardTitleGrid: {
        display: 'inline-flex' 
    },
    defaultImageCardBox: {
        backgroundColor: '#c8c0c0',
        padding: '18px'
    },
    defaultImageIcon: {
        color: 'black'
    },
    adTitle: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 700,
        color: '#2c2c2c',
        paddingLeft: '15px',
        paddingTop: '20px'
    },
    adPrice: {
        fontSize: '14px',
        color: '#2c2c2c',
        marginTop: '28px'
    },
    adStatusButton: {
        backgroundColor: '#004bbe',
        color: '#ffffff',
        fontSize: '10px',
        fontWeight: 400,
        marginTop: '23px',
        padding: '4px 35px'
    },
    adSellStatusButton: {
        backgroundColor: '#8baf60',
        color: '#ffffff',
        fontSize: '10px',
        fontWeight: 400,
        marginTop: '23px',
        padding: '4px 35px'
    },
    // ad right column elements
    adRightColumnGrid: {
        paddingTop: { 
            xl: '24px', 
            lg: '24px', 
            md: '24px', 
            sm: '0', 
            xs: '0' 
        }
    },
    adStatusGridOfRightColumn:{
        textAlign: { 
            xl: 'center', 
            lg: 'center', 
            md: 'center', 
            xs: 'start', 
            sm: 'start' 
        },
    },
    adStatusText: {
        fontSize: '14px',
        lineHeight: 1.5,
        color: '#2c2c2c',
        marginTop: '28px'
    },
    adActionIconGrid: {
        textAlign: 'right'
    },

    // ad footer
    cardActions: {
        borderTop: '1px solid #e0e0e0'
    },
    cardSubColumnContainer: {
        display :'contents'
    },
    cardFavoriteStatusGrid: {
        display: 'inline-flex'
    },
    adFavoriteIcon: {
        width: '16px', 
        height: '16px', 
        paddingRight: '4px', 
        paddingTop: '4px'
    },
    adFavoriteText: {
        fontSize: '10px',
        fontWeight: 700,
        lineHeight: '15px',
        paddingTop: '6px'
    },
    rightButtonsBox: {
        textAlign: 'right'
    },
    rightButtons: {
        backgroundColor: '#FFFFFF',
        color: '#ff3f55',
        borderRadius: '50px',
        border: '2px solid transparent',
        outline: '#ff3f55 solid 2px',
        textTransform: 'none',
        fontSize: '12px',
        marginRight: '20px',
        padding: '2px 10px 2px 10px',
        '&:hover': { 
            backgroundColor: '#FFFFFF', 
            border: '2px solid #ff3f55', 
            color: '#ff3f55' 
        },
    }
}

// pages/Profile/ProfileEdit.tsx
export const profileEditStyles: Record<string, SxProps<Theme>  | undefined > = {
    mainBox: {
        marginTop: 6
    },
    profileViewButtonBox: {
        display :'grid',
        marginTop: '5px'
    },
    profileViewButton: {
        backgroundColor: '#FFFFFF',
        color: '#25d6a2',
        borderRadius: '50px',
        border: '3px solid transparent',
        outline: '#25d6a2 solid 3px',
        textTransform: 'none',
        marginRight: {xl: '20px', lg: '20px', md: '0px', sm:'0px', xs: '0px'}, 
        marginBottom: '60px',
        '&:hover': { 
            backgroundColor: '#FFFFFF', 
            border: '3px solid #25d6a2', 
            color: '#25d6a2' 
        },
        fontWeight: 700
    },

    // Left Column
    profileEditMainBox: {
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
    },
    profileEditTitleBox: {
        borderBottom: '1px solid #e0e0e0',
        padding: '25px 0px 15px 25px'
    },
    profileEditTitle: {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: 700
    },
    inputMainBox: {
        borderBottom: '1px solid #e0e0e0',
        padding: '25px 25px 15px 25px',
    },
    inputBox: {
        padding: '10px 0px 10px 0px'
    },
    inputTitle: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 700,
        marginBottom: '20px'
    },
   
    // Phone input setting
    contactAdornment: {
        borderRight: '1px solid #e0e0e0', 
        paddingRight: '10px', 
        fontSize: '12px'
    },
    
    // Buttons
    cancelButton: {
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 700,
        color: '#25d6a2',
        marginTop: '15px',
        borderBottom: '1px solid #25d6a2'
    },
    saveButtonGrid: {
        textAlign: 'right'
    },
    saveButton: {
        backgroundColor: '#25d6a2',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        padding: '7px 5px 7px 5px',
        fontSize: '16px',
        marginRight: '15px',
        marginBottom: '5px',
        borderRadius: 15,
        '&:hover': { 
            bgcolor: '#FFFFFF', 
            border: '6px solid #25d6a2', 
            color: '#25d6a2' 
        },
    }
}

// component/common/NoResult.tsx
export const noResultStyles: Record<string, SxProps<Theme>  | undefined > = {
    searchBox:{
        marginTop: '20%' 
    },
    searchTitle: {
        fontSize: '24px',
        fontWeight: 500,
        textAlign: 'center'
    },
    searchSubTitle: {
         fontSize: '16px',
        textAlign: 'center',
        marginBottom: '40px'
    },
    imageBox: {
        textAlign: 'center', 
        marginTop: '10px' 
    },
    otherBox: {
       textAlign: 'center' 
    },
    otherTitle : {
         fontSize: '18px',
        fontWeight: 700,
        textAlign: 'center',
        color: '#2c2c2c',
        marginTop: '20px'
    },
    otherSubTitle: {
        fontSize: '16px',
        textAlign: 'center',
        lineHeight: '24px',
    },
    otherSellButton: {
         backgroundColor: '#ff3f55',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        padding: '5px 16px 5px 16px',
        fontSize: '16px',
        fontWeight: 700,
        borderRadius: 15,
        marginTop: '20px',
        '&:hover': { bgcolor: '#FFFFFF', border: '6px solid #ff3f55', color: '#ff3f55' },
    },
    otherDiscoverButton: {
        backgroundColor: '#FFFFFF',
        color: '#25d6a2',
        textTransform: 'none',
        border: '6px solid #25d6a2',
        padding: '5px 16px 5px 16px',
        fontSize: '16px',
        fontWeight: 700,
        borderRadius: 15,
        marginTop: '20px',
        '&:hover': { bgcolor: '#25d6a2', border: '6px solid #25d6a2', color: '#FFFFFF' },
    }
}

// component/common/Breadcrumb.tsx
export const breadcrumbStyles = {
    breadcrumbs: {
        fontSize :'12px', 
        marginTop: '10px',
        marginBottom: '10px',
        lineHeight: '15px'
    },
    seperatorStyle: {
        color: '#25d6a2'
    },
    links: {
        textDecoration: 'none', 
        color: 'inherit',
    }
}

// pages/Adverts/Detail.tsx
export const advertDetailCarouselStyles = {
    carouselImg: {
        maxHeight: '400px', 
        width: 'auto', 
        height: '100%' 
    }
}

// pages/Adverts/Detail.tsx
export const advertDetailStyles: Record<string, SxProps<Theme> | undefined> = {
    mainBox: {
        paddingTop: '20px', 
        paddingBottom: '20px'
    },
                        // Left Column = Carousel
    leftColumnGrid: {
        width: { 
            xl: '96%', 
            lg: '96%', 
            md: '100%', 
            sm: '100%', 
            xs: '100%' 
        },
        backgroundColor: '#FFFFFF',
        marginBottom: { md: '10px', sm: '20px', xs: '20px' }
    },

     // Carousel
    carouselBox: {
        backgroundColor: '#616161', 
        maxHeight: '400px', 
        width: 'auto', 
        height: '100%',
        overflow: 'hidden',
        textAlign:'center'
    },

                    // Right Column: Price, Seller, Location cards
    rightColumnMainBox: {
        backgroundColor: '#FFFFFF',
    },
    rightColumnCardBox: {
        borderRadius: 0,
        borderBottom: '1px solid #ebebeb',
        paddingLeft: '10px',
        p: '15px 15px 15px 15px'
    },
    rightColumnInfoBox: {
        padding: '12px 5px 4px 4px'
    },
    rightColumnInfoTitle: {
        fontSize: '28px', 
        lineHeight: '30px', 
        fontWeight: 400, 
        color: '#2c2c2c'
    },
    rightColumnInfoText: {
        fontSize: '22px',
        lineHeight: '30px', 
        color: '#949494',
        marginTop: '10px'
    },
    rightColumnInfoIconsBox: {
        textAlign: 'right',
        height: '100%',
        borderLeft: '1px solid #ebebeb',
        paddingRight: '30px',
    },

    // Price card
    rightColumnPriceBox: {
        padding: '22px 5px 22px 4px'
    },
    rightColumnPriceText: {
        fontSize: '40px',
        lineHeight: '40px',
        fontWeight: 700
    },
    rightColumnBuyButtonBox: {
        float: 'right',
        padding: '10px 5px 2px 4px'
    },
    rightBuyButton: {
        color: '#FFFFFF',
        backgroundColor: '#25d6a2 ',
        borderRadius: '3px',
        '&:hover': { backgroundColor: '#FFFFFF', color: '#25d6a2' },
        padding: '20px 5px',
        margin: '0 0 0 6px',
        width: '140px'
    },
    rightBuyButtonText: {
        fontWeight: '500', 
        textTransform: 'none',
        fontSize: '18px'
    },

    // Seller card
    rightColumnSellerAvatar: {
        width: '68px', 
        height: '68px',
        cursor: 'pointer'
    },
    rightColumnSellerFullname: {
        fontSize: '20px', 
        lineHeight: '20px', 
        fontWeight: 700, 
        color: '#2c2c2c', 
        marginTop: '20px',
        cursor: 'pointer'
    },
    rightColumnSellerIconGrid: {
        textAlign: 'right', 
        marginTop: '10px' 
    },
    rightColumnDescription: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 400,
        color: '#3b3b3b',
        margin: '25px 10px 10px 0px'
    },


    rightColumnDetailText: {
        fontSize: '20px', 
        lineHeight: '20px', 
        fontWeight: 700, 
        color: '#2c2c2c', 
        marginTop: '10px', 
        marginBottom: '10px'
    },

    // Advert info area
    rightColumnAdvertInfoText: {
        fontSize: '14px', 
        marginTop: '10px', 
        color: '#2c2c2c', 
        fontWeight: 'bolder'
    },
    rightColumnAdvertComplaint: {
        fontSize: '12px', 
        color: '#ff3f55', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        marginTop: '10px',
        textAlign: 'right'
    }
}

// pages/Profile/profileView.tsx
export const profileViewStyles: Record<string, SxProps<Theme>  | undefined > = {
    mainBox: {
        marginTop: '25px'
    },
    profileInfoBox: {
        paddingLeft: '45px', 
        marginBottom: '25px'
    },
    profileImageBox: {
        display: 'flex', 
        justifyContent: 'center'
    },
    profileImage: {
        width: 120, 
        height: 120, 
        alignSelf: 'center'
    },
    profileFullname: {
        fontSize: '24px',
        lineHeight: '24px',
        fontWeight: 700,
        marginTop: '25px'
    },
    profileListItem: {
        paddingLeft: '0'
    },
    profileListItemAvatar: {
        minWidth: '35px'
    },
    editProfileButtonBox: {
        display :'grid'
    },
    editProfileButton: {
        backgroundColor: '#ff3f55',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        fontSize: '16px',
        marginRight: '15px',
        marginBottom: '5px',
        borderRadius: 15,
        '&:hover': { bgcolor: '#FFFFFF', border: '6px solid #ff3f55', color: '#ff3f55' },
    }
}

export const privacyStyles: Record<string, SxProps<Theme>  | undefined > = {

    listItemButton: {
        p:0
    },
    listItemText: {
        color:'#424242', 
        fontSize: '16px',
        lineHeight: '24px',
        margin: '5px',
        fontWeight: 400
    },
    listItemActiveText: {
        color:'#424242', 
        fontSize: '16px',
        lineHeight: '24px',
        margin: '5px',
        fontWeight: 700
    },
    

    settingsMainGrid: {
        marginTop: 4
    },
    settingsLeftBox: {
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        marginBottom: '25px'
    },
    settingsTitleGrid: {
        borderBottom: '1px solid #e0e0e0',
        padding: '15px 0px 15px 25px',
    },
    settingsTitle: {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: 700
    },
    settingContentGrid: {
        borderBottom: '1px solid #e0e0e0',
        padding: '25px 25px 25px 25px',
    },
    settingLeftText: {
        fontSize: '16px', 
        lineHeight: '24px', 
        fontWeight: 700, 
        marginTop: '9px'
    },
    settingLeftSubText: {
        fontSize:'14px',
        lineHeight: '20px'
    },
    settingRightBox: {
        float: 'right'
    },
    passwordBox: {
        marginBottom: '20px' 
    },
    buttonBox: {
        marginBottom: '10px',
        
    },
    saveButton: {
        backgroundColor: '#25d6a2',
        color: '#FFFFFF',
        textTransform: 'none',
        border: '6px solid transparent',
        padding: '7px 5px 7px 5px',
        fontSize: '16px',
        fontWeight: 700,
        marginRight: '15px',
        marginTop: '10px',
        borderRadius: 15,
        '&:hover': { 
            bgcolor: '#FFFFFF', 
            border: '6px solid #25d6a2', 
            color: '#25d6a2' 
        },
    },
}