import React from 'react'
import "./change_password.css"
function ChangePassword() {
    return (
        <div className="Login">
            <div className="login_form">
                <div className="row1">
                    <h3 className="heading my-5 fw-bold">Log in</h3>
                    <span className="forgot_pass btn">Forgot Password</span>
                    <button type="button" class="btn btn-primary login_btn fw-bold w-25 my-4">LOGIN</button>

                </div>

            </div>
        </div>
    )
}

export default ChangePassword
