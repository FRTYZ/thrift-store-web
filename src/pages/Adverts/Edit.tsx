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
import { useParams, useNavigate } from "react-router-dom";

// Helpers
import { Request, RequestPublic } from '../../helpers/Request';

// Components
import { 
    CustomSelectField, 
    CustomTextField,
    FileUploadInput,
    OldFileInput
 } from '../../components/common/FormElements';
import { SnackbarAlert } from '../../components/common/SnackbarAlert';

// Other
import { useFormik } from 'formik';

// interfaces
import { CitiesProps, CountiesProps, StatusProps, EditAdvertDetail } from '../advertTypes';
import { snackbarOptionsProps, FileProps } from '../../components/common/common';

function Sell() {
    document.title = "Advert Edit";
    // React router elements
    const params = useParams();
    const navigate = useNavigate();
    const advertId = params.advertId;

    // useState elements
    const [selectStatus, setSelectStatus] = useState<StatusProps[]>([]);
    const [cities, setCities] = useState<CitiesProps[]>([]);
    const [counties, setCounties] = useState<CountiesProps[]>([]);
    const [snackbarData, setSnackbarData] = useState<snackbarOptionsProps>({});
    
    const [advertDetail, setAdvertDetail] = useState<EditAdvertDetail>({});
    const [deleteImage, setDeleteImage] = useState<FileProps[]>([]);

     // useEffect elements

    /*
        gets cities of location data from API
    */
    useEffect(() => {
        getData();
        getCities();
        getStatus();
    }, []);
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: (advertDetail && advertDetail.title),
            description: (advertDetail && advertDetail.description),
            price: (advertDetail && advertDetail.price),
            city_id: String(advertDetail.city_id!),
            county_id: String(advertDetail.county_id!),
            how_status : Number(advertDetail?.status_id),
            photo: [],
            oldPhotos: advertDetail?.images ? advertDetail?.images : [],
        },
        onSubmit: async (values) => {
            const {title, description, price, city_id, county_id, how_status, photo} = values;

            if(title == '' || description == '' || price == '' || county_id == null || how_status == 0 || (deleteImage.length > 0 && photo.length == 0) ){
                setSnackbarData({
                    type: 'error',
                    message: 'You need to fill in the required fields.'
                })
            }
            else{
                const formdata: FormData = new FormData();
                formdata.append("title", title!);
                formdata.append("description", description!);
                formdata.append("price", price!);
                formdata.append("city_id", String(city_id!));
                formdata.append("county_id", county_id!);
                formdata.append("how_status", String(how_status!));
                
                formdata.append("old_images", JSON.stringify(deleteImage));
    
                photo.forEach((image: File) => { 
                    formdata.append('photo', image);
                }); 
    
                const url = "/advert/list/" + advertId;

                const response = await Request({
                    method: 'PUT',
                    url: url,
                    formData: formdata 
                });
                
                const responseCheck = Object.keys(response).filter(item => item == 'success')
                if (responseCheck) {
                    setSnackbarData({
                        type: 'success',
                        message: 'Updated'
                    })

                    navigate('/profile/myads')
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
    const getData = async() => {
        const url = '/advert/list/' + advertId;
        const data: EditAdvertDetail | any = await Request({
            method: 'GET',
            url: url
        });
        setAdvertDetail(data);
    }

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
                Advert update
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
                                        <Typography
                                            sx={postAdvertStyles.breadCrumbText}
                                        >
                                                {advertDetail?.category_name}
                                        </Typography>
                                        <Typography 
                                            sx={postAdvertStyles.breadCrumbText}
                                        >
                                                {advertDetail?.sub_category_name}
                                        </Typography>
                                    </Breadcrumbs>
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
                                        value={String(formik.values.how_status)}
                                        selectItems={selectStatus}
                                        hasError={Boolean(String(formik.values.how_status) == '' && formik.touched.how_status)}
                                        handleFormik={formik}
                                        helperText={String(formik.values.how_status) == '' && formik.touched.how_status && 'You need to specify the situation.'}
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
                                        oldFileName='oldPhotos'
                                        type="image"
                                        handleFormik={formik}
                                        multiple
                                        accept='image/png, image/jpeg'
                                    />
                                    <OldFileInput 
                                        name="oldPhotos"
                                        value={formik.values.oldPhotos ? formik.values.oldPhotos : []}
                                        type="image"
                                        handleFormik={formik}
                                        setDeleteState={setDeleteImage}
                                        currentValue={advertDetail.images!}
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
                                        Save Changes
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