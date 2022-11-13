import PropTypes from 'prop-types';
import {useState} from 'react';
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function StyledDatePicker({
                                             onChange,
                                             required,
                                             label,
                                             error,
                                             helperText
                                         })
{
    const [isOpen, setOpen] = useState(false);
    const [date, setDate] = useState(null);
    const handleInputClick = ()=> {
        setOpen(true)
    }
    const handleOpen = ()=>{
        setOpen(!isOpen)
    }

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={date}
                onChange={(event)=>{
                    onChange(event)
                    setDate(event)
                }
                }
                label={label}
                open = {isOpen}
                onOpen={handleOpen}
                onClose={handleOpen}
                disableOpenPicker
                renderInput={ (params) =>(
                    (
                        <TextField
                            {...params}
                            onClick={handleInputClick}
                            required = {required}
                            error={error}
                            helperText={helperText}
                            sx={{m:1}}
                        />)
                )}
            />
        </LocalizationProvider>
    );
}
StyledDatePicker.defaultProps = {
    helperText: "Please, fill this field",
    label: "Select a date",
    required: true
}

StyledDatePicker.propTypes = {
    onChange: PropTypes.func,
    required: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string
}