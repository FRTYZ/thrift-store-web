import React, { useState, useRef, version } from 'react';

// Material UI elements
import { 
    Typography,
    TextField, 
    InputAdornment,
    IconButton,
    OutlinedInput,
    InputLabel,
    Box,
    Fab,
    Grid,
    MenuItem
} from '@mui/material';

// Material UI icons and styles
import { Visibility, VisibilityOff, Add, Close } from '@mui/icons-material';
import { formElementsStyles } from '../../styles';

// Interfaces
import { 
    customPasswordFieldProps, 
    customTextFieldProps,
    FileUploadInputProps,
    FileViewSectionProps,
    OldFileInputProps,
    SelectFieldProps
} from './common';

export const CustomTextField: React.FC<customTextFieldProps>  = ({
    type = 'text', 
    label, 
    name, 
    value, 
    placeholder, 
    hasError, 
    handleChange, 
    ...rest
}) => {

    return (
        <>
            <InputLabel shrink>{label}</InputLabel>
            <TextField
                type={type}
                fullWidth
                name={name}
                placeholder={placeholder ? placeholder : ''}
                value={value}
                error={hasError ? Boolean(value == '' && hasError) : false}
                onChange={handleChange}
                InputProps={type == 'email' ? {
                    endAdornment: (
                      <InputAdornment position="end">
                            @
                      </InputAdornment>
                    ),
                }: {}
                }
                {...rest}
            />
        </>       
    )
}

export const CustomPasswordField: React.FC<customPasswordFieldProps>  = ({
    label, 
    name, 
    value, 
    placeholder, 
    hasError, 
    handleChange, 
}) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
        <>
            <InputLabel shrink>{label}</InputLabel>
            <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                name={name}
                id={name}
                onChange={handleChange}
                value={value}
                error={hasError ? Boolean(value == '' && hasError) : false}
                placeholder={placeholder ? placeholder : label}
                autoComplete={name}
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                }
                
            />
        </>       
    )
}

export const CustomSelectField: React.FC<SelectFieldProps> = ({label, name, value, selectItems , hasError, handleFormik, ...rest }) => {

    return (
        <>
            <InputLabel shrink>{label}</InputLabel>
            <TextField
                select
                fullWidth
                size='small'
                name={name}
                value={value}
                error={hasError ? Boolean(value == '' && hasError) : false}
                onChange={handleFormik.handleChange}
                {...rest}
            >
                <MenuItem value="0">Choose</MenuItem>
                {selectItems.length > 0 && selectItems.map((selectItem, key) => (
                    <MenuItem value={selectItem.id} key={key}>
                        {selectItem.value}
                    </MenuItem>
                ))}
            </TextField>
        </>
    )
}

export const FileUploadInput: React.FC<FileUploadInputProps> = ({label, name, oldFileName, type, setAlert, handleFormik, ...rest}) => {
    const [file, setFile] = useState<File[]>([]);

    const handleUploadFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        const getfileList = event.target.files;

        if(getfileList){
            const files: File[] = Array.from(getfileList);

            const changeList = () => {
                file ? Array.from(file) : [];
                return [...file, ...files];
            } 

            const newList = changeList();

            handleFormik.setFieldValue(name, newList);

            setFile(newList);
            
        }
        
    }

    const removeSelectFile = (imageKey: number) => {
        const newList = file.filter((veri, key) => key !== imageKey && veri);
        setFile(newList);
        handleFormik.setFieldValue(name, newList);
    }

    const renderFileInput = (
        <label htmlFor={name}>
            <input
                type="file"
                name={name}
                id={name}
                onChange={(event) => { 
                    handleFormik.handleChange(event);
                    handleUploadFiles(event)
                }}
                style={{ display: 'none' }}
                {...rest}
            />
                <Fab
                    color="success"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <Add /> Select
                </Fab> 
        </label>
    )

    return (
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ marginBottom: '20px' }}>
                    <InputLabel sx={{ marginBottom: 2 }} htmlFor="upload-file" >{label}</InputLabel>
                    {renderFileInput}
                </Box>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {file.length < 1 &&
                    <Typography sx={formElementsStyles.fileInputValidationText}>You should choose an image</Typography>
                }
                <FileViewSection 
                    file={file}
                    type={type}
                    removeFunc={removeSelectFile}
                    isOld={false}
                />
            </Grid>
        </Grid>
    )
}

export const FileViewSection: React.FC<FileViewSectionProps> = ({file, type, removeFunc, isOld}) => {

    return (
        <>
        {file.length > 0 && file.map((item, key) => (
            <>
            <Box 
                sx={formElementsStyles.imageBox} 
                key={key}
            >
                {isOld ? (
                    (type == 'image' ? (
                        <img 
                            src={item?.url}
                            style={{ objectFit: 'cover' }} 
                            width={100} 
                            height={100} 
                            alt="Files" 
                        />
                    ): (
                        <Typography sx={{ p: 2, marginRight: 6 }}>{item.name}</Typography>
                    ))
                ): (
                    (type == 'image' ? (
                        <img 
                            src={URL.createObjectURL(item)}
                            style={{ objectFit: 'cover' }} 
                            width={100} 
                            height={100} 
                            alt="Files"
                        />
                    ): (
                        <Typography sx={{ p: 2, marginRight:4 }}>{item.name}</Typography>
                    ))
                )}             
                    <Box sx={formElementsStyles.closeIconBox}>
                        <IconButton 
                            aria-label="remove to file" 
                            onClick={() => removeFunc(key, item?.image_id)}
                            sx={formElementsStyles.closeIconButton}
                        >
                            <Close sx={formElementsStyles.closeIcon} />
                        </IconButton>
                        {key == 0 && isOld && (
                            <Typography variant="body2" sx={formElementsStyles.fileInputImageText}>
                                COVER
                            </Typography>
                        )}
                    </Box>
            </Box>
            </>
        ))}
        </>
    )
}

export const OldFileInput: React.FC<OldFileInputProps> = ({name, value, type, handleFormik, setDeleteState, currentValue}) => {

    const removeSelectFile = (imageKey: number, imageId: number) => {
        const newList = value?.filter((veri, key) => key !== imageKey && veri);
        handleFormik.setFieldValue(name, newList.length == 0 ? undefined : newList);

        setDeleteState((prevDeletedImages: any) => [
            ...prevDeletedImages,
            currentValue.find((item) => item.image_id == imageId),
        ])

    }

    return (
        <>
        {value.length > 0 && (
            <FileViewSection 
                file={value}
                type={type}
                removeFunc={removeSelectFile}
                isOld={true}
            />
        )}
        </>
    )
}