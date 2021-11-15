import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://lit-refuge-91293.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); 

  const handleDelete = (id) => {
    
    const proceed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (proceed) {
      fetch(`https://lit-refuge-91293.herokuapp.com/deleteproduct/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount) {
            alert("Deleted The Product!");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };


    return (
        <div className="main-content">
      <div className="container-fluid my-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">Total : {products.length} Products</h3>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush table-fixed">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">View Details</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {
                      products?.map((product , index)=>(
                        <tbody>
                        <tr>
                          <td>{index+1}</td>
                          <td>
                            <div className="media align-items-center">
                              <div className="avatar rounded-circle mr-3">
                                <img src={product?.img} alt="" />
                              </div>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  <strong>{product?.name}</strong>
                                </span>
                              </div>
                            </div>
                          </td>
    
                          <td>{product?.price}</td>
                          <td>{product?.description.slice(0 , 75)}...</td>
                          <td>
                            <button className="btn btn-primary btn-sm rounded-pill">
                              View Details
                            </button>
                          </td>
                          <td>
                            <div className="d-flex">
                              <button onClick={() => handleDelete(product._id)}
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

export default ManageProducts;