import React from 'react'
import "./shipping.css"
function Shippingarea() {
    return (
        <div className="person-row shipping">
            <h3>Add Shipping Areas </h3>
            <p className="bold_p"> These are the areas where you will get Quote Requests. </p>
            <div className="border_shipping">
                <button type="button" class="shipping-btn btn  fw-bold my-4 ">Save</button>
            </div>
        </div>
    )
}

export default Shippingarea
