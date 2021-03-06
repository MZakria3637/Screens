import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { useHistory, Route } from 'react-router-dom';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Rating from '@mui/material/Rating';
import MainDashboard from './mainDashboard';
import Orders from '../Orders/Orders';
import Quotes from '../Quote Requests/quotes'
function Dashboard() {
    const history = useHistory();
    const [value, setValue] = React.useState(2);
    const [Order, setOrder] = useState(false);
    const [Quote, setQuote] = useState(false);
    const [Sales, setSales] = useState(false);
    const [main, setmain] = useState(false);
    useEffect(() => {
        if (Order)
        {
            history.push("/seller/order");
        }
        else if (Quote)
        {
            history.push("/seller/request-quotes");
        }
        else if (Sales)
        {
            history.push("/seller");
        }
        else if (main)
        {
            history.push("/seller");
        }
    }, [Order, Quote, Sales, main, history])
    console.log(main);
    console.log(Order);
    console.log(Quote);
    console.log(Sales);
    console.log("----------------end--------");
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
                    <div className="align-self-center mb-5">
                    <Rating
                        sx={{ color:'#07ABA1'}}
                        
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    ></Rating>
                    </div>
                    <ListItem className="mx-3 mb-1 "
                        button
                        to="/person"
                        onClick={() => {
                            setSales(false);
                            setOrder(true);
                            setQuote(false);
                            setmain(false);

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
                            setQuote(true);
                            setmain(false);
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
                            setQuote(false);
                            setmain(false);
                        }}
                    >
                        <ListItemIcon>
                            <AutoGraphIcon/>
                            </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography type="body2" style={{ fontWeight: Sales ? 'bold' : '' }}>Sales</Typography>} />
                    </ListItem>


                    <button type="button" class="side_btn btn  fw-bold my-4 "
                        onClick={() => {
                            setSales(false);
                            setOrder(false);
                            setQuote(false);
                            setmain(true);
                        }}>Return Home</button>
                </List>


            </Box>
            <div className="col">
                {!Order && !Quote && <Route path='/seller' component={MainDashboard} />}
                <Route path='/seller/request-quotes' component={Quotes} />
                <Route path='/seller/order' component={Orders} />
                
            </div>


        </div>
    )
}

export default Dashboard
