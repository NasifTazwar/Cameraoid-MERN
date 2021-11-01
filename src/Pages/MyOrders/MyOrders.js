import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://nameless-cliffs-17759.herokuapp.com/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  console.log(myOrders);

  const handleDelete = id =>{
    // console.log(id);
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if(proceed){
      fetch(`https://nameless-cliffs-17759.herokuapp.com/deleteorder/${id}` , {
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
    <div className="my-orders-container pt-4">
      <h2 className="pb-2">My {myOrders.length} Orders </h2>
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
        {myOrders?.map((myOrder, index) => (
          <tbody key={myOrder._id}>
            <tr>
              <td>{index}</td>
              <td>{myOrder?.name}</td>
              <td>{myOrder?.email}</td>
              <td>{myOrder?.packagename}</td>
              <td>{myOrder?.address}</td>
              <td>{myOrder?.date}</td>
              <td>{myOrder?.mobile}</td>
              <td>
                <button
                  onClick={() => handleDelete(myOrder._id)}
                  className="btn btn-danger btn-sm m-2"
                >Cancel</button>
                <br />
                <button
                  // onClick={() => handleConfirmed(myOrder._id,)}
                  className="btn btn-primary btn-sm m-2"
                >
                  {myOrder?.status}
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
