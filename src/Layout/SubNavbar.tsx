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
    Tabs
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
    const [subCategory, setSubCategory] = useState<PostCategory[]>([]);
    const [value, setValue] = useState<number>(0);

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
            const filteredSubCategory = categories!
            .filter((category, key) => (key == newValue && category.sub_category))
            .map(item => ({ ...item, key_id: newValue }))
        
            setSubCategory(filteredSubCategory);
        }
        setSecondPage(true)
    };

  return (
    <AppBar position="static" sx={subNavbarStyles.appBar}>
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
                            value={subCategory.length > 0 && value}
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
                    {secondPage && subCategory.map((mainItem, key) =>  (
                        <TabPanel value={value} index={mainItem.key_id} key={key}>
                                <List sx={{ padding:0 }}>
                                    {mainItem?.sub_category.map((SubItem, key) => (

                                        <ListItem sx={subNavbarStyles.rightCategoryListItem} key={key}>
                                                <ListItemButton
                                                    sx={subNavbarStyles.rightCategoryListItemButton}
                                                    onClick={() => handleSearchCategory(mainItem?.category_id, String(SubItem.sub_category_id))}
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
                    ))}
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