import React from 'react';
import "./dashboard.css";
import DashboardIcon from "./../../assets/amzon.png";
import Charts from "./charts";
function MainDashboard() {
    return (
        <div>
            <h4 className="fw-bold pt-5 px-3 pb-5">Seller Dashboard</h4>
            <h4 className="fw-bold px-3 ">Ali Awan</h4>
            <div className="dashboard">
            <p className="px-3 fw-bold opacity">Hey Welcome on Your dashboard. See your<br/>
                    Montly Sale and profile lose on your Screen.</p>
                <div className="dashIcon">
                    <div className="price">
                        <h6 className="fw-bold">Balance</h6>
                        <h6 className="fw-bold">100$</h6>
                    </div>
                        <div className="price sale">
                        <h6 className="fw-bold">Monthly Sale</h6>
                        <h6 className="fw-bold">100$</h6>
                        </div>
                            <div className="price profit">
                        <h6 className="fw-bold">Profit</h6>
                        <h6 className="fw-bold">1000$</h6>
                            </div>
                    <div className="amazon">
                    <img alt="Null" className="" src={DashboardIcon} />
                    </div>
                </div>
                <Charts />
            </div>
            
        </div>
    )
}

export default MainDashboard
