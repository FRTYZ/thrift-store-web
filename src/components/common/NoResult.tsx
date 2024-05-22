import React from 'react'

// Material UI elements
import { 
  Box, 
  Container,
  Typography, 
  Button
  } from '@mui/material';

// styles and aseets
import { noResultStyles } from '../../styles';

import ResultImage from '../../assets/noResults.png'
import NoFavoriteImage from '../../assets//no-favorites.png'

// interface
import { NoResultProps } from './common'

const NoResult: React.FC<NoResultProps> = ({ page }) => {
  return (
    <Container>
        {page == 'search' && (
        <Box sx={noResultStyles.searchBox}>
            <Typography sx={noResultStyles.searchTitle}>No ads found</Typography>
            <Typography sx={noResultStyles.searchSubTitle}>Please check your spelling or try a more general search.</Typography>
        </Box>
        )}
        <Box sx={noResultStyles.imageBox}>
            <img src={page == 'search' ? ResultImage : NoFavoriteImage} style={{ maxWidth: '198px', width: '100%' }} />
        </Box>
        {(page !== 'search') && (
        <Box sx={noResultStyles.otherBox}>
            <Typography sx={noResultStyles.otherTitle}> {page == 'myAds' ? 'You do not have an ad yet.' : 'You have not liked any adverts yet'}
            </Typography>
             <Typography sx={noResultStyles.otherSubTitle}>
              {page == 'myAds' ? 'Get rid of the clothes you no longer use' : 'Like and share adverts with the world'}
                </Typography>
                {page == 'myAds' ? (
                   <Button
                      href="/editProfile/info"
                      variant="outlined"
                      sx={noResultStyles.otherSellButton}
                      color="error"
                      type="submit"
                    >
                      Start selling it
                  </Button>
                ): (
                  <Button
                      href="/editProfile/info"
                      variant="outlined"
                      sx={noResultStyles.otherDiscoverButton}
                      color="error"
                      type="submit"
                    >
                      Explore it
                  </Button>
                )}
             
        </Box>
        )}
    </Container>
  )
}

export default NoResult