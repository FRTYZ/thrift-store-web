import { useState, MouseEvent, useEffect  } from 'react'

// Material UI elements
import { 
  Grid, 
  Box, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton, 
  MenuItem, 
  Container, 
  Drawer, 
  Menu, 
  Tooltip, 
  Divider,
  Avatar,
  ListItemAvatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography } from "@mui/material"

// Material UI Icons
import { 
  Sell,
  Close, 
  Favorite, 
  ExpandMore,
  Logout, 
  ArrowBack,
  Settings,
  Search as SearchIcon,
  Menu as MenuIcon } from '@mui/icons-material';


// Material UI Styles and assets
import { navbarStyles, authUserMenuStyle, searchStyles } from '../styles';
import Logo from '../assets/logo.png'

// Components
import SearchBar from '../components/SearchBar';

// Helpers
import { Request } from '../helpers/Request';

// React Router
import { Link, useNavigate } from 'react-router-dom';

// Redux
import store,{ removeAllData} from '../redux/store';

// interfaces
import { NavbarAreaProps } from './layout'
import { LoginData } from '../redux/interface';

const Navbar: React.FC<NavbarAreaProps> = ({isLogin}) => {
    // Router
    const navigate = useNavigate();

    // Redux
    const loginData = store.getState().authUser?.loginData;

    // useState elements
    const [mobileNav, setMobileNav] = useState<null | HTMLElement>(null);
    const [searchDiv, setSearchDiv] = useState<null | HTMLElement>(null);
    const [userData, setUserData] = useState<LoginData>({});
    const [profilePopover, setProfilePopover] = useState<null | HTMLElement>(null);

    // useEffects elements

    /*
        Gets user data in redux state
    */
      useEffect(() => {
        if(loginData){
            setUserData(loginData)
        }
    },[loginData])

    // Functions

                  // Drawer
    // Mobile menu                
    const openMobileMenu = (event: MouseEvent<HTMLElement>) => {
        setMobileNav(event.currentTarget);
    }
    const closeMobileMenu = () => {
        setMobileNav(null)
    }

    // Search
    const openSearchDiv = (event: MouseEvent<HTMLElement>) => {
        setSearchDiv(event.currentTarget);
    }

    const closeSearchDiv = () => {
        setSearchDiv(null)
    }

    // Profile avatar Menu

    const LoginOpen = Boolean(profilePopover);

    const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProfilePopover(event.currentTarget);
    };
    const handleProfileClose = () => {
        setProfilePopover(null);
    };

    // Logout
    const handlelogout = async() => {
        const url = "/oauth/logout";
        const result = await Request({
            method: 'GET',
            url: url
        });
  
        if(result){
            removeAllData();
            navigate('/');
            location.reload()
        }
    }

    const handleMenuRedirect = (link: string) => {
        navigate(link);

        if(mobileNav){
            closeMobileMenu()
        }
    }

    const viewProfileButton = (
        <Button
            href="/editProfile/info"
            variant="outlined"
            sx={navbarStyles.authMenuProfileButton}
            color="error"
            type="submit"
        >
            View and edit profile
        </Button>
    )


    return (
        <AppBar position='sticky' sx={navbarStyles.appBar}>
                <Container maxWidth='lg' sx={navbarStyles.navContainer}>
                    {/* Desktop navbar */}
                    <Toolbar sx={navbarStyles.navToolbar}>
                        <Link to='/'>
                            <IconButton
                                size='small'
                                edge='start'
                                color='inherit'
                                aria-label='logo'
                                sx={navbarStyles.logoIconButton}
                            >
                                <img src={Logo} width={'160'} height={'34'} />
                            </IconButton>
                        </Link>
                        <SearchBar dimension={'desktop'} closeFunction={closeSearchDiv} />
                        <Box sx={navbarStyles.rightButtonsGrid}>
                                <Box>
                                    <Box sx={navbarStyles.rightLoginButtonGrid}>
                                    {isLogin ? (
                                        <>
                                        <Button
                                            sx={navbarStyles.authMenuSellButton}
                                            variant='contained'
                                            color='error'
                                            startIcon={<Sell />} 
                                            onClick={() => handleMenuRedirect('/post')}
                                        >
                                            <Typography sx={navbarStyles.authMenuSellButtonText}>Sell</Typography>
                                        </Button>
                                        <Tooltip title="Account settings">
                                            <IconButton
                                                onClick={handleProfileOpen}
                                                size="small"
                                                sx={navbarStyles.authAvatarIconButton}
                                                aria-controls={LoginOpen ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={LoginOpen ? 'true' : undefined}
                                            >
                                                <Avatar sx={navbarStyles.authAvatar} src={userData.photo?.url}></Avatar>
                                                <ExpandMore />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            anchorEl={profilePopover}
                                            id="account-menu"
                                            open={LoginOpen}
                                            onClose={handleProfileOpen}
                                            onClick={handleProfileClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {authUserMenuStyle}
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleProfileClose}>
                                                <Avatar
                                                    src={userData.photo?.url}
                                                    sx={navbarStyles.authMenuAvatar}
                                                />
                                                <Typography sx={navbarStyles.authMenuAvatarText}>{userData?.fullname}</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleProfileClose}>
                                                {viewProfileButton}
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem component="a" onClick={() => handleMenuRedirect('/profile/myads')}>
                                                <ListItemIcon>
                                                    <Favorite fontSize="small" />
                                                </ListItemIcon>
                                                My ads
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem component="a" onClick={() => handleMenuRedirect('/settings/privacy')}>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                Settings
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={() => {
                                                handlelogout();
                                            }}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Log out
                                            </MenuItem>
                                        </Menu>
                                    </>
                                    ): (    
                                        <>
                                            <Link to="/sign-in" style={{ textDecoration:'none' }}>
                                                <Typography sx={navbarStyles.loginButtonTextOnLeft}>Sign in</Typography>
                                            </Link>
                                            <Link to="/sign-up" style={{ textDecoration:'none' }}>
                                                <Typography sx={navbarStyles.loginButtonTextOnRight}>Sign up</Typography>
                                            </Link>
                                        </>
                                    )} 
                                    </Box>
                                </Box>
                        </Box>
                    </Toolbar>
                    {/* Mobile navbar */}
                    <Toolbar sx={navbarStyles.mobileToolbar}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box sx={navbarStyles.mobileNavbarHamburgerBox}>
                                    <IconButton size='small' edge='start' onClick={openMobileMenu}>
                                            <MenuIcon sx={navbarStyles.mobileNavbarHamburgerMenuIcon} />
                                    </IconButton>

                                    {/* Mobile Modal */}
                                    <Drawer
                                        anchor={'top'}
                                        open={Boolean(mobileNav)}
                                        onClose={closeMobileMenu}
                                        PaperProps={{
                                            sx: {
                                                height: '100%',
                                                maxHeight: 'none',
                                            },
                                        }}
                                    >
                                        <Container>
                                            <Grid container>
                                                <Grid item xl={12} md={12} sm={12} xs={12}>
                                                    <IconButton 
                                                        size='medium' 
                                                        edge='start' 
                                                        onClick={closeMobileMenu}
                                                        sx={navbarStyles.drawerCloseIconGrid} 
                                                    >
                                                        <Close sx={navbarStyles.drawerCloseIcon} />
                                                    </IconButton>

                                                    {isLogin ? (
                                                    <List sx={navbarStyles.drawerMenuList} aria-label="contacts">
                                                        <ListItem sx={navbarStyles.drawerMobileAvatarListItem}>
                                                            <ListItemAvatar>
                                                                <Avatar sx={navbarStyles.drawerAvatar} src={userData.photo?.url}></Avatar>
                                                            </ListItemAvatar>
                                                            <Typography
                                                                sx={navbarStyles.drawerAvatarLoginText}
                                                            >{userData?.fullname}</Typography>
                                                        </ListItem>
                                                        <Box sx={navbarStyles.drawerProfileButtonItem}>
                                                            {viewProfileButton}
                                                        </Box>
                                                        <Divider />
                                                        <ListItem disablePadding>
                                                            <ListItemButton 
                                                                sx={navbarStyles.drawerMenuListItemButton}
                                                                onClick={() => handleMenuRedirect('/post')}
                                                            >
                                                                    <ListItemIcon sx={navbarStyles.drawerMenuListItemIcon}>
                                                                        <Sell />
                                                                    </ListItemIcon>
                                                                <ListItemText primary="Start selling it" />
                                                            </ListItemButton>
                                                        </ListItem>
                                                        <ListItem disablePadding>
                                                            <ListItemButton 
                                                                sx={navbarStyles.drawerMenuListItemButton}
                                                                onClick={() => handleMenuRedirect('/profile/myads')}
                                                            >
                                                                    <ListItemIcon sx={navbarStyles.drawerMenuListItemIcon}>
                                                                        <Favorite />
                                                                    </ListItemIcon>
                                                                <ListItemText primary="My adverts" />
                                                            </ListItemButton>
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem disablePadding>
                                                            <ListItemButton 
                                                                sx={navbarStyles.drawerMenuListItemButton}
                                                            >
                                                                    <ListItemIcon sx={navbarStyles.drawerMenuListItemIcon}>
                                                                        <Settings />
                                                                    </ListItemIcon>
                                                                <ListItemText primary="Settings" />
                                                            </ListItemButton>
                                                        </ListItem>
                                                        <ListItem disablePadding>
                                                            <ListItemButton 
                                                                sx={navbarStyles.drawerMenuListItemButton}
                                                                onClick={() => {
                                                                    closeMobileMenu();
                                                                }}
                                                            >
                                                                    <ListItemIcon sx={navbarStyles.drawerMenuListItemIcon}>
                                                                        <Logout />
                                                                    </ListItemIcon>
                                                                <ListItemText primary="Log out" />
                                                            </ListItemButton>
                                                        </ListItem>
                                                        
                                                    </List>
                                                    ): (
                                                        <Grid container>
                                                            <Grid item xl={6} md={6} sm={6} xs={6}>
                                                                <Box sx={navbarStyles.drawerAuthButtonGrid}> 
                                                                    <Button
                                                                        variant="contained"
                                                                        color="error" 
                                                                        size='large'
                                                                        sx={navbarStyles.drawerAuthLoginButton}
                                                                        onClick={() => handleMenuRedirect('/sign-in')}
                                                                    >Sign in</Button>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xl={6} md={6} sm={6} xs={6}>
                                                                <Box sx={navbarStyles.drawerAuthButtonGrid}>
                                                                    <Button
                                                                        variant="contained"
                                                                        color="error" 
                                                                        size='large'
                                                                        sx={navbarStyles.drawerRegisterButton}
                                                                        onClick={() => handleMenuRedirect('/sign-up')}
                                                                    >Sign up</Button>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Drawer>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={navbarStyles.mobileTopBox}>
                                    <Link to="/">
                                        <IconButton
                                            edge='start'
                                            color="inherit"
                                            aria-label="logo"
                                            sx={navbarStyles.mobileTopLogo}
                                        >
                                            <img src={Logo} width={'110'} height={'28'} />
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton 
                                    size='small' 
                                    edge='start' 
                                    sx={navbarStyles.mobileTopSearchBox}
                                    onClick={openSearchDiv}
                                >
                                    <SearchIcon />
                                </IconButton>
                                <Drawer
                                    anchor={'top'}
                                    open={Boolean(searchDiv)}
                                    onClose={closeSearchDiv}
                                    PaperProps={{
                                        sx: {
                                            height: '100%',
                                            maxHeight: 'none',
                                        },
                                    }}
                                    >
                                    <Box sx={searchStyles.drawerBoxTitle}>
                                        <IconButton onClick={closeSearchDiv} sx={searchStyles.drawerBoxLeftIcon}>
                                            <ArrowBack sx={searchStyles.dialogTitleClose} />
                                        </IconButton>
                                    </Box>
                                    <Box sx={searchStyles.dialogContent}>
                                        <SearchBar dimension='mobile' closeFunction={closeSearchDiv} />
                                    </Box>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
        </AppBar>
    )
}

export default Navbar