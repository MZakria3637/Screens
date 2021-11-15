import { List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./sideNav.css"

function SideNav() {
    return (
        <Box
            sx={{ width:250}}
            role="presentation"
            className="background"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="row_side">
                {['Personal Information', 'Shipping Area', 'Change Password',].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText  primary={text} />
                    </ListItem>
                ))}
                <button type="button" class="side_btn btn  fw-bold my-4 ">Return Home</button>
            </List>
            
        </Box>
    )
}

export default SideNav
