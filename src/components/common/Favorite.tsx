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

const Favorite: React.FC<FavoriteTypes> = ({ id, hasFavorite }) => {
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
            onClick={() => addFavorite(id!, advertFavorite)} sx={favoriteStyles.favoriteIconButton}
        >
                {advertFavorite == true ? (
                    <FavoriteIcon sx={favoriteStyles.favorite} />
                ): (
                    <FavoriteIcon sx={favoriteStyles.nonFavorite} />
                )}
        </IconButton>
       
    </>
  )
}

export default Favorite