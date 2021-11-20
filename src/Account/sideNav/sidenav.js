import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import "./sideNav.css";
import PersonInfo from '../personInfo/personInfo';
import { Route } from 'react-router';
import Shippingarea from '../shippingarea/shippingArea';
import { useHistory } from 'react-router-dom';
import ChangePassword from "./../../change_password/change_password";
// profile =require("../../assets/profile.png");
function SideNav() {
    const history = useHistory();
   
    const [PersonInf, setpersonInf] = useState(false);
    const [ShippingArea, setshipping] = useState(false);
    const [Changepassword, setChangepassword] = useState(false);
    useEffect(() => {
        setpersonInf(true);
    }, [])
    useEffect(() => {
        if (PersonInf)
        {
            history.push("/account/personinfo")
        }
        else if (ShippingArea)
        {
            history.push("/account/shipping")
        }
        else if (Changepassword)
        {
            history.push("/account/changepass")
        }
    }, [PersonInf, ShippingArea, Changepassword,history])
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
                            setChangepassword(false);
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
                                setChangepassword(false);
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
                                setChangepassword(true);
                                setpersonInf(false);
                                setshipping(false)
                    }}
                >
                        <ListItemText
                        disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: Changepassword ? 'bold' : '' }}>Change Password</Typography>} />
                    </ListItem>
                   
                
                <button type="button" class="side_btn btn  fw-bold my-4 ">Return Home</button>
            </List>
            
            
        </Box>
            <div className="col">
                <Route path='/account/shipping' component={Shippingarea} />
                <Route path='/account/personinfo' component={PersonInfo} />
                <Route path='/account/changepass' component={ChangePassword}/>
            </div>
            

        </div>
    )
}

export default SideNav
