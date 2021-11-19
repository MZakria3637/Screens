import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import "./sideNav.css";
import PersonInfo from '../personInfo/personInfo';
import { Route } from 'react-router';
import Shippingarea from '../shippingarea/shippingArea';
// import { Link } from 'react-router-dom';
// profile =require("../../assets/profile.png");
function SideNav() {
    useEffect(() => {
        setpersonInf(true);
    }, [])
    const [PersonInf, setpersonInf] = useState(false);
    const [ShippingArea, setshipping] = useState(false);
    const [ChangePassword, setChangePassword] = useState(false);
    return (
        <div className="row overflow-hidden w-100">
        <Box
            sx={{ width: 250, overflow: 'hidden'}}
            role="presentation"
            className="background col-2"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            {console.log(PersonInf)}
            <List className="row_side">
                <Avatar alt="Remy Sharp" className="align-self-center mt-3" sx={{ width: 70, height: 70 }} />
                <span className=" align-self-center mb-5 boldText">Ali Awan</span>
                    <ListItem className="mx-3 mb-1 "
                        button
                        to="/person"
                    onClick={() => {
                            setChangePassword(false);
                            setpersonInf(true);
                            setshipping(false)
                       
                    }}
                    >
                         
                        <ListItemText
                            disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: PersonInf ? 'bold' : '' }}>Personal Information</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1"
                        button
                        onClick={() => {
                                setChangePassword(false);
                                setpersonInf(false);
                                setshipping(true)
                    }}
                >
                        <ListItemText
                            disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: ShippingArea ? 'bold' : '' }}>Shipping Area</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1 "
                        button
                        onClick={() => {
                                setChangePassword(true);
                                setpersonInf(false);
                                setshipping(false)
                    }}
                >
                        <ListItemText
                        disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: ChangePassword ? 'bold' : '' }}>Change Password</Typography>} />
                    </ListItem>
                   
                
                <button type="button" class="side_btn btn  fw-bold my-4 ">Return Home</button>
            </List>
            
            
        </Box>
            <div className="col">
                <Route path='/' component={Shippingarea} />
                <Route path='/person' component={PersonInfo} />
                
            </div>
            

        </div>
    )
}

export default SideNav
