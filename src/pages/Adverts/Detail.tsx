import { useEffect, useState } from 'react';

// Material UI elements
import { 
    Avatar, 
    Typography, 
    Grid, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    } from "@mui/material"

// Material UI icons

import {
    ChevronRight
    } from '@mui/icons-material';

// styles and assets
import { 
    advertDetailStyles,
    advertDetailCarouselStyles 
    } from '../../styles';

// Helper
import { RequestPublic } from '../../helpers/Request';

// Redux
import { useAppSelector } from '../../redux/store';

// Component
import Favorite from '../../components/common/Favorite';
import Breadcrumb from '../../components/common/Breadcrumb';

// Other
import { useParams, useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import slugify from 'react-slugify';

// İnterfaces
import { DetailCardTypes,DetailCardPhotoTypes } from '../advertTypes';

const AdvertDetail = () => {
    // Redux
    const {loginData} = useAppSelector((state) => state?.authUser);

    // React Router
    const navigate = useNavigate();
    const params = useParams();
    const id = params.itemId;

    // useState area
    const [advertDetail, setAdvertDetail] = useState<DetailCardTypes>({});
    const [advertImages, setAdvertImages] = useState<DetailCaredPhotoTypes[]>([]);

    // useEffect area

    // gets actual advert data
    useEffect(() => {
        const getData = async () => {
            const url = "/advert/actual/" + id
            const data: DetailCardTypes | any = await RequestPublic({
                method: 'GET',
                url: url
            });

            document.title = data.title;
            setAdvertDetail(data);
            setAdvertImages(data.photo);
        }
        getData();
    }, [])

    const handleRouteProfile = (currentUser: number) => {
        if(currentUser == loginData?.id){
            navigate('/profile')
        }else{
            navigate('/profile/' + currentUser )
        }
    }

     const breadCrumbItems = [
        {
            title: advertDetail.main_category,
            link:  '/search?category=' + advertDetail.main_category_id
        },
        {
            title: advertDetail.sub_category,
            link:  '/search?category=' + advertDetail.main_category_id + '-' + advertDetail.sub_category_id
        },
        {
            title: advertDetail.sub_category + ' ads in ' + advertDetail.city,
            link: '/search?location=' + advertDetail.city_id + '&category=' + advertDetail.main_category_id + '-' + advertDetail.sub_category_id
        },
        {
            title: advertDetail.sub_category + ' ads in ' + advertDetail.county,
            link: '/search?location=' + advertDetail.city_id + '-' + advertDetail.county_id + '&category=' + advertDetail.main_category_id + '-' + advertDetail.sub_category_id
        },
        {
            title: advertDetail.title,
            link: '/item/' + slugify(advertDetail.title) + '/' + advertDetail.id
        }
    ] 

    return (
        <Box sx={advertDetailStyles.mainBox}>
            {advertDetail && (
                <Container>
                    <Breadcrumb  breadcrumbItems={breadCrumbItems} />
                    <Grid container>
                        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
                            {/* Left Column Contents  */}
                            <Grid container sx={advertDetailStyles.leftColumnGrid}>
                                {/* Carousel  */}
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Carousel animation={'slide'} autoPlay={true} swipe={true} height={400}>
                                        {
                                            advertImages.map((item, key) => (
                                                <Box sx={advertDetailStyles.carouselBox} key={key}>
                                                    <img 
                                                        src={item.url} 
                                                        width={1000}
                                                        loading='lazy'
                                                        style={advertDetailCarouselStyles.carouselImg} 
                                                    />
                                                </Box>
                                            ))
                                        }
                                    </Carousel>
                                </Grid>
                            </Grid>
                        </Grid>
                         {/*  Right Column Contents */}
                        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Box sx={advertDetailStyles.rightColumnMainBox}>
                                 {/* Price card */}
                                <Box sx={advertDetailStyles.rightColumnCardBox}>
                                    <Grid container>
                                        <Grid item lg={10} md={10} sm={10} xs={10}>
                                            <Box sx={advertDetailStyles.rightColumnInfoBox}>
                                                <Typography sx={advertDetailStyles.rightColumnInfoTitle}>
                                                    {advertDetail.title}
                                                </Typography>
                                                <Typography sx={advertDetailStyles.rightColumnInfoText} color="text.secondary" gutterBottom>
                                                    {advertDetail.display_name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={2} md={2} sm={2} xs={2}>
                                            <Box sx={advertDetailStyles.rightColumnInfoIconsBox}>
                                                <Favorite  id={advertDetail.id} hasFavorite={advertDetail.has_favorite} type="large" />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={advertDetailStyles.rightColumnCardBox}>
                                    <Grid container>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <Box sx={advertDetailStyles.rightColumnPriceBox}>
                                                <Typography sx={advertDetailStyles.rightColumnPriceText}>
                                                    {advertDetail.price} TL
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <Box sx={advertDetailStyles.rightColumnBuyButtonBox}>
                                                <Button
                                                    sx={advertDetailStyles.rightBuyButton}
                                                    variant='contained'
                                                    color='success'
                                                >
                                                    <Typography sx={advertDetailStyles.rightBuyButtonText}>Buy</Typography>
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                 {/* Seller card */}
                                <Box sx={advertDetailStyles.rightColumnCardBox}>
                                    <Grid container>
                                        <Grid item lg={3} md={3} sm={3} xs={3}>
                                            <Avatar 
                                                variant='square'
                                                alt={advertDetail.fullname} 
                                                src={advertDetail?.user_image?.url} 
                                                sx={advertDetailStyles.rightColumnSellerAvatar} 
                                                onClick={() => handleRouteProfile(advertDetail.userid!)}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <Typography
                                                sx={advertDetailStyles.rightColumnSellerFullname}
                                                onClick={() => handleRouteProfile(advertDetail.userid!)}
                                            >
                                                {advertDetail.fullname}
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={3} md={3} sm={3} xs={3} sx={advertDetailStyles.rightColumnSellerIconGrid}>
                                            <IconButton 
                                                aria-label="share" 
                                                onClick={() => handleRouteProfile(advertDetail.userid!)}
                                            >
                                                <ChevronRight />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Typography sx={advertDetailStyles.rightColumnDescription}>
                                        {advertDetail?.description}
                                    </Typography>
                                </Box>
                                <Box sx={advertDetailStyles.rightColumnCardBox}>
                                    <Typography sx={advertDetailStyles.rightColumnDetailText}>
                                        Details
                                    </Typography>
                                    <Grid container>
                                            <Grid lg={6} md={6} sm={6} xs={6}>Location</Grid>
                                            <Grid lg={6} md={6} sm={6} xs={6}>{advertDetail.county}, {advertDetail.city}</Grid>
                                    </Grid>
                                </Box>
                                <Box sx={advertDetailStyles.rightColumnCardBox}>
                                    <Grid container>
                                        <Grid lg={6} md={6} sm={6} xs={6}>
                                            <Typography sx={advertDetailStyles.rightColumnAdvertInfoText} color="text.secondary" gutterBottom>
                                                Advert no {advertDetail.id}
                                            </Typography>
                                        </Grid>
                                        <Grid lg={6} md={6} sm={6} xs={6}>
                                            <Typography sx={advertDetailStyles.rightColumnAdvertComplaint} color="text.secondary" gutterBottom>
                                                Report
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    )
}

export default AdvertDetail