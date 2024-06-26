import React, { useEffect, useState } from 'react'

// Material UI elements
import {
    Grid,
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    IconButton
    } from '@mui/material'

// Material UI icons
import {
    Delete,
    Edit,
    VisibilityOff,
    Visibility,
    Favorite,
    InsertPhoto
    } from '@mui/icons-material';

// Styles
import { adViewStyles } from '../../styles';

// Helpers
import { Request } from '../../helpers/Request';

// Component
import ProfileTopMenu from '../../components/common/ProfileTopMenu';
import NoResult from '../../components/common/NoResult';

// npm packages
import { Link } from 'react-router-dom'
import slugify from 'react-slugify';
import Swal from 'sweetalert2';

// interface
import { MyAdProp } from '../advertTypes';

function MyAdsView() {
    document.title = "İlanlarım";
    // useState area
    const [myAds, setMyAds] = useState<MyAdProp[]>([]);

    // useEffect area
    useEffect(() => {
        const getData = async () => {
            const url = "/advert/list";
            const data = await Request({
                method: 'GET', 
                url: url
            });
            
            setMyAds(data);
        }
        getData();
    }, []);

    const handleVisibleChange = async(advertId: string, advertValue: boolean) => {

        const { value } = await Swal.fire({
            title: advertValue ? 'The process of removing the advertisement from publication' : 'The process of publishing the advert',
            text: "Are you sure you want to do this?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: advertValue ? 'Remove the advertisement' : 'Re-publish the advert',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff3f55'
        });

        if(value) {
            const formdata: FormData = new FormData();
            formdata.append("op", 'replace');
            formdata.append("path", 'has_advert_visible');
            formdata.append("value", advertValue? 'false' : 'true');
            const url = '/advert/list/' + advertId;

            const response = await Request({
                method: 'PATCH',
                url: url,
                formData: formdata
            });

            const responseCheck = Object.keys(response).filter(item => item == 'success')
            if(responseCheck){
                Swal.fire({
                    icon: 'success',
                    title: 'Process Successful',
                    html: advertValue ? 'The advert has been removed' : 'The advert has been relaunched',
                    confirmButtonText: 'OK'
                });

                setMyAds(prevObjects => {
                    return prevObjects.map(obj => {
                      if (obj?.id === advertId) {
                        return { ...obj, is_visible: advertValue ? false : true  }
                      }
                      return obj;
                    })
                })
            }
        }
    } 

    const handleDeleteAdvert = async(advertId: string) => {
        const { value } = await Swal.fire({
            title: 'You are about to delete your advert.',
            text: "You will not undo this action",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Remove',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff3f55'
        });

        if(value) {
            const formdata: FormData = new FormData();
            formdata.append("op", 'remove');
            formdata.append("path", 'has_advert_remove');
            formdata.append("value", 'true');
            const url = '/advert/list/' + advertId;

            // 'PATCH', url, formdata
            const response = await Request({
                method: 'PATCH',
                url: url,
                formData: formdata
            });

            const responseCheck = Object.keys(response).filter(item => item == 'success')
            if(responseCheck){
                Swal.fire({
                    icon: 'success',
                    title: 'Process Successful',
                    html: 'The advert has been removed',
                    confirmButtonText: 'OK'
                });
                const newList = myAds.filter((veri) => veri?.id !== advertId);
                setMyAds(newList);
            }
        }
    } 

    const handleSellChange = async(advertId: string) => {

        const { value } = await Swal.fire({
            title: 'Did you sell the advert?',
            text: "Are you sure you want to do this?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'I sold it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff3f55'
        });

        if(value) {
            const formdata: FormData = new FormData();
            formdata.append("op", 'replace');
            formdata.append("path", 'has_advert_sell');
            formdata.append("value", 'true');
            const url = '/advert/list/' + advertId;

            const response = await Request({
                method: 'PATCH',
                url: url,
                formData: formdata
            });

            const responseCheck = Object.keys(response).filter(item => item == 'success')
            if(responseCheck){
                Swal.fire({
                    icon: 'success',
                    title: 'Process Successful',
                    html: 'The advert has been marked as sold, the advert has been removed from publication.',
                    confirmButtonText: 'OK'
                });

                setMyAds(prevObjects => {
                    return prevObjects.map(obj => {
                      if (obj?.id === advertId) {
                        return { ...obj, is_sell: true  }
                      }
                      return obj;
                    })
                })
            }
        }
    } 

    const handleHotAdvert = async(advertId: string, howStatus: string) => {

        const { value } = await Swal.fire({
            title: howStatus == '2' ?  'Sell the ad fast' : 'Remove from the highlights',
            text: howStatus == '2'  ? "You can sell your advert fast by adding it to the featured showcase." : 'Are you sure you want to do this?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: howStatus == '2' ? 'Add from the highlights': 'Remove from the highlights',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff3f55'
        });

        if(value) {
            const formdata: FormData = new FormData();
            formdata.append("op", 'replace');
            formdata.append("path", 'has_advert_status');
            formdata.append("value", howStatus == '2' ? '4' : '2' );
            const url = '/advert/list/' + advertId;

            const response = await Request({
                method: 'PATCH',
                url: url,
                formData: formdata
            });

            const responseCheck = Object.keys(response).filter(item => item == 'success')
            if(responseCheck){
                Swal.fire({
                    icon: 'success',
                    title: 'Process Successful',
                    html: howStatus == '2' ? 'Ad added to featured showcase' : 'Ad removed to featured showcase' ,
                    confirmButtonText: 'OK'
                });

                setMyAds(prevObjects => {
                    return prevObjects.map(obj => {
                      if (obj?.id === advertId) {
                        return { ...obj, status_id: howStatus == '2' ? '4': '2'}
                      }
                      return obj;
                    })
                })
            }
        }
    }

    return (
        <React.Fragment>
            <Grid container spacing={3} sx={adViewStyles.mainGrid}>
                {/* Top menu */}
                <Grid item xl={12} lg={12} md={12}>
                    <ProfileTopMenu />
                </Grid>
                {Object.keys(myAds).length > 0 ? myAds?.map((item, key) => (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={key}>
                         {/* Ad card */}
                        <Card sx={!(item.is_visible) || (item.is_sell) ? (
                            adViewStyles.adCardDisabled
                        ): (
                            adViewStyles.adCard
                        )}>
                            <CardContent>
                                <Grid container spacing={3}>
                                     {/* Left column elements of card: Image, price, status */}
                                    <Grid item xl={6} md={6} sm={12} xs={12}>
                                        <Link to={`/item/${slugify(item.title)}/${item.id}`} style={{ textDecoration: 'none' }}>
                                            <Grid container>
                                                <Grid item xl={6} lg={6} md={6} sm={8} xs={8} sx={adViewStyles.cardTitleGrid}>
                                                    {item?.is_cover_image ? (
                                                        <img
                                                            src={item.is_cover_image}
                                                            style={{
                                                                objectFit: 'cover',
                                                                display: 'block'
                                                            }}
                                                            width={60}
                                                            height={60}
                                                         />
                                                    ): (
                                                        <Box sx={adViewStyles.defaultImageCardBox}>
                                                            <InsertPhoto sx={adViewStyles.defaultImageIcon} />
                                                        </Box>
                                                    )}
                                                    <Typography sx={adViewStyles.adTitle}>{item.title}</Typography>
                                                </Grid>
                                                <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                    <Typography sx={adViewStyles.adPrice}>
                                                        {item.price} TL
                                                    </Typography>
                                                </Grid>
                                                <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                                                    <Box
                                                        sx={{
                                                            textAlign: {sm: 'center', xs: 'center'}
                                                        }}
                                                    >
                                                        {(item.is_sell) ? (
                                                            <Button
                                                                variant="contained"
                                                                sx={adViewStyles.adSellStatusButton}
                                                            >
                                                            Sold out
                                                        </Button>
                                                        ): (
                                                        <Button
                                                            variant="contained"
                                                            sx={adViewStyles.adStatusButton}
                                                            disabled={!(item.is_visible)}
                                                        >
                                                            {item.is_visible ? 'Active' : 'Disabled'}
                                                        </Button>
                                                        )}
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </Grid>
                                     {/* Right column elements of card: Status, Action */}
                                    <Grid item xl={6} md={6} sm={12} xs={12} sx={adViewStyles.adRightColumnGrid}>
                                        <Grid container>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={adViewStyles.adStatusGridOfRightColumn}>
                                                <Typography sx={adViewStyles.adStatusText}>
                                                    {item.is_sell ? (
                                                        'This advert has been sold'
                                                    ) : (item.status_id == '4') ? (
                                                        'This announcement highlights'
                                                    ):(
                                                        (item.is_visible) && !(item.is_sell) ? 'This advert is now live' : 'This advert is not live'
                                                    )}
                                                </Typography>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={adViewStyles.adActionIconGrid}>
                                                {!(item.is_sell) ? (
                                                    <>
                                                        <IconButton aria-label="visible" onClick={() => handleVisibleChange(item.id!, item.is_visible!)}>
                                                            {item.is_visible ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                        <IconButton aria-label="edit" href={`/post/edit/${item.id}`}>
                                                            <Edit />
                                                        </IconButton>
                                                        <IconButton aria-label="delete" onClick={() => handleDeleteAdvert(item.id!)}>
                                                            <Delete />
                                                        </IconButton>
                                                    </>
                                                ): (
                                                    <IconButton aria-label="delete" onClick={() => handleDeleteAdvert(item.id!)}>
                                                        <Delete />
                                                    </IconButton>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                             {/* Card footer elements = favorites and status button */}
                            <CardActions sx={adViewStyles.cardActions}>
                                <Grid container sx={adViewStyles.cardSubColumnContainer}>
                                    {/* Favorite status */}
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={adViewStyles.cardFavoriteStatusGrid}>
                                        <Favorite sx={adViewStyles.adFavoriteIcon} />
                                        <Typography sx={adViewStyles.adFavoriteText}>
                                            Likes: {item.likes}
                                        </Typography>
                                    </Grid>
                                     {/*  status determination buttons */}
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Box sx={adViewStyles.rightButtonsBox}>
                                        {!(item.is_sell) && (
                                             <Button
                                                onClick={() => handleSellChange(item.id!)}
                                                variant="outlined"
                                                sx={adViewStyles.rightButtons}
                                                size='small'
                                            >
                                                Mark as sold
                                            </Button>
                                        )}
                                        {item.is_visible || item.is_sell && 
                                            <Button
                                                onClick={() => handleHotAdvert(item.id!, item.status_id!)}
                                                variant="outlined"
                                                sx={adViewStyles.rightButtons}
                                                size='small'
                                            >
                                                {item.status_id == '4' ? 'Remove from the highlights' : 'Sell faster'}
                                            </Button>
                                        }
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                )): (
                    <NoResult page="myAds" />
                )}
            </Grid>
        </React.Fragment >
    )
}

export default MyAdsView