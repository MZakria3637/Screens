import React,{useState} from 'react'
import "./login.css"
import { FormControl, IconButton, Input, InputAdornment, InputLabel, } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
function Login() {
    const [values, setValues] =useState({
        email: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
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
                    <h3 className="heading my-5 fw-bold">Log in</h3>
                    <FormControl sx={{ my: 1,mb:3, width: '80%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                        <Input
                            id="standard-adornment-email"
                            type='email'
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </FormControl>
                    <FormControl sx={{ my: 1, mb: 3, width: '80%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <span className="forgot_pass btn">Forgot Password</span>
                    <button type="button" class="btn btn-primary d-inline login_btn fw-bold w-25 my-4">LOGIN</button>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Login
