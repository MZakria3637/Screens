import React from 'react'
import "./change_password.css"
function ChangePassword() {
    return (
        <div className="Change">
            <div className="change_form">
                <div className="row3">
                    <h3 className="heading my-5 fw-bold">Change Password</h3>
                    <div className="mb-3">
                        <label for="currentPassword" className="form-label fw-bold fs-6">Current Password</label>
                        <input type="password" className=" p-2 input" id="currentPassword"/>
                    </div>
                    <div className="mb-3">
                        <label for="newPassword" className="form-label fw-bold fs-6">New Password &nbsp;  &nbsp;&nbsp; </label>
                        <input type="password" className=" p-2 input" id="newPassword" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label fw-bold fs-6">Confirm Password</label>
                        <input type="password" className=" p-2 input" id="confirmPassword" />
                    </div>
                    <button type="button" class="change_pass btn btn-primary change_btn fw-bold my-4">Save</button>

                </div>

            </div>
        </div>
    )
}

export default ChangePassword
