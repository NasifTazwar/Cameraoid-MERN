import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";
import { MdDeleteForever, MdPending } from "react-icons/md";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://lit-refuge-91293.herokuapp.com/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  // DELETE ORDER
  const handleDelete = id =>{
    // console.log(id);
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if(proceed){
      fetch(`https://lit-refuge-91293.herokuapp.com/deleteorder/${id}` , {
        method: "DELETE",
        headers: {"content-type" : "application/json",},
    })
    .then(res => res.json())
    .then((data)=> {
        // console.log(data);
        if(data.deletedCount){
            alert('Deleted order!');
            const remaining = myOrders.filter(order=> order._id !== id);
            setMyOrders(remaining);
        }
    })
    }
  };

  return (
    <div class="main-content">
      <div class="container-fluid my-5 mb-5">
        <div class="row">
          <div class="col">
            <div class="card shadow">
              <div class="card-header border-0">
                <h3 class="mb-0">My Orders : {myOrders.length}</h3>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
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
                      myOrders?.map((myOrder , index)=>(
                        <tbody>
                        <tr>
                          <td>{index+1}</td>
                          <td>
                            <div class="media align-items-center">
                              {/* <div class="avatar rounded-circle mr-3">
                                <img src={myOrder?.img} alt="" />
                              </div> */}
                              <div class="media-body">
                                <span class="mb-0 text-sm">
                                  <strong>{myOrder?.name}</strong>
                                </span>
                              </div>
                            </div>
                          </td>
    
                          <td>{myOrder?.email}</td>
                          <td>{myOrder?.mobile}</td>
                          <td>{myOrder?.address}</td>
                          <td>{myOrder?.productname}</td>
                          <td>{myOrder?.date}</td>
                          <td>${myOrder?.price} USD</td>
    
                          <td>Pending</td>
                          <td>
                            <button className="btn btn-primary btn-sm rounded-pill">
                              View Details
                            </button>
                          </td>
                          <td>
                            <div className="d-flex">
                              <button
                                className="btn btn-secondary btn-sm rounded-pill d-flex align-items-center"
                                style={{ gap: "3px" }}
                                disabled
                              >
                                <MdPending></MdPending> {myOrder.status}
                              </button>
                              <button onClick={() => handleDelete(myOrder._id)}
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

export default MyOrders;
