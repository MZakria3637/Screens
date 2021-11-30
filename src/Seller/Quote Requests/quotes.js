import React, { useState } from 'react'
import './../Orders/orders.css'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Quotes() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="d-flex mx-4 flex-column w-75">
            <h5 className="mt-3 align-self-center ">Quote Requests</h5>
           <span className="w-25 d-flex flex-row"><h6 className="mx-3 me-3 pt-2">Show</h6> <select className="px-2">
                <option value="0">10</option>
                <option value="1">11</option>
                <option value="2">12</option>
            </select>
            </span>
            <div className="d-flex flex-column align-items-center mt-3 mx-2 w-100 main_border h-100">
                <div className="w-100 d-flex back_orders flex-row border-bottom border-secondary p-2">
                    <h6 className="me-4 mx-5">Request</h6>
                    <h6 className="me-4 mx-5">Items</h6>
                    <h6 className="me-4 mx-5">Delivery Area</h6>
                    <h6 className="me-5 mx-5">Delivery Time</h6>
                    <h6 className="me-5 mx-5">Action</h6>
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-1">
                    <DeleteIcon className="me-5" sx={{ fontSize: 35 }} />
                    <VisibilityIcon className="me-3" sx={{ fontSize: 35 }} />
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className="w_opacity d-flex flex-row-reverse  p-4">
                </div>
                <div className=" d-flex flex-row-reverse    p-4">
                </div>
            </div>
            <h6 className=" mt-3 cursor align-self-end" ><span className="border_bold">NEXT PAGE</span></h6>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ color:"#07ABA1" ,alignSelf:"center",fontWeight:700,fontSize:24}}>Request Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Quotes
