import React, {useState, MouseEvent} from 'react'

// Material UI elements
import { 
    Grid, 
    Box, 
    Button, 
    AppBar, 
    Toolbar, 
    MenuItem, 
    Container, 
    Menu,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Drawer,
    IconButton,
    Tab,
    Tabs,
    Popover
} from "@mui/material"

// Material UI ıcons
import { 
    ExpandLess, 
    ExpandMore,
    ArrowBack
 } from '@mui/icons-material';

// Styles
import { subNavbarStyles } from '../styles';

// other
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';

// interfaces
import { Menu as Category } from '../redux/interface';

import { SubNavbarAreaProps, TabPanelProps } from './layout';
import { PostCategory } from '../pages/advertTypes';

const SubNavbar: React.FC<SubNavbarAreaProps>  = ({ categories }) => {
    // React router elements
    const navigate = useNavigate();
  
    // UseState area 
    const [openMobileCategory, setOpenMobileCategory] = useState<null | HTMLElement>(null);
    const [secondPage, setSecondPage] = useState<boolean>(false);
    const [subCategory, setSubCategory] = useState<PostCategory>({});
    const [value, setValue] = useState<number>(0);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Desktop categgories

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, key: number) => {
      setAnchorEl(event.currentTarget);
      filterSubCategory(key);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    const filterSubCategory = (id: number) => {
        const filteredSubCategory = categories!
            .filter((category, key) => (key == id && category.sub_category))
            .map(item => ({ ...item, key_id: id }))
        
            setSubCategory(filteredSubCategory[0]);
    }

                        // Mobile categories settings

    // Drawer the all category
    const openAllMobileCategory = (event: MouseEvent<HTMLElement>) => {
        setOpenMobileCategory(event.currentTarget);
    }
  
    const closeAllMobileCategory = () => {
        if(secondPage){
            setSecondPage(false);
        }else{
            setOpenMobileCategory(null);
        }
    }

      // search for route
    const handleSearchCategory = (mainCategory: string, subCategory: string) => {
        const categories = subCategory ? slugify(subCategory, { prefix: mainCategory }) : mainCategory;
    
        setOpenMobileCategory(null)

        navigate('/search?category='  + categories);
    }

      // filters the Sub category 
    const handleMobileTabChange = (event: React.SyntheticEvent, newValue: number = 0) => {
        setValue(newValue);

        if(event.target){
           filterSubCategory(newValue)
        }
        setSecondPage(true)
    };

    console.log(subCategory)

    return (
        <AppBar position="static" sx={subNavbarStyles.appBar}>
            {/* Desktop Categories */}
            <Box
                sx={{
                    display: {
                        xl: 'block',
                        lg: 'block',
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                    }
                }}
            >
                <Grid container>
                    {categories.length > 0 && categories.map((mainCategoryItem, key) => (
                        <Grid item xl={3} lg={3} md={3} xs={3} sm={3}>
                            <Box
                                sx={{
                                    backgroundColor: mainCategoryItem.color,
                                    textAlign: 'center',
                                    padding: '10px'
                                }}
                                onMouseEnter={(e) => handlePopoverOpen(e, key)}
                             
                            >
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        color: '#fff',
                                        textTransform: 'uppercase'
                                    }}
                                >{mainCategoryItem.category_name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'auto',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    onMouseLeave={handlePopoverClose}
                >
                    <Box
                        sx={{
                            p: '25px 0px 0px 0px',
                            maxWidth: {
                                xl: '475px',
                                lg: '320px',
                                md: '265px'
                            }
                        }}
                        onMouseLeave={handlePopoverClose}
                    >
                        <Grid container>
                            {Object.keys(subCategory).length > 0 && subCategory.sub_category!.map((subItem, key) => (
                                <Grid item xl={4} lg={6} md={6} xs={4} sm={4} key={key}>
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            padding: '15px 5px',
                                            "&:hover": {
                                                backgroundColor: '#f3f3f3'
                                            },
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleSearchCategory(subCategory.category_id!, String(subItem.sub_category_id))}
                                    >
                                        <Avatar
                                            alt={subItem.sub_category_name}
                                            src={subItem.sub_category_icon}
                                            sx={{
                                                display: 'block',
                                                justifyContent: 'center',
                                                margin: 'auto',
                                                width: '40px',
                                                height: '40px'
                                            }}
                                        ></Avatar>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                paddingTop: '10px'
                                            }}
                                        >{subItem.sub_category_name}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Popover>

            </Box>

            {/* Mobile Categories */}
            <Container maxWidth='lg' sx={subNavbarStyles.mobileContainer}>
                <Toolbar sx={subNavbarStyles.mobileToolbar}>
                    <Button
                        id="basic-button"
                        aria-haspopup="true"
                        onClick={openAllMobileCategory}
                        sx={subNavbarStyles.allCategoryButton}
                        endIcon={<ExpandMore/>}
                    >
                        Categories
                    </Button>
                    <Drawer
                        anchor={'top'}
                        open={Boolean(openMobileCategory)}
                        onClose={closeAllMobileCategory}
                        PaperProps={{
                            sx: {
                                height: '100%',
                                maxHeight: 'none',
                            },
                        }}
                    >
                        {/* Drawer Title */}
                        <Box sx={subNavbarStyles.mobileSubDrawerBoxTitle}>
                            <IconButton onClick={closeAllMobileCategory} sx={subNavbarStyles.mobileSubDrawerBoxLeftIcon}>
                                <ArrowBack sx={subNavbarStyles.mobileSubDialogTitleClose} />
                            </IconButton>
                                <Typography sx={{
                                    display: 'inline-block',
                                    marginTop: '8px',
                                    marginLeft: '20px',
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    fontWeight: 700
                                }}>All Categories</Typography>
                        </Box>
                        {/* Main categories section */}
                        {!secondPage && (
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={Object.keys(subCategory).length > 0 && value}
                                onChange={handleMobileTabChange}
                                aria-label="Vertical tabs example"
                                sx={subNavbarStyles.leftCategoryTabs}
                            >
                                {categories!.length > 0  && categories!.map((item, key) => (
                                    <Tab
                                        key={key}
                                        label={item.category_name}
                                        sx={subNavbarStyles.leftCategoryTab}
                                        iconPosition='end'
                                        {...a11yProps(Number(item.category_id))}
                                    />
                                ))}
                            </Tabs>
                        )}
                        {/* Sub categories section */}
                        <TabPanel value={value} index={Number(subCategory.key_id)} key={subCategory.key_id}>
                                <List sx={{ padding:0 }}>
                                    {Object.keys(subCategory).length > 0 && subCategory.sub_category!.map((SubItem, key) => (
                                        <ListItem sx={subNavbarStyles.rightCategoryListItem} key={key}>
                                                <ListItemButton
                                                    sx={subNavbarStyles.rightCategoryListItemButton}
                                                    onClick={() => handleSearchCategory(subCategory.category_id!, String(SubItem.sub_category_id))}
                                                >
                                                    <ListItemText 
                                                        sx={subNavbarStyles.rightCategoryListItemText} 
                                                        primary={SubItem.sub_category_name} 
                                                    />
                                                </ListItemButton>
                                        </ListItem>
                                        
                                    ))}
                                </List>
                        </TabPanel>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default SubNavbar

// Main category tab
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }} key={index}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// view sub category according to Selected category
function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
  }