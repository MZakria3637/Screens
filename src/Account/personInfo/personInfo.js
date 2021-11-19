import React, { useState } from 'react'
import "./person.css"
import { FormControl,Input, InputLabel, } from '@mui/material';
// import { DropzoneArea } from 'material-ui-dropzone';
// import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import upload from "../../assets/upload.png"
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
            <FormControl sx={{  width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                <Input
                    id="standard-adornment-name"
                    type='text'
                    value={values.name}
                    onChange={handleChange('name')}
                />
            </FormControl>
            <FormControl sx={{  width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-cellNumber">Cell Number</InputLabel>
                <Input
                    id="standard-adornment-cellNumber"
                    type='cellNumber'
                    value={values.cellNumber}
                    onChange={handleChange('cellNumber')}
                />
            </FormControl>
            <FormControl sx={{  width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-email">E-mail</InputLabel>
                <Input
                    id="standard-adornment-email"
                    type='email'
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </FormControl>
            <FormControl sx={{  width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-shopAddress">Shop Address</InputLabel>
                <Input
                    id="standard-adornment-shopAddress"
                    type='text'
                    value={values.shopAddress}
                    onChange={handleChange('shopAddress')}
                />
            </FormControl>
            <FormControl sx={{  width: '40%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-bankAcoount">Bank Acoount</InputLabel>
                <Input
                    id="standard-adornment-bankAcoount"
                    type='text'
                    value={values.bankAcoount}
                    onChange={handleChange('bankAcoount')}
                />
            </FormControl>
            <label className="label">Upload Profile Image </label>
            <div className=" border_image d-flex align-center justify-content-center">
             <img src={upload} className=""></img>
             </div>
            <button type="button" class="person-btn btn  fw-bold my-4 ">Save</button>
        </div>
    )
}

export default PersonInfo
