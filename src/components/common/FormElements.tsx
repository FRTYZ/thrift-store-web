import React, { useState, useRef } from 'react';

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
import { 
    customPasswordFieldProps, 
    customTextFieldProps,
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
            <InputLabel>{label}</InputLabel>
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
            <InputLabel>{label}</InputLabel>
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
