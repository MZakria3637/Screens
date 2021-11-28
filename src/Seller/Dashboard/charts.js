import { Avatar } from '@mui/material';
import React from 'react'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "./dashboard.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
const data = [
  { label: 'Jan', Low: 21, High:80 },
  { label: 'Feb', Low: 35,High:70 },
  { label: 'Mar', High: 75,Low:47 },
  { label: 'Jun', High: 80,Low:55  },
    { label: 'Jun', High: 89,Low:46  },
    { label: 'Dec', High: 90,Low:56},
    
];

export default function Charts() {
  return (
    <div className="row">
      <div className=" col-md-8">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="label" />
              <YAxis />
                          <CartesianGrid stroke="##FFFFFF" strokeDasharray="5 5" />
              <Tooltip />
              <Legend/>
                          <Bar dataKey="Low" fill="#FF0000" />
                          <Bar dataKey="High" fill="#07ABA1" />
            </BarChart>
          </ResponsiveContainer>
              </div>
              
      </div>
          <div className="mx-2 col-md-3 orders">
              <h5 className="fw-bold">Order In Process</h5>
              <StoreMallDirectoryIcon sx={{ fontSize: 30, color: "black" }} />
              <h6 className="mb-2">30 Order</h6>
              <div className="suborders">
                  <Avatar alt="Remy Sharp" className="" sx={{ width: 40, height: 40 }} />
                  <div className='subCol'>
                      <h8>Order Id</h8>
                      <h8>0300</h8>
                  </div>
                  <div className='shipment mx-4 '>
                      <KeyboardArrowDownIcon className="ship1" sx={{color:"black", fontSize:30}}/>
                      <p className="ship2">Shipment</p>
                      <button className="ship3">Done</button>
                  </div>
                 
              </div>
              <div className="suborders">
                  <Avatar alt="Remy Sharp" className="" sx={{ width: 40, height: 40 }} />
                  <div className='subCol'>
                      <h8>Order Id</h8>
                      <h8>0300</h8>
                  </div>
                  <div className='shipment mx-4 '>
                      <KeyboardArrowDownIcon className="ship1" sx={{ color: "black", fontSize: 30 }} />
                      <p className="ship2">Shipment</p>
                      <button className="ship3">Done</button>
                  </div>
              </div>
              <div className="suborders">
                  <Avatar alt="Remy Sharp" className="" sx={{ width: 40, height: 40 }} />
                  <div className='subCol'>
                      <h8>Order Id</h8>
                      <h8>0300</h8>
                  </div>
                  <div className='shipment mx-4 '>
                      <KeyboardArrowDownIcon className="ship1" sx={{ color: "black", fontSize: 30 }} />
                      <p className="ship2">Shipment</p>
                      <button className="ship3">Done</button>
                  </div>
              </div>
              <div className="suborders">
                  <Avatar alt="Remy Sharp" className="" sx={{ width: 40, height: 40 }} />
                  <div className='subCol'>
                      <h8>Order Id</h8>
                      <h8>0300</h8>
                  </div>
                  <div className='shipment mx-4 '>
                      <KeyboardArrowDownIcon className="ship1" sx={{ color: "black", fontSize: 30 }} />
                      <p className="ship2">Shipment</p>
                      <button className="ship3">Done</button>
                  </div>
              </div>

          </div>
    </div>
  )
}