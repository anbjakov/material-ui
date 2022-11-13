import { useForm, Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
import StyledDatePicker from "./StyledDatePicker";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextFieldController from "./TextFieldController";
import IMaskPhoneInput from './TextFieldPhone';
const PassengerForm = ()=>{
    const { handleSubmit, control } = useForm();
    handleSubmit(data => console.log(data));
    return(

        <form  onSubmit={handleSubmit(data => console.log(data))} noValidate>

            <Grid container  spacing={1} sx={{ p: 1}}  >
                <Grid item xs={12}>
                    <Box>
                        <Typography variant='h1'>
                            Passenger information
                        </Typography>
                    </Box>
                    <Typography variant="subtitle2">
                        Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.
                    </Typography>
                    <Typography variant="h2">
                        Passenger 1 (Adult)
                    </Typography>
                </Grid>
                <Grid item xs={12}   >
                    <TextFieldController
                        control={control}
                        name="FirstName"
                        label="First Name"
                        helperText="this is required field!"
                        required
                        rules={{ required: true }}
                    />
                    <TextFieldController
                        control={control}
                        name="midle"
                        label="Midle"
                        variant="outlined"
                    />
                    <TextFieldController
                        control = {control}
                        name="lastName"
                        label="Last Name"
                        helperText="Please fill last name"
                        required
                        rules={{ required: true }}
                    />
                    <Grid item xs={12}   >

                    <TextFieldController
                        control = {control}
                        name="suffix"
                        label="Suffix"
                        helperText="Please fill suffix"
                        required
                        rules={{ required: true }}
                    />
                        <Controller
                            control={control}
                            name="dateSelect"
                            rules={{ required: 'Please, enter your birthday' }}
                            render={
                                ({
                                     field: {onChange},
                                     fieldState: { error }
                                 }) =>(
                                    <StyledDatePicker
                                        label = "Day of Birth"
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message: "mm/dd/yy"}
                                    />

                                )
                            }
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldController
                            control = {control}
                            name="emailaddress"
                            label="Email address"
                            helperText="Please fill email address"
                            required
                            rules={{ required: true }}
                            helperText="Please fill email address"

                        />
                        <Controller
                            control={control}
                            name="Phone"
                            rules={{ required: "Enter valid number" }}
                            render={
                                ({
                                     field: {onChange, value},
                                     fieldState: { error } }
                                ) =>(
                                    <IMaskPhoneInput
                                        label="Phone"
                                        mask="+{3}-000-000-00-00"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message: null}
                                        required
                                    />
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldController
                            control={control}
                            name="redress"
                            label="Redress number"
                            variant="outlined"

                        />
                        <TextFieldController
                            control = {control}
                            name="travellerNumber"
                            label="Known traveller number"
                            helperText="Please fill traveller number"
                            required
                            rules={{ required: true }}

                        />
                    </Grid>

                    </Grid>


            </Grid>

        <Button type="submit" variant="outlined">OK</Button>
        </form>
    )
}

export default PassengerForm;