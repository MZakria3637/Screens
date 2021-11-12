import React, { useState } from 'react'
import "./forgot.css"
import { FormControl, Input, InputLabel, } from '@mui/material';
function Forgot() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    return (
        <div className="Login">
            {console.log(values.showEmail)}
            <div className="login_form">
                <div className="row1">
                    <h3 className="heading my-5 fw-bold">Forget Passsword</h3>
                    <h6 className="instruction">Confirm your email and we’ll send the instruction </h6>
                    <FormControl sx={{ my: 2, width: '80%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                        <Input
                            id="standard-adornment-email"
                            type='email'
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </FormControl>
                    <button type="button" class="btn btn-primary login_btn fw-bold w-25 my-4">Reset Password</button>

                </div>

            </div>
        </div>
    )
}

export default Forgot
