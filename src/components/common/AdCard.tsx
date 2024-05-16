import React, { useEffect, useState } from 'react'

// Material UI elements
import { 
    Box, 
    Grid, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography, 
    Chip, 
    IconButton,
    CardHeader,
    Avatar,
    Button 
    } from '@mui/material';

// Material UI Icons
import { 
    Comment,
    Star,
    Share,
    Favorite as FavoriteIcon
    } from '@mui/icons-material';

// Styles
import { adCardStyles } from '../../styles';

// Components
import Favorite from './Favorite';

// Other package
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';

// Interfaces or Types

import { AdCardProps } from './common';

import { CardTypes } from '../../pages/advertTypes';

const AdCard: React.FC<AdCardProps> = ({ data, grid }) => {
  
    // useState
    const [cardData, setCardData] = useState<CardTypes[]>(data);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [endPagination, setEndPagination] = useState<boolean>(false);
    const pageSize: number = 10;
    
    useEffect(() => {
        if(data.length > 0){
            setCardData(Array.isArray(data) ? data.slice(0, pageSize) : []);
        }
    },[data])

    useEffect(() => {
        const limitsData = () => {
            const startIndex = (pageNumber - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const limitedData = data.slice(startIndex, endIndex);

            if(limitedData.length > 0){
                setCardData((prevData) => [ ...prevData, ...limitedData ]);
            }else{
                setEndPagination(true)
            }
        }
        if(pageNumber > 1){
            limitsData();
        }
    }, [pageNumber])

    const handlePagination = () => {
        setPageNumber((prev) => prev + 1)
    }

    return (
        <Grid container spacing={2}>
            {cardData.map((item, index) => (
                <Grid item={true} lg={grid[0]} md={grid[1]} sm={grid[2]} xs={grid[3]} key={index}>
                        <Card sx={adCardStyles.card}>
                            <CardHeader
                                avatar={
                                    <Avatar 
                                        aria-label="recipe"
                                        src={item?.user_photo?.url}
                                    >
                                    </Avatar>
                                }
                                title={item.fullname}
                                subheader={item.date!}
                                sx={adCardStyles.cardHeader}
                            />
                            <Link to={`/item/${slugify(item.title)}/${item.id}`} style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.photo!}
                                    alt={item.title}
                                />
                                <CardContent
                                    sx={{
                                        p:1
                                    }}
                                >
                                    <Grid container>
                                        <Grid item xl={6} md={6} sm={6} xs={12}>
                                            <Typography
                                                variant="body2" 
                                                sx={adCardStyles.cardMainCategoryText}
                                            > {item?.main_category_name}</Typography>
                                            <Typography 
                                                variant="body2" 
                                                sx={adCardStyles.cardSubCategoryText}
                                            > {item.sub_category_name}</Typography>
                                        </Grid>
                                        <Grid item xl={6} md={6} sm={6} xs={12}>
                                            <Typography sx={adCardStyles.cardPriceText}>
                                                {item.price} TL
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Link>
                            <CardActions>
                                <Grid container>
                                    <Grid item xl={6} md={6} sm={6} xs={12}>
                                        <Typography sx={adCardStyles.cardLocationText}>{item.county},{item.city}</Typography>
                                    </Grid>
                                    <Grid item xl={6} md={6} sm={6} xs={12}>
                                        <Box sx={adCardStyles.cardFavoriteBox}>
                                            <Favorite id={item?.id} hasFavorite={item?.has_favorite} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardActions>
  
                        </Card>
                </Grid>
            ))}
            {(!endPagination && data.length > 10 )&& (
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box sx={adCardStyles.paginationBox}>
                        <Button
                            variant="outlined"
                            sx={adCardStyles.paginationButton}
                            onClick={() => handlePagination()}
                        >
                            Load more
                        </Button>
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default AdCard