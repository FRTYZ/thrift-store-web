import React, {
  useState,
  useEffect
} from 'react'
import { Grid, Box, Button, Typography } from '@mui/material'

// Style and assets
import { homePageStyles, homeBannerStyles } from '../../styles';

import desktopBanner from '../../assets/home-banner.png'
import mobileBanner from '../../assets/home-banner-mobile.png'

// Components
import AdCard from '../../components/common/AdCard';

// helpers
import { RequestPublic } from '../../helpers/Request';

// interface
import { CardTypes } from '../advertTypes';

const Index = () => {
  document.title = "Thrift Store - Home";

  // useState elements
  const [advertData, setAdvertData] = useState<CardTypes[]>([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async() => {
      const url = "/advert/actual";

      const advertData = await RequestPublic({
          method: 'GET',
          url: url
      });

      setAdvertData(advertData)
  }

  return (
    <React.Fragment>
        {/* Banner  */}
       <Grid container sx={homePageStyles.bannerDiv} position="relative">
          <Box sx={homePageStyles.bannerDesktopBox}>
              <img src={desktopBanner} style={homeBannerStyles.bannerDesktop} loading='lazy' />
          </Box>
          <Box sx={homePageStyles.bannerMobileBox}>
              <img src={mobileBanner} style={homeBannerStyles.bannerMobile} loading='lazy' />
          </Box>
           {/* Buttons into banner  */}
          <Grid item sx={homePageStyles.bannerContainer}>
              <Button href="/" target='blank' variant="outlined" sx={homePageStyles.bannerButton}>
                    Shopping now
              </Button>
          </Grid>
        </Grid>
        <Typography sx={homePageStyles.homeTitle}>Clothes</Typography>
        <AdCard data={advertData} grid={[3,3,4,6]} />
    </React.Fragment>
  )
}

export default Index