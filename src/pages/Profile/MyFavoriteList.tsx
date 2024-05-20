import React, { useEffect, useState, lazy, Suspense } from 'react'

// Material UI elements
import {Grid}from '@mui/material'

// Helpers
import { Request } from '../../helpers/Request';

// Component
const AdCard = lazy(() => import('../../components/common/AdCard'));
import ProfileTopMenu from '../../components/common/ProfileTopMenu';
import NoResult from '../../components/common/NoResult';

// interface
import { CardTypes } from '../advertTypes';

function MyFavoriteView() {
    document.title = "Favorite advert";
    
    const [favoriteData, setFavoriteData] = useState<CardTypes[]>([]);

    useEffect(() => {
        const getData = async () => {

            const url = "/advert/favorite/list";
            const data = await Request({
                method: 'GET',
                url: url
            });

            setFavoriteData(data);
        }
        getData()
    }, [])
    return (
        <React.Fragment>
            <Grid container spacing={3} sx={{ marginTop: '25px' }}>
                <Grid item xl={12} lg={12} md={12}>
                    <ProfileTopMenu />
                </Grid>
                <Grid item xl={12} lg={12} md={12}>
                    {favoriteData.length > 0 ? (
                       <AdCard data={favoriteData} grid={[4, 4, 4, 6]} />
                    ) : (
                        <NoResult page="favorite" />
                    )}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MyFavoriteView