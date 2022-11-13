import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { IMaskMixin } from "react-imask";


const IMaskPhoneInput = IMaskMixin(({...props}) => {
        return (
        <TextField
        {...props}
            shrink = {false}
        sx={{m:1}}
    />)
});

export default IMaskPhoneInput
IMaskPhoneInput.defaultProps = {
    label: "Phone",

}
IMaskPhoneInput.propTypes = {
    label: PropTypes.string,
    mask: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,

}
