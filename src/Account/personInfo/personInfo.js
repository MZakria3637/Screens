import React, { useState } from 'react'
import "./person.css"
import { FormControl, Button, Input, InputAdornment, InputLabel, } from '@mui/material';
function PersonInfo() {
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
        <div className="person-row">
            <h4 className="align-self-end mt-3 pInfo">Personal Information</h4>
            <FormControl sx={{ my: 1, mb: 1, width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                <Input
                    id="standard-adornment-name"
                    type='text'
                    value={values.name}
                    onChange={handleChange('name')}
                />
            </FormControl>
            <FormControl sx={{ my: 1, mb: 1, width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-cellNumber">Cell Number</InputLabel>
                <Input
                    id="standard-adornment-cellNumber"
                    type='cellNumber'
                    value={values.cellNumber}
                    onChange={handleChange('cellNumber')}
                />
            </FormControl>
            <FormControl sx={{ my: 1, mb: 1, width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-email">E-mail</InputLabel>
                <Input
                    id="standard-adornment-email"
                    type='email'
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </FormControl>
            <FormControl sx={{ my: 1, mb: 1, width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-shopAddress">Shop Address</InputLabel>
                <Input
                    id="standard-adornment-shopAddress"
                    type='text'
                    value={values.shopAddress}
                    onChange={handleChange('shopAddress')}
                />
            </FormControl>
            <FormControl sx={{ my: 1, mb: 1, width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-bankAcoount">Bank Acoount</InputLabel>
                <Input
                    id="standard-adornment-bankAcoount"
                    type='text'
                    value={values.bankAcoount}
                    onChange={handleChange('bankAcoount')}
                />
            </FormControl>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
            <button type="button" class="person-btn btn  fw-bold my-4 ">Save</button>
        </div>
    )
}

export default PersonInfo
