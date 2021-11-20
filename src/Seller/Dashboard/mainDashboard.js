import React from 'react';
import "./dashboard.css";
import DashboardIcon from "./../../assets/amzon.png";
function MainDashboard() {
    return (
        <div>
            <h4 className="fw-bold pt-5 px-3 pb-5">Seller Dashboard</h4>
            <h4 className="fw-bold px-3 ">Ali Awan</h4>
            <div className="dashboard">
            <p className="px-3 fw-bold opacity">Hey Welcome on Your dashboard. See your<br/>
                    Montly Sale and profile lose on your Screen.</p>
                <img className="d-flex align-self-end" src={DashboardIcon}/>
</div>
        </div>
    )
}

export default MainDashboard
