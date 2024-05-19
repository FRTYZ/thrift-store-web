import React, { useEffect, useState } from 'react'

// Material UI elements
import { 
    IconButton,
    } from '@mui/material';

// Material UI Icons
import { 
    Favorite as FavoriteIcon
    } from '@mui/icons-material';

import { Request } from '../../helpers/Request';

// Styles
import { favoriteStyles } from '../../styles';

// Redux
import { useAppSelector } from '../../redux/store';

// component
import { SnackbarAlert } from './SnackbarAlert';

// interface
import { FavoriteTypes } from './common';
import { snackbarOptionsProps } from './common';

const Favorite: React.FC<FavoriteTypes> = ({ id, hasFavorite, type }) => {
    const {loginData} = useAppSelector((state) => state?.authUser);

    // useState
    const [advertFavorite, setAdvertFavorite] = useState<boolean>(false);
    const [snackbarData, setSnackbarData] = useState<snackbarOptionsProps>({});

    useEffect(() => {
        setAdvertFavorite(hasFavorite!)
    },[hasFavorite])

    const addFavorite = async (advertId: string, currentFavorite: boolean) => {

        if(loginData){
            if(currentFavorite){
                const formdata: FormData = new FormData();
                formdata.append("op", 'remove');
                formdata.append("path", 'has_advert_favorite');
    
                const url = '/advert/favorite/' + advertId;
    
                const data = await Request({
                    method: 'PATCH',
                    url: url,
                    formData: formdata
                });
    
                const responseErrorCheck = Object.keys(data).filter(item => item == 'error')
                if(!responseErrorCheck){
                    setSnackbarData({
                        type: 'error',
                        message: 'An error occurred'
                    })
                }
                setAdvertFavorite(false);
            }
            else
            {
                const formdata: FormData = new FormData();
                formdata.append("op", 'add');
                formdata.append("path", 'has_advert_favorite');
    
                const url = '/advert/favorite/' + advertId;
                
                const data = await Request({
                    method: 'PATCH',
                    url: url,
                    formData: formdata
                });
    
                const responseErrorCheck = Object.keys(data).filter(item => item == 'error')
    
                if(!responseErrorCheck){
                    setSnackbarData({
                        type: 'error',
                        message: 'An error occurred'
                    })
                }
                setAdvertFavorite(true);
            }
        }else{
            setSnackbarData({
                type: 'error',
                message: 'You should sign in'
            })
        }
    }

  return (
    <>
        {Object.keys(snackbarData).length > 0 && <SnackbarAlert snackbarOptions={snackbarData} />}
        <IconButton 
            aria-label="add to favorites" 
            onClick={() => addFavorite(id!, advertFavorite)} 
            sx={{
                padding: {
                    lg: type == 'large' ? '12px 12px 11.5px 12px'  : '6px 6px 5.5px 6px', 
                    md: type == 'large' ? '12px 12px 11.5px 12px'  : '6px 6px 5.5px 6px', 
                    sm: type == 'large' ? '8px 8px 6.5px 8px'  : '6px 6px 5.5px 6px', 
                    xs: type == 'large' ? '8px 8px 6.5px 8px'  : '6px 6px 5.5px 6px', 
                },
                textAlign: 'center',
                ...favoriteStyles.favoriteIconButton
            }}
        >
                {advertFavorite == true ? (
                    <FavoriteIcon 
                        sx={{
                            fontSize: {
                                lg: type == 'large' ? '32px' : '16px',
                                md: type == 'large' ? '32px' : '16px',
                                sm: type == 'large' ? '24px' : '16px',
                                xs: type == 'large' ? '24px' : '16px'
                            },
                            ...favoriteStyles.favorite
                        }} 
                    />
                ): (
                    <FavoriteIcon 
                        sx={{
                            fontSize: {
                                lg: type == 'large' ? '32px' : '16px',
                                md: type == 'large' ? '32px' : '16px',
                                sm: type == 'large' ? '24px' : '16px',
                                xs: type == 'large' ? '24px' : '16px'
                            },
                            ...favoriteStyles.nonFavorite
                        }} 
                    />
                )}
        </IconButton>
       
    </>
  )
}

export default Favorite