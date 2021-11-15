import React, { useEffect, useState } from 'react';
import { MdDeleteForever, MdPending } from 'react-icons/md';
import { GiConfirmed } from "react-icons/gi";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://lit-refuge-91293.herokuapp.com/manageallorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (proceed) {
      fetch(`https://lit-refuge-91293.herokuapp.com/deleteorder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount) {
            alert("Deleted order!");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleConfirmed = (id, order) => {
    fetch(`https://lit-refuge-91293.herokuapp.com/updateorder/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Order Confirmed!");
          fetch("https://lit-refuge-91293.herokuapp.com/manageallorders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }
      });
  };
    return (
        <div className="main-content" style={{height: "100vh"}}>
      <div className="container-fluid my-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">{orders.length} Orders</h3>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Billing Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone No.</th>
                      <th scope="col">Address</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Price</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">View Details</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {
                      orders?.map((order , index)=>(
                        <tbody>
                        <tr>
                          <td>{index+1}</td>
                          <td>
                            <div className="media align-items-center">
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  <strong>{order?.name}</strong>
                                </span>
                              </div>
                            </div>
                          </td>
    
                          <td>{order?.email}</td>
                          <td>{order?.mobile}</td>
                          <td>{order?.address}</td>
                          <td>{order?.productname}</td>
                          <td>{order?.date}</td>
                          <td>${order?.price} USD</td>
    
                          <td>Pending</td>
                          <td>
                            <button className="btn btn-primary btn-sm rounded-pill">
                              View Details
                            </button>
                          </td>
                          <td>
                            <div className="d-flex">
                              {
                                order.status === 'Pending' ?
                                <button
                                onClick={() => handleConfirmed(order._id, order)}
                                className="btn btn-secondary btn-sm rounded-pill d-flex align-items-center"
                                style={{ gap: "3px" }}
                              >
                                <MdPending></MdPending> Pending
                              </button>
                                :
                                <button
                                className="btn btn-sm rounded-pill d-flex align-items-center"
                                style={{ gap: "3px" ,backgroundColor: "#AFCDB4" }}
                              >
                                <GiConfirmed></GiConfirmed> Shipped
                              </button>
                              }

                              <button onClick={() => handleDelete(order._id)}
                                className="btn btn-danger btn-sm rounded-pill d-flex align-items-center"
                                style={{ gap: "3px" }}
                              >
                                <MdDeleteForever></MdDeleteForever> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      ))
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageAllOrder;