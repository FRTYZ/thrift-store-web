import React, { useState } from 'react'

// Material UI Elements
import { 
    Typography, 
    Grid, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    Tabs, 
    Tab, 
    Box,
    ListItemAvatar,
    Avatar
    } from '@mui/material'

// styles
import { homePostAdvertStyles } from '../../styles';

// React router
import { Link } from 'react-router-dom';

// Redux
import { useAppSelector } from '../../redux/store';
import { setCurrentCategory, useAppDispatch } from '../../redux/store';

// Interfaces and types
import { TabPanelProps } from '../../Layout/layout';

import { Category } from '../../redux/interface';
import { PostCategory } from '../advertTypes';

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


function SellCategory() {
    document.title = "Choose a category";
    // Redux elements
    const {menuData} = useAppSelector((state) => state?.Menu);
    const dispatch = useAppDispatch();

    // useEffect area
    const [value, setValue] = useState<number>(0);
    const [subCategory, setSubCategory] = useState<PostCategory[]>([]);

    // Category filter
    const handleChange = (event: React.SyntheticEvent, newValue: number = 0) => {
        setValue(newValue);

        if(event.target){
            const filteredSubCategory = menuData!
            .filter((category, key) => (key == newValue && category.sub_category))
            .map(item => ({ ...item, key_id: newValue }))
        
            setSubCategory(filteredSubCategory);
        }

    };

    // saves selected categorys of user in redux
    const handleGetPage = (mainCategoryName: string , subCategoryName: string, subCategoryId: number, mainCategoryId: number) => {
        const currentCategoryObject: Category = {
            subCategoryName: subCategoryName,
            mainCategoryName: mainCategoryName,
            subCategoryId: subCategoryId,
            mainCategoryId: mainCategoryId
        }
        dispatch(setCurrentCategory(currentCategoryObject));
    }
   
    return (
        <React.Fragment>
             {/* Top title */}
            <Typography sx={homePostAdvertStyles.topTitle}>
                Start selling it
            </Typography>
            <Box sx={homePostAdvertStyles.categoryMainBox}>
                 {/* Left sub title */}
                <Typography sx={homePostAdvertStyles.categoryColumnTitle}>
                        Choose a category
                </Typography>
                <Grid container>
                    {/* Left main category section */}
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={homePostAdvertStyles.leftCategoryGrid}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={subCategory.length > 0 && value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={homePostAdvertStyles.leftCategoryTabs}
                        >
                            {menuData!.length > 0 && menuData!.map((item, key) => (
                                <Tab
                                    key={key}
                                    label={item.category_name}
                                    iconPosition="start"
                                    sx={{
                                        border: '1px solid #e0e0e0',
                                        borderBottom: '3px solid' + item.color, 
                                        '&.Mui-selected': {
                                            color: '#FFFFFF',
                                            backgroundColor: item.color
                                        },
                                        ...homePostAdvertStyles.leftCategoryTab
                                    }}
                                    {...a11yProps(Number(item.category_id))}
                                />
                            ))}
                        </Tabs>
                    </Grid>
                     {/* Right sub category section */}
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        {subCategory.length > 0 && (
                            <Typography 
                                sx={{
                                    display: { lg: 'none', md: 'none', sm: 'flex', xs: 'flex' },
                                    ...homePostAdvertStyles.categoryColumnTitle
                                }}
                            >
                                    Choose a sub category
                            </Typography>
                        )}
                        {subCategory && subCategory.map((mainItem, key) =>  (
                            <TabPanel value={value} index={Number(mainItem.key_id)} key={key}>
                                 <List sx={{ padding:0 }}>
                                     {mainItem.sub_category!.map((SubItem, key) => (
                                         <ListItem sx={homePostAdvertStyles.rightCategoryListItem} key={key}>
                                             <Link 
                                                to="/post/attributes" 
                                                onClick={() => handleGetPage(mainItem.category_name!, SubItem.sub_category_name, SubItem.sub_category_id, SubItem.main_category_id)} 
                                                style={{textDecoration: 'none'}}
                                                >
                                                 <ListItemButton sx={homePostAdvertStyles.rightCategoryListItemButton}>
                                                    <ListItemAvatar>
                                                        <Avatar 
                                                            alt={SubItem.sub_category_name} 
                                                            src={'./category/' + SubItem.sub_category_icon} 
                                                            sx={{ marginLeft: '10px' }}
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText 
                                                        sx={homePostAdvertStyles.rightCategoryListItemText} 
                                                        primary={SubItem.sub_category_name} 
                                                    />
                                                 </ListItemButton>
                                             </Link>
                                         </ListItem>
                                     ))}
                                 </List>
                             </TabPanel>
                        ))}
                    </Grid> 
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default SellCategory