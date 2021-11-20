import { List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Rating from '@mui/material/Rating';
function Dashboard() {
    const history = useHistory();
    const [value, setValue] = React.useState(2);
    const [Order, setOrder] = useState(false);
    const [Quote, setQuote] = useState(false);
    const [Sales, setSales] = useState(false);
    useEffect(() => {
        if (Order)
        {
            // history.push("/account/Ordero")
        }
        else if (Quote)
        {
            // history.push("/account/shipping")
        }
        else if (Sales)
        {
            //      history.push("/account/changepass")
        }
    }, [Order, Quote, Sales, history])
    return (
        <div className="row overflow-hidden w-100">
            <Box
                sx={{ width: 250, overflow: 'hidden' }}
                role="presentation"
                className="background col-2"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            >
        
                <List className="row_side">
                    <Avatar alt="Remy Sharp" className="align-self-center mt-3" sx={{ width: 70, height: 70 }} />
                    <span className=" align-self-center  boldText">Ali Awan</span>
                    <Rating
                        sx={{ color:'#07ABA1'}}
                        className="align-self-center mb-5"
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <ListItem className="mx-3 mb-1 "
                        button
                        to="/person"
                        onClick={() => {
                            setSales(false);
                            setOrder(true);
                            setQuote(false)

                        }}
                    >
                        <ListItemIcon>
                            <StoreMallDirectoryIcon />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontWeight: Order ? 'bold' : '' }}>Order</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1"
                        button
                        onClick={() => {
                            setSales(false);
                            setOrder(false);
                            setQuote(true)
                        }}
                    >
                        <ListItemIcon>
                            <CardGiftcardIcon />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontWeight: Quote ? 'bold' : '' }}>Quote Request</Typography>} />
                    </ListItem>
                    <ListItem className="mx-3 mb-1 "
                        button
                        onClick={() => {
                            setSales(true);
                            setOrder(false);
                            setQuote(false)
                        }}
                    >
                        <ListItemIcon>
                            <AutoGraphIcon/>
                            </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontWeight: Sales ? 'bold' : '' }}>Sales</Typography>} />
                    </ListItem>


                    <button type="button" class="side_btn btn  fw-bold my-4 ">Return Home</button>
                </List>


            </Box>
            <div className="col">
                {/* <Route path='/account/shipping' component={Quote} />
                <Route path='/account/Ordero' component={Ordero} />
                <Route path='/account/changepass' component={Sales} /> */}
            </div>


        </div>
    )
}

export default Dashboard
