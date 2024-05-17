import React, { useState, useEffect } from 'react'

// Material UI Elements
import { 
    Typography, 
    Grid, 
    Divider,
    Breadcrumbs, 
    Button, 
    Box
} from '@mui/material'

// styles and assets
import { postAdvertStyles } from '../../styles';

// React router
import { useNavigate, Link } from "react-router-dom";

// Helpers
import { Request, RequestPublic } from '../../helpers/Request';

// Components
import { 
    CustomSelectField, 
    CustomTextField,
    FileUploadInput
 } from '../../components/common/FormElements';
import { SnackbarAlert } from '../../components/common/SnackbarAlert';

// Redux
import store from '../../redux/store';

// Other
import { useFormik } from 'formik';

// interfaces
import { Category } from '../../redux/interface';
import { CitiesProps, CountiesProps, StatusProps } from '../advertTypes';
import { PostAdvertTypes } from '../formTypes';
import { snackbarOptionsProps } from '../../components/common/common';

function Sell() {
    document.title = "Satmaya başla";
    // React router elements
    const navigate = useNavigate();

    // Redux
    const currentCategoryData = store.getState().currentCategory?.currentCategoryData;

    // useState elements
    const [selectedCategory, setSelectedCategory] = useState<Category[] | any>([]);
    const [selectStatus, setSelectStatus] = useState<StatusProps[]>([]);
    const [cities, setCities] = useState<CitiesProps[]>([]);
    const [counties, setCounties] = useState<CountiesProps[]>([]);
    const [snackbarData, setSnackbarData] = useState<snackbarOptionsProps>({});

     // useEffect elements

     /*
        gets selected category from redux
     */
     useEffect(() => {
        if(currentCategoryData){
            setSelectedCategory(currentCategoryData);
        }else{
            navigate('/post');
        }
    },[currentCategoryData])

    /*
        gets cities of location data from API
    */
    useEffect(() => {
        getCities();
        getStatus();
    }, []);

    const initialValues: PostAdvertTypes = {
        title: '',
        description: '',
        price: '',
        city_id: '',
        county_id: '',
        how_status: '',
        fullname: userData?.fullname && userData.fullname!,
        photo: []
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        onSubmit: async (values) => {
            const {title, description, price, photo, city_id, county_id, fullname, how_status} = values;
            
            if(title == '' || description == '' || price == '' || county_id == '' || fullname == '' || how_status == '' || photo!.length == 0){
                setSnackbarData({
                    type: 'error',
                    message: 'You need to fill in the required fields.'
                })
            }
            else{
                const formdata: FormData = new FormData();
                formdata.append("title", title!);
                formdata.append("description", description!);


                photo!.forEach((file) => {
                    formdata.append('photo', file);
                });

                formdata.append("how_status", how_status!);
                formdata.append("price", price!);
                formdata.append("city_id", city_id!);
                formdata.append("county_id", county_id!);
                formdata.append("main_category_id", selectedCategory.mainCategoryId);
                formdata.append("sub_category_id", selectedCategory.subCategoryId);
                
                const url = '/advert/list';

                const response = await Request({
                    method: 'POST',
                    url: url,
                    formData: formdata
                });
                
                const responseCheck = Object.keys(response).filter(item => item == 'success')
                if (responseCheck) {
                    setSnackbarData({
                        type: 'success',
                        message: 'Completing the process'
                    })

                    navigate('/');
                }
                else {
                    setSnackbarData({
                        type: 'error',
                        message: 'An error occurred'
                    })
                } 

            }
         
        }
    })

                            // Functions

    /*
        gets cities of location data from API
    */
    const getCities = async () => {
        const url = "/advert/location";

        const getData = await RequestPublic({
            method: 'GET',
            url: url
        });

        setCities(getData);
    }

    /*
        gets status data from API
    */
    const getStatus = async () => {
        const url = "/advert/status";

        const getData = await Request({
            method: 'GET',
            url: url
        });

        setSelectStatus(getData);
    }

    /*
        gets counties of location data from API
    */
    useEffect(() => {
        const getCounties = async () => {
            const url = "/advert/location/" + formik.values.city_id;
            const getData = await RequestPublic({
                method: 'GET',
                url: url
            });

            setCounties(getData);
        }
        getCounties();
    }, [formik.values.city_id]);

    return (
        <React.Fragment>
            {Object.keys(snackbarData).length > 0 && <SnackbarAlert snackbarOptions={snackbarData} />}
            {/* Top title */}
            <Typography sx={postAdvertStyles.toptTile}>
                Start selling it
            </Typography>
            <Grid container>
                <Box sx={postAdvertStyles.mainBox}>
                    <Typography sx={postAdvertStyles.subTitle}>
                        Chosen Category
                    </Typography>
                    <form
                            method='POST'
                            onSubmit={formik.handleSubmit}
                            encType='multipart/form-data'
                        >
                        <Grid container>
                            {/* BreadCrumb area */}
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box sx={postAdvertStyles.breadCrumbBox}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link to="/post" style={{textDecoration: 'none'}}>
                                            <Typography
                                                sx={postAdvertStyles.breadCrumbText}>
                                                    {selectedCategory?.mainCategoryName}
                                            </Typography>
                                        </Link>
                                        <Typography 
                                            sx={postAdvertStyles.breadCrumbText}>
                                                {selectedCategory.subCategoryName}
                                        </Typography>
                                    </Breadcrumbs>
                                    <Link to="/post" style={{ textDecoration: 'none' }}>
                                        <Typography sx={postAdvertStyles.breadCrumbChangeText}>Change</Typography>
                                    </Link>
                                </Box>
                                <Divider />
                            </Grid>
                            <Divider />
                            {/* advert info column = title, description, status */}
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Typography sx={postAdvertStyles.inputTopTitles}>
                                    Add basic information
                                </Typography>
                                <Box sx={postAdvertStyles.inputBox}>
                                    <CustomSelectField 
                                        label="Status"
                                        name="how_status"
                                        value={formik.values.how_status}
                                        selectItems={selectStatus}
                                        hasError={Boolean(formik.values.how_status == '' && formik.touched.how_status)}
                                        handleFormik={formik}
                                        helperText={formik.values.how_status == '' && formik.touched.how_status && 'You need to specify the situation.'}
                                    /> 
                                </Box>
                                <Divider />
                                <Box sx={postAdvertStyles.inputBox}>
                                    <CustomTextField 
                                        label='Title'
                                        type='text'
                                        name='title'
                                        value={formik.values.title}
                                        error={Boolean(formik.values.title == '' && formik.touched.title)}
                                        placeholder='Title'
                                        handleChange={formik.handleChange}
                                        size="small"
                                        helperText={formik.values.title == '' && formik.touched.title ? 'There must be at least 1 character. Please edit the field.': 'Tell us about the basic characteristics of your product (e.g. make, model, size)'}
                                    />
                                </Box>
                                <Divider />
                                <Box sx={postAdvertStyles.inputBox}>
                                    <CustomTextField 
                                        label='Description'
                                        type='text'
                                        name='description'
                                        value={formik.values.description}
                                        hasError={Boolean(formik.values.description == '' && formik.touched.description)}
                                        placeholder='Description'
                                        handleChange={formik.handleChange}
                                        size="small"
                                        multiline
                                        rows={4}
                                        helperText={formik.values.description == '' && formik.touched.description ? 'It should be at least 10 characters. Please edit the field.' : 'Add information such as condition, property and reason for selling'}
                                    />
                                </Box>
                                <Divider />
                            </Grid>
                            {/* advert price column */}
                            <Grid item xl={12} lg={12} sm={12} xs={12}>
                                    <Typography sx={postAdvertStyles.inputTopTitles}>
                                        Set a price
                                    </Typography>
                                <Box sx={postAdvertStyles.inputBox}>
                                    <CustomTextField 
                                            label='Price'
                                            type='number'
                                            name='price'
                                            value={formik.values.price}
                                            error={Boolean(formik.values.price == '' && formik.touched.price)}
                                            placeholder='Price'
                                            handleChange={formik.handleChange}
                                            size="small"
                                            helperText={formik.values.price == '' && formik.touched.title && 'You should set a price'}
                                    />
                                </Box>
                                <Divider />
                            </Grid>
                            {/* advert image column */}
                            <Grid item xl={12} lg={12} sm={12} xs={12} sx={postAdvertStyles.inputGrids}>
                                <Typography sx={postAdvertStyles.inputTopTitles}>
                                    Select image from device
                                </Typography>
                                <Box sx={postAdvertStyles.inputBox}>
                                    <FileUploadInput 
                                        label="Select Image"
                                        name='photo'
                                        oldFileName=''
                                        type="image"
                                        setAlert={setSnackbarData}
                                        handleFormik={formik}
                                        multiple
                                        accept='image/png, image/jpeg'
                                    />
                                </Box>
                                <Divider />
                            </Grid>
                            {/* advert location column */}
                            <Grid item xl={12} lg={12} sm={12} xs={12} sx={postAdvertStyles.inputGrids}>
                                <Typography sx={postAdvertStyles.inputTopTitles}>
                                    Location
                                </Typography>
                                <Box sx={postAdvertStyles.inputBox}>
                                    <CustomSelectField 
                                        label="City"
                                        name="city_id"
                                        value={formik.values.city_id}
                                        selectItems={cities}
                                        hasError={Boolean(formik.values.city_id == '' && formik.touched.city_id)}
                                        handleFormik={formik}
                                        helperText={formik.values.city_id == '' && formik.touched.city_id && 'You should choose a city.'}
                                    /> 
                                </Box>
                                <Box sx={postAdvertStyles.inputBox}>
                                    {(formik.values.city_id && counties.length > 0) && (
                                        <CustomSelectField 
                                            label="Counties"
                                            name="county_id"
                                            value={formik.values.county_id}
                                            selectItems={counties}
                                            hasError={Boolean(formik.values.county_id == '' && formik.touched.county_id)}
                                            handleFormik={formik}
                                            helperText={formik.values.county_id == '' && formik.touched.county_id && 'You should choose a counties.'}
                                        /> 
                                    )}
                                </Box>
                                <Divider />
                            </Grid>
                            {/* send button */}
                            <Grid item xl={12} lg={12} sm={12} xs={12} sx={postAdvertStyles.inputGrids}>
                                <Box sx={postAdvertStyles.sendButtonBox}>
                                    <Button
                                        variant="outlined"
                                        sx={postAdvertStyles.sendButton}
                                        color="error"
                                        type="submit"
                                    >
                                        Publish
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default Sell