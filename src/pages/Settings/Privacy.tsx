import React from 'react';

// Material UI elements
import {
  Grid,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Switch
}
  from '@mui/material'


// Assets
import { privacyStyles } from '../../styles';

// helpers
import { Request } from '../../helpers/Request';

// Redux
import { removeAllData } from '../../redux/store';

// Components
import { CustomPasswordField } from '../../components/common/FormElements';

// Other
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

// interface
import { PrivacyFormTypes } from '../formTypes';

function Privacy() {
  document.title = "Privacy"

  const initialValues: PrivacyFormTypes = {
      currentPass: '',
      password: '',
      passwordAgain: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { currentPass, password, passwordAgain } = values;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

      if (currentPass == '' || password == '' || passwordAgain == '') {
          Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'You need to fill in the required fields.',
          })
      }
      else if (password !== passwordAgain) {
          Swal.fire({
            icon: 'error',
            title: 'An error has occurred',
            text: 'The passwords do not match.',
          })
      }
      else if (currentPass == password) {
          Swal.fire({
            icon: 'error',
            title: 'An error has occurred',
            text: 'Your new password must not be the same as your existing password.',
          })
      }
      else if (password && password.length < 6 && !passwordRegex.test(password)) {
          Swal.fire({
            icon: 'error',
            title: 'An error has occurred',
            text: 'At least 6 characters and at least one letter and one number must be used',
          })
      }
      else{
        const formdata: FormData = new FormData();
        formdata.append('password', password!);
        formdata.append('current_pass', currentPass!);

        const url = '/account/session';

        const result: {success?: boolean}[] | any = await Request({
            method: 'PUT',
            url: url,
            formData: formdata
        });

        if(result.success){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "The process is complete.",
              showConfirmButton: false,
              timer: 1500
            });
            removeAllData();
            location.reload();
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: result.error_description,
          })
        }
      }
    }
  })

  return (
    <React.Fragment>
        <Grid container spacing={3} sx={privacyStyles.settingsMainGrid}>
          {/* Profile view button */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton sx={privacyStyles.listItemButton}>
                            <Typography sx={privacyStyles.listItemActiveText}>
                                Change your password
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
              {/* Left column grids, inputs */}
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <Box sx={privacyStyles.settingsLeftBox}>
                    <Grid container>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} sx={privacyStyles.settingsTitleGrid}>
                            <Typography sx={privacyStyles.settingsTitle}>
                                My advert settings
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} sx={privacyStyles.settingContentGrid}>
                            <Grid container>
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                        <Typography sx={privacyStyles.settingLeftText}>Show my phone number in the adverts</Typography>
                                </Grid>
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                    <Box sx={privacyStyles.settingRightBox}>
                                        <Switch defaultChecked color="error"/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={privacyStyles.settingsLeftBox}>
                    <Grid container>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} sx={privacyStyles.settingsTitleGrid}>
                            <Typography sx={privacyStyles.settingsTitle}>
                                Change password
                            </Typography>
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12} sx={privacyStyles.settingContentGrid}>
                          <form
                             method='POST'
                             onSubmit={formik.handleSubmit}
                          >
                                <Box sx={privacyStyles.passwordBox}>
                                    <CustomPasswordField 
                                        label = ''
                                        name = 'currentPass'
                                        value={formik.values.currentPass}
                                        placeholder = 'Current your password' 
                                        hasError = {Boolean(formik.values.currentPass == '' && formik.touched.currentPass)}
                                        handleChange = {formik.handleChange}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={privacyStyles.passwordBox}>
                                    <CustomPasswordField 
                                        label = ''
                                        name = 'password'
                                        value={formik.values.password}
                                        placeholder = 'New password' 
                                        hasError = {Boolean(formik.values.password == '' && formik.touched.password)}
                                        handleChange = {formik.handleChange}
                                        size="small"
                                    />
                                    <Typography sx={{ fontSize : '14px', fontWeight: 300}}>Use at least 6 characters and at least one letter and one number</Typography>
                                </Box>
                                <Box sx={privacyStyles.passwordBox}>
                                    <CustomPasswordField 
                                        label = ''
                                        name = 'passwordAgain'
                                        value={formik.values.passwordAgain}
                                        placeholder = 'Again new password' 
                                        hasError = {Boolean(formik.values.passwordAgain == '' && formik.touched.passwordAgain)}
                                        handleChange = {formik.handleChange}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={privacyStyles.buttonBox}>
                                      <Button 
                                        variant="outlined" 
                                        sx={privacyStyles.saveButton}
                                        color="error"
                                        type="submit"
                                    >
                                        Save changes
                                    </Button>
                                </Box>
                          </form>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default Privacy