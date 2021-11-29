import React, { useEffect, useState } from 'react'
import './orders.css'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
function Orders() {
    const [States, setStates] = useState({
        All: false,
        New: false,
        Ready: false,
        Shipped: false,
        Completed:false,
    })
    useEffect(() => {
        setStates({ All: true, });
    }, [])
    return (
        <div className="d-flex mx-4 flex-column w-75">
            <h5 className="mt-3 align-self-center ">Orders</h5>
            <div className="d-flex mt-2 mx-4 flex-row  w-75">
                <h6 className="me-5 cursor  pe-auto" className={States.All ?"border_bold me-5 cursor":"me-5 cursor"}  onClick={() => {
                    setStates({
                        All: true,
                    })
                    
                }}>All</h6>
                <h6  className={States.New ? "border_bold me-5 cursor" : "me-5 cursor"} onClick={() => {
                    setStates({
                        New: true,
                    })

                }}>New</h6>
                <h6 className={States.Ready ? "border_bold me-5 cursor" : "me-5 cursor"} onClick={() => {
                    setStates({
                        Ready: true,
                    })

                }}>Ready to Ship</h6>
                <h6  className={States.Shipped ? "border_bold me-5 cursor" : "me-5 cursor"} onClick={() => {
                    setStates({
                        Shipped: true,
                    })

                }}>Shipped</h6>
                <h6  className={States.Completed ? "border_bold me-5 cursor" : "me-5 cursor"} onClick={() => {
                    setStates({
                        Completed: true,
                    })

                }}>Completed</h6>
            </div>
            <div className="mt-3 mx-2 w-100 border border-secondary h-100">
                <div className="w-100 d-flex back_orders flex-row border-bottom border-secondary p-2">
                    <h6 className="me-5 mx-5">Order</h6>
                    <h6 className="me-5 mx-5">Items</h6>
                    <h6 className="me-5 mx-5">Delivery Area</h6>
                    <h6 className="me-5 mx-5">Price</h6>
                    <h6 className="me-5 mx-5">Status</h6>
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-1">
                    <CompareArrowsIcon className="" sx={{ fontSize:35}}/>
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse  border-bottom border-secondary p-4">
                </div>
                <div className="w-100 d-flex flex-row-reverse    p-4">
                </div>
            </div>
            <h5 className=" mt-3 cursor align-self-end"><span className="border_bold">Next Page</span></h5>
        </div>
    )
}

export default Orders
