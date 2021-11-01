import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './ManageAllOrders.css'

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://nameless-cliffs-17759.herokuapp.com/manageallorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (proceed) {
      fetch(`https://nameless-cliffs-17759.herokuapp.com/deleteorder/${id}`, {
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
    fetch(`https://nameless-cliffs-17759.herokuapp.com/updateorder/${id}`, {
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
          fetch("https://nameless-cliffs-17759.herokuapp.com/manageallorders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }
      });
  };
  return (
    <div className="manage-all-orders-container pt-4">
      <h1 className="pb-2">Number of all orders : {orders?.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((order, index) => (
          <tbody key={order._id}>
            <tr>
              <td>{index}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.packagename}</td>
              <td>{order?.address}</td>
              <td>{order?.date}</td>
              <td>{order?.mobile}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn btn-danger btn-sm m-2"
                >Delete</button>
                <br />
                <button
                  onClick={() => handleConfirmed(order._id, order)}
                  className="btn btn-primary btn-sm m-2"
                >
                  {order?.status}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
