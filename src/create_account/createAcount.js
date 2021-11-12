import React,{useState} from 'react'
import "./account.css"
import { FormControl,TextField, IconButton, Input, InputAdornment, InputLabel, } from '@mui/material';
import { Plumbing, Visibility, VisibilityOff } from '@mui/icons-material';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

function CreateAcount() {
    const shops = ["AC", "Plumbing", "Electric", "Fire Fighting", "Support", "Medical"];
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        selectedShop:'',
        password: '',
        confirmPassword: '',
        showPassword: false,
        description:'',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="Login">
            {console.log(values.showEmail)}
            <div className="login_form">
                <div className="row1">
                    <h3 className="heading my-5 fw-bold">Create Account</h3>
                        <div className="subRow">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-fname">First Name</InputLabel>
                            <Input
                                id="standard-adornment-fname"
                                type='text'
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                            />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-lastName">Last Name</InputLabel>
                                <Input
                                    id="standard-adornment-lastName"
                                    type='lastName'
                                    value={values.lastName}
                                    onChange={handleChange('email')}
                                />
                            </FormControl>
                        </div>
                    <div className="subRow">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                            <Input
                                id="standard-adornment-email"
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-phone">Phone</InputLabel>
                            <Input
                                id="standard-adornment-phone"
                                type='phone'
                                value={values.phone}
                                onChange={handleChange('phone')}
                            />
                        </FormControl>
                    </div>
                    <div className="subRow">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                            <Input
                                id="standard-adornment-email"
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-phone">Phone</InputLabel>
                            <Input
                                id="standard-adornment-phone"
                                type='phone'
                                value={values.phone}
                                onChange={handleChange('phone')}
                            />
                        </FormControl>
                    </div>
                    <button type="button" class="btn btn-primary login_btn fw-bold w-25 my-4">Create Account</button>

                </div>

            </div>
        </div>
    )
}

export default CreateAcount
