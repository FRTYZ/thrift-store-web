import React,{ useState, useEffect } from 'react';

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
import { HandleLoginToken, Request, RequestPublic } from "../../helpers/Request";

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

export default function SignUp() {
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

  // register formik
  const registerFormik = useFormik({
    initialValues: {
        fullname: '',
        email: '',
        pass: ''
    },
    onSubmit: async (values) => {
      const {fullname, email, pass} = values;

      if (fullname == '') {
          setSnackbarData({
            type: 'error',
            message: 'Please fill in the required fields.'
          })
      }
      else if (email == '') {
          setSnackbarData({
            type: 'error',
            message: 'Please fill in the required fields.'
        })
      }
      else if (pass == '') {
          setSnackbarData({
            type: 'error',
            message: 'Please fill in the required fields.'
          })
      }
      else {
          const formdata: FormData = new FormData();
          formdata.append("fullname", fullname);
          formdata.append("email", email);
          formdata.append("password", pass);

          const url = "/account/session";
          const postData: any = await RequestPublic({
              method: 'POST',
              url: url,
              formData: formdata 
          })
          
          if(postData.error){
              setSnackbarData({
                type: 'error',
                message: postData?.error_description
              })
          }
          else{
            const data = await HandleLoginToken(email, pass);
                      
            if(!data.error){
                setPassLogin(true);
            }
            else{
              setSnackbarData({
                type: 'sucess',
                message: 'Kaydınız başarıyla tamamlandı'
              })
            }
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
              Sign Up
            </Typography>

            {/* Register Form */}
            <Box sx={authenticationStyles.formBox}>
            <form
                method='POST'
                onSubmit={registerFormik.handleSubmit}
            > 
                  <CustomTextField
                      type ='text'
                      label = 'Fullname'
                      name = 'fullname'
                      value = {registerFormik.values.fullname}
                      placeholder = 'Fullname' 
                      hasError = {registerFormik.touched.fullname}
                      handleChange = {registerFormik.handleChange}
                      sx={{ marginBottom: 2 }}
                  />
                  <CustomTextField
                      type = 'email'
                      label = 'Email'
                      name = 'email'
                      value = {registerFormik.values.email}
                      placeholder = 'Email Address' 
                      hasError = {registerFormik.touched.email}
                      handleChange = {registerFormik.handleChange}
                      sx={{ marginBottom: 2 }}
                  />
                  <CustomPasswordField 
                      label = 'New Password'
                      name = 'pass'
                      value = {registerFormik.values.pass}
                      placeholder = 'New Password' 
                      hasError = {registerFormik.touched.pass}
                      handleChange = {registerFormik.handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    size='large'
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign up
                  </Button>
            </form>
                <Grid container>
                    <Grid item>
                      <Link href="/sign-in" sx={authenticationStyles.bottomText}>
                           Already have an account? Sign In
                      </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </React.Fragment>
  );
}