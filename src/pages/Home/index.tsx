import React from 'react'
import { Grid, Box, Button } from '@mui/material'

// Style and assets
import { homePageStyles, homeBannerStyles } from '../../styles';

import desktopBanner from '../../assets/home-banner.png'
import mobileBanner from '../../assets/home-banner-mobile.png'

function index() {
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
    </React.Fragment>
  )
}

export default index