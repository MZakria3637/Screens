import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import "./sideNav.css";


function SideNav() {
    useEffect(() => {
        setpersonInfo(true);
    }, [])
    const [PersonInfo, setpersonInfo] = useState(false);
    const [ShippingArea, setshipping] = useState(false);
    const [ChangePassword, setChangePassword] = useState(false);
    return (
        <Box
            sx={{ width: 250, overflow: 'hidden'}}
            role="presentation"
            className="background"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            {console.log(PersonInfo)}
            <List className="row_side">
                <Avatar alt="Remy Sharp" className="align-self-center mt-3" sx={{ width: 70, height: 70 }} />
                <span className=" align-self-center mb-5 boldText">Ali Awan</span>
                    <ListItem className="mx-3 mb-1 "
                        button
                    onClick={() => {
                            setChangePassword(false);
                            setpersonInfo(true);
                            setshipping(false)
                       
                    }}
                >
                        <ListItemText
                            disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: PersonInfo ? 'bold' : '' }}>Personal Information</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1 boldText"
                        button
                        onClick={() => {
                                setChangePassword(false);
                                setpersonInfo(false);
                                setshipping(true)
                    }}
                >
                        <ListItemText
                            disableTypography
                        primary={<Typography type="body2" style={{ fontWeight: ShippingArea ? 'bold' : '' }}>Shipping Area</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1 boldText"
                        button
                        onClick={(text) => {
                                setChangePassword(true);
                                setpersonInfo(false);
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
    )
}

export default SideNav
