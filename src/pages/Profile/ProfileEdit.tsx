import React from 'react';

// Material UI elements
import {
  Grid,
  Button,
  Typography,
  InputAdornment,
  Box,
  Avatar
}
  from '@mui/material'


// Assets
import { profileEditStyles } from '../../styles';

// Helper
import { Request } from '../../helpers/Request';

// Components
import { CustomTextField, FileUploadInput } from '../../components/common/FormElements';

// Redux
import 
  store,
  { 
  setLoginData, 
  useAppDispatch 
  } from '../../redux/store';

// other npm packages 
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Interfaces
import { LoginData } from '../../redux/interface';
import { ProfileEditTypes } from '../formTypes';

function ProfileEdit() {
  document.title = "Profilini görüntüle";
  // Redux elemen ts
  const dispatch = useAppDispatch();
  const loginData: LoginData = store.getState().authUser.loginData!;

  // useState

  const initialValues: ProfileEditTypes = {
    fullname: loginData.fullname,
    about: loginData?.about ? loginData?.about : '',
    phoneNumber: loginData?.phone_number ? loginData?.about : '',
    email: loginData.email,
    photo: []
  };

  const formik = useFormik({
      initialValues,
      onSubmit: async (values) => {
        const { fullname, about, phoneNumber, email, photo } = values;

        console.log(values)

        if(fullname == '' || email == ''){
            Swal.fire({
              position: "center",
              icon: "error",
              title: "You need to fill in the required fields.",
              showConfirmButton: false,
              timer: 1500
            });
        }
        else{
            const formdata: FormData = new FormData();
            formdata.append('fullname', fullname!);
            about !== '' && formdata.append('about', about!);
            phoneNumber !== '' && formdata.append('phone_number', phoneNumber!);
            formdata.append('email', email!);
            photo && formdata.append('photo', photo[0]);

            const url = '/account/session';
          
            const result: {success?: boolean, photo?: object}[] | any = await Request({
                method: 'PUT',
                url: url,
                formData: formdata
            });
            
            if (result?.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "The process is complete.",
                    showConfirmButton: false,
                    timer: 1500
                });

                const newLoginData = {
                    fullname: fullname,
                    email : email,
                    about: about,
                    phone_number: phoneNumber,
                    photo: JSON.parse(result?.photo)
                }
                dispatch(setLoginData(newLoginData));
                location.reload();
            }
            else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "An error has occurred",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

      }
  })

  return (
    <React.Fragment>
        <Box sx={profileEditStyles.mainBox}>
            <Grid container spacing={3}>
                {/* Profile view button */}
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Box sx={profileEditStyles.profileViewButtonBox}>
                        <Button
                            href={'/profile'}
                            variant="outlined"
                            sx={profileEditStyles.profileViewButton}
                        >
                        View profile
                        </Button>
                    </Box>
                </Grid>
                {/* Left column grids, inputs */}
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Box sx={profileEditStyles.profileEditMainBox}>
                        <form
                            method='POST'
                            onSubmit={formik.handleSubmit}
                            encType='multipart/form-data'
                        >

                            <Box sx={profileEditStyles.profileEditTitleBox}>
                                <Typography sx={profileEditStyles.profileEditTitle}>
                                    Edit profile
                                </Typography>
                            </Box>
                            <Box sx={profileEditStyles.inputMainBox}>
                                <Typography sx={profileEditStyles.inputTitle}>Profile photo</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                                        <Avatar 
                                            alt={loginData?.fullname} 
                                            src={loginData?.photo?.url}
                                            sx={{
                                                width: '100px',
                                                height: '100px'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xl={10} lg={10} md={8} sm={8} xs={12}>
                                        <FileUploadInput 
                                            label='Select profile photo'
                                            name="photo"
                                            oldFileName=''
                                            type='image'
                                            handleFormik={formik}
                                            accept='image/png, image/jpeg'
                                        />
                                    </Grid> 
                                </Grid>
                            </Box>
                            <Box sx={profileEditStyles.inputMainBox}>
                                <Typography sx={profileEditStyles.inputTitle}>Basic information</Typography>
                                <Box sx={profileEditStyles.inputBox}>
                                    <CustomTextField 
                                        label='Fullname'
                                        type='text'
                                        name='fullname'
                                        value={formik.values.fullname}
                                        hasError={Boolean(formik.values.fullname == '' && formik.touched.fullname)}
                                        placeholder='Fullname'
                                        handleChange={formik.handleChange}
                                        size="small"
                                        helperText={formik.values.fullname == '' && formik.touched.fullname && 'This field is required'}
                                    />
                                </Box>
                                <Box sx={profileEditStyles.inputBox}>
                                    <CustomTextField 
                                        label='About'
                                        type='text'
                                        name='about'
                                        value={formik.values.about}
                                        hasError={Boolean(formik.values.about == '' && formik.touched.about)}
                                        placeholder='About [Optional]'
                                        handleChange={formik.handleChange}
                                        size="small"
                                        multiline
                                        rows={4}
                                    />
                                </Box>
                            </Box>
                            <Box sx={profileEditStyles.inputMainBox}>
                                <Typography sx={profileEditStyles.inputTitle}>Contact details</Typography>
                                <Box sx={profileEditStyles.inputBox}>
                                    <CustomTextField 
                                        label='Phone number'
                                        type='number'
                                        name='phoneNumber'
                                        value={formik.values.phoneNumber}
                                        hasError={Boolean(formik.values.phoneNumber == '' && formik.touched.phoneNumber)}
                                        placeholder=''
                                        handleChange={formik.handleChange}
                                        size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                            <Typography sx={profileEditStyles.contactAdornment}>+90</Typography>
                                            </InputAdornment>
                                        }}
                                    />
                                </Box>
                                <Box sx={profileEditStyles.inputBox}>
                                    <CustomTextField 
                                        label='Email address'
                                        type='email'
                                        name='email'
                                        value={formik.values.email}
                                        hasError={Boolean(formik.values.email == '' && formik.touched.email)}
                                        placeholder=''
                                        handleChange={formik.handleChange}
                                        size="small"
                                        helperText={formik.values.fullname == '' && formik.touched.fullname ? 'This field is required' : 'We will not share your e-mail address.'}
                                    />
                                </Box>
                            </Box>
                            <Box sx={profileEditStyles.inputMainBox}>
                                <Grid container spacing={3}>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Link to={'/profile'} style={{ textDecoration: 'none'}}>
                                            <Typography sx={profileEditStyles.cancelButton}>Cancel</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Box sx={profileEditStyles.saveButtonGrid}>
                                            <Button 
                                                variant="outlined" 
                                                sx={profileEditStyles.saveButton}
                                                color="error"
                                                type="submit"
                                            >
                                                Save changes
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  )
}

export default ProfileEdit