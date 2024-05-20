import React, {
    useEffect,
    useState
    } from 'react';

// Material UI elements
import { 
    Grid,
    Container,
    Typography,
    Link,
    Box,
    } from '@mui/material';

// Styles
import { footerStyles } from '../styles';

// Redux
import { useAppSelector } from '../redux/store';

// React Router
import { useNavigate } from 'react-router-dom';

// interface
import { Menu } from '../redux/interface';

const Footer = () => {
    // React router area
    const navigate = useNavigate();

    // Redux
    const {menuData} = useAppSelector((state) => state?.Menu);

    // useState area
    const [firstFooterCategory, setFirstFooterCategory] = useState<Menu[]>([]);
    const [secondFooterCategory, setSecondFooterCategory] = useState<Menu[]>([]);

    // useEffect area
    useEffect(() => {
        if(menuData?.length !== 0) {
            const firstColumnCategory = menuData?.slice(0, 4);
            const secondColumnCategory = menuData?.slice(1, 4);

            setFirstFooterCategory(firstColumnCategory!);
            setSecondFooterCategory(secondColumnCategory!);
        }
    }, [menuData])

    // Functions

    const year = new Date().getFullYear();

    const footerCategories = (data: Menu[], preName: string = 'Second hand') => {
        return (
            <Box sx={footerStyles.footerContent}>
                {data?.length !== 0 && data?.map((item,key) => (
                    <Typography
                        onClick={() => {
                            navigate('/search?category=' + item.category_id);
                        }}
                        key={key}
                        sx={footerStyles.footerContentText}
                    >
                        {preName + ' ' + item?.category_name}
                    </Typography>
                ))}
            </Box>
        )
    }
    return (
        <React.Fragment>
            <Box sx={footerStyles.footerMainBox} component="footer">
                <Container>
                    <Grid container>
                        <Grid item xl={3} md={3} sm={3} xs={12}>
                            <Typography sx={footerStyles.footerHead}>Popular Categories</Typography>
                            {firstFooterCategory.length > 0 && footerCategories(firstFooterCategory)}
                        </Grid>
                        <Grid item xl={3} md={3} sm={3} xs={12}>
                            <Typography sx={footerStyles.footerHead}>Popular Pages</Typography>
                            {secondFooterCategory.length > 0 && footerCategories(secondFooterCategory)}
                        </Grid>
                        <Grid item xl={3} md={3} sm={3} xs={12}>
                            <Typography sx={footerStyles.footerHead}>Thrift store</Typography>
                                <Box sx={footerStyles.footerContent}>
                                    <Typography sx={footerStyles.footerContentText}>About</Typography>
                                    <Typography sx={footerStyles.footerContentText}>Help and Support</Typography>
                                    <Typography sx={footerStyles.footerContentText}>Safety Recommendations</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} md={3} sm={3} xs={12}>
                                <Typography sx={footerStyles.footerHead}>Legal information</Typography>
                                <Box sx={footerStyles.footerContent}>
                                    <Typography sx={footerStyles.footerContentText}>Cookie Policy</Typography>
                                    <Typography sx={footerStyles.footerContentText}>Privacy Policy</Typography>
                                    <Typography sx={footerStyles.footerContentText}>Web site Lighting Text</Typography>
                                </Box>
                        </Grid>
                    </Grid>
                    <Box sx={footerStyles.bottomFooterBox}>
                        <Typography sx={footerStyles.bottomFooterHeader}> 
                           EN - The sellers and products on the site are not real.  It is a project developed for hobby purposes.
                        </Typography>
                        <Typography sx={footerStyles.bottomFooterHeader}> 
                            TR - Sitede yer alan satıcılar ve ürünler gerçek değildir.  Hobi amaçlı geliştirilen projedir.
                        </Typography>
                        <Link
                            href="https://github.com/FRTYZ"
                            target="_blank"
                            sx={footerStyles.bottomFooterText}
                        > 
                            {year} - www.github.com/FRTYZ  
                        </Link>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Footer