import { List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./sideNav.css";
import makeStyles from '@material-ui/styles/makeStyles';

function SideNav() {
    const useStyles = makeStyles({
        active: {
            '& .MuiTypography-root': {
                fontWeight: 'bold',
            },
        },
    });
    const classes = useStyles();
    return (
        <Box
            sx={{ width:250}}
            role="presentation"
            className="background"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="row_side">
                <Avatar alt="Remy Sharp" className="align-self-center" sx={{ width: 60, height: 60 }} />
                <span className="lead fw-bold align-self-center mb-5">Ali Awan</span>
                {['Personal Information', 'Shipping Area', 'Change Password',].map((text, index) => (
                    <ListItem className="mx-3 mb-1 boldText"
                        button
                        activeClassName={classes.active}
                        key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                   
                ))}
                <button type="button" class="side_btn btn  fw-bold my-4 ">Return Home</button>
            </List>
            
        </Box>
    )
}

export default SideNav
