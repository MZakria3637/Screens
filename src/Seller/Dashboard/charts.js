import React from 'react'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { label: 'Jan', Low: 21,  },
  { label: 'Feb', Low: 35 },
  { label: 'Mar', High: 75, },
  { label: 'Jun', High: 80,  },
    { label: 'Jun', High: 89,  },
    { label: 'Dec', High: 90,},
    
];

export default function Charts() {
  return (
    <div className="row">
      <div className="section col-md-6">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={270}>
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
              <div className=" col-md-2">
                  <h3>Order In Process</h3>

              </div>
      </div>

    </div>
  )
}