import React, { useState, useEffect } from 'react';

// Material UI Elements
import { 
  Grid, 
  Avatar, 
  Button, 
  Box,
  Typography,
  Link
} from '@mui/material';

// Material UI İcons
import { LockOutlined } from '@mui/icons-material';
import { authenticationStyles } from '../../styles';

// Helpers
import { HandleLoginToken, Request } from "../../helpers/Request";

// Components
import { CustomTextField, CustomPasswordField } from '../../components/common/FormElements';
import { SnackbarAlert } from '../../components/common/SnackbarAlert';

// Redux
import { setLoginData, useAppDispatch} from "../../redux/store";

// Other npm packages
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// interface
import { snackbarOptionsProps } from '../../components/common/common';

export default function SignIn() {
  // Redux and react router
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  // useStates
  const [snackbarData, setSnackbarData] = useState<snackbarOptionsProps>({});
  const [passLogin, setPassLogin] = useState<boolean>(false);

  // useEffects

  // Login verification
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
        loginVerify();
    }
  },[passLogin])

  // Formiks

  // Login formik
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    onSubmit: async (values) => {
      const {email, password} = values;

     if (email == '') {
          setSnackbarData({
            type: 'error',
            message: 'Please fill in the required fields.'
        })
      }
      else if (password == '') {
          setSnackbarData({
            type: 'error',
            message: 'Please fill in the required fields.'
          })
      }
      else {
          const getToken = await HandleLoginToken(email, password);
          if (getToken.error) {
              setSnackbarData({
                type: 'error',
                message: getToken.error_description
              })
          }else {
              setPassLogin(true)
          }
      }
    }
  });

  // Functions
  const loginVerify = async () => {
      const requestUrl = "/account/session";
      const getData = await Request({
          method: 'GET',
          url: requestUrl
      });

      dispatch(setLoginData(getData));
      navigate('/');
  }


  return (
    <React.Fragment>
      {Object.keys(snackbarData).length > 0 && <SnackbarAlert snackbarOptions={snackbarData} />}

      {/* Box section */}
        <Box sx={authenticationStyles.bottomBox}>
            <Avatar sx={authenticationStyles.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            {/* Login Form */}
            <Box sx={authenticationStyles.formBox}>
            <form
                method='POST'
                onSubmit={formik.handleSubmit}
            >
                  <CustomTextField
                      type = 'email'
                      label = 'Email Address'
                      name = 'email'
                      value = {formik.values.email}
                      placeholder = 'Email Address' 
                      hasError = {formik.touched.email}
                      handleChange = {formik.handleChange}
                      sx={{ marginBottom: 2 }}
                  />
                  <CustomPasswordField 
                      label = 'Password'
                      name = 'password'
                      value = {formik.values.password}
                      placeholder = 'Password' 
                      hasError = {formik.touched.password}
                      handleChange = {formik.handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    size='large'
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    SIGN IN
                  </Button>
              </form>
                <Grid container>
                    <Grid item>
                      <Link href="/sign-up" sx={authenticationStyles.bottomText}>
                           Don't have an account? Sign In
                      </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </React.Fragment>
  );
}