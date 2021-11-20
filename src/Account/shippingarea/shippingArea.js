import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import "./shipping.css"
function Shippingarea() {
    return (
        <div className="person-row shipping">
            <h3 className="opacity">Add Shipping Areas </h3>
            <p className="bold_p opacity"> These are the areas where you will get Quote Requests. </p>
            <div className="border_shipping">
                <input type="text" placeholder="Add Location" className=" p-2 Shipping-input " id="currentPassword" />
                <FormControlLabel className="mt-3 align-self-start checkShipping"
                    control={
                        <Checkbox
                            style={{
                                color: "#07ABA1",
                                transform: "scale(2)",
                            }}
                            // value="cryon"
                        />
                    }
                    label={<Typography variant="h6" className="opacity" style={{ paddingLeft: 20, fontSize: 16, fontWeight: '600' }}>Local</Typography>}
                />
                <FormControlLabel className="mt-3 align-self-start checkShipping"
                    control={
                        <Checkbox
                            style={{
                                color: "#07ABA1",
                                transform: "scale(2)",
                            }}
                        // value="cryon"
                        />
                    }
                    label={<Typography variant="h6" className="opacity" style={{ paddingLeft: 20, fontSize: 16, fontWeight: '600' }}>Lahore</Typography>}
                />

                <FormControlLabel className="mt-3 align-self-start checkShipping"
                    control={
                        <Checkbox
                            style={{
                                color: "#07ABA1",
                                transform: "scale(2)",
                            }}
                        // value="cryon"
                        />
                    }
                    label={<Typography variant="h6" className="opacity" style={{ paddingLeft: 20, fontSize: 16, fontWeight: '600' }}>Karachi</Typography>}
                />

                <FormControlLabel className="mt-3 align-self-start checkShipping"
                    control={
                        <Checkbox
                            style={{
                                color: "#07ABA1",
                                transform: "scale(2)",
                            }}
                        // value="cryon"
                        />
                    }
                    label={<Typography variant="h6" className="opacity" style={{ paddingLeft: 20, fontSize: 16, fontWeight: '600' }}>Multan</Typography>}
                />

                
                <button type="button" class="shipping-btn btn  fw-bold my-4 ">Save</button>
            </div>
        </div>
    )
}

export default Shippingarea
