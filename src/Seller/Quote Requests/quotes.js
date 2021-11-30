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
import './quotes.css'
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
                    <VisibilityIcon className="me-3 fw-bold " onClick={handleClickOpen} sx={{ fontSize: 35 }} />
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
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Dialog open={open} onClose={handleClose} sx={{padding:10}}>
                <DialogTitle sx={{ color:"#07ABA1" ,alignSelf:"center",fontWeight:700,fontSize:25,paddingLeft:25,paddingRight:25}}>Request Details</DialogTitle>
                <DialogContent sx={{ display: "flex", alignItems: "center", flexDirection: "column",}}>
                        <div className="d-flex flex-row">
                            <h5 className="me-5 fw-bold ">Total Items</h5>
                        <h5 className="opacityOf">15</h5>
                    </div>
                    <div className="d-flex flex-row">
                        <h5 className="me-5 fw-bold ">Total Price</h5>
                        <h5 className="opacityOf">15</h5>
                    </div>
                    <div className="d-flex flex-row">
                        <h5 className="me-5 fw-bold ">Shipping Area</h5>
                        <h5 className="opacityOf">15</h5>
                    </div>
                    <div className="d-flex flex-row">
                        <h5 className="me-5 fw-bold ">Delivery Area</h5>
                        <h5 className="opacityOf">15</h5>
                    </div>
                    <div className="d-flex flex-row">
                        <h5 className="me-5 fw-bold ">Entery Delivery Charges</h5>
                        <input type="text" className=""></input>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="side_btn px-3 pe-3 mb-4 me-3">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Quotes
