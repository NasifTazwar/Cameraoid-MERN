import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';

const PlaceOrder = () => {
    const {_id} = useParams();
    const {user} = useAuth();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-refuge-91293.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const element = products.filter(product => product._id === _id);

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        fetch('https://lit-refuge-91293.herokuapp.com/userorders', {
            method: "POST",
            headers: {"content-type": "application/json", },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result=> alert("Successfully Ordered. Please wait for the confirmation message."))
        // console.log(data);
        reset();
    };
    return (
        <div className="container pt-4 place-order-container">
            {
                element.map(el=>
                    <div key={el._id} className="details-container container-fluid">
                    <div className="card mb-3 card-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                            <img className="img-fluid" src={el.img} alt="..."/>
                            </div>
                            <div className="col-lg-6 col-md-4">
                            <div className="card-body">
                                <h1 className="card-title">{el.name}</h1>
                                <h3 className="card-text">{el.description}</h3>
                                <br />  
                                <h2 className="card-text text-danger"><small>${el.price}</small></h2>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Fill up the form to confirm your order.</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                {...register("name", { required: true, maxLength: 20 })}
                                placeholder="Name" 
                                className="p-2 m-2 w-50"
                                defaultValue={user.displayName}
                            />
                            <br />  
                            <input 
                                readOnly
                                {...register("email", { required: true })}
                                placeholder="Email" 
                                className="p-2 m-2 w-50"
                                defaultValue={user.email}
                                // disabled
                            />
                            <br />  
                            <input 
                                {...register("address", { required: true })}
                                placeholder="Address" 
                                className="p-2 m-2 w-50"
                            />
                            <br />  
                            <input 
                                type="tel"
                                {...register("mobile", { required: true })}
                                placeholder="Mobile Number" 
                                className="p-2 m-2 w-50"
                            />
                            <br />  
                            <input
                                readOnly
                                {...register("date", { required: true })}
                                placeholder="Date" 
                                defaultValue={new Date().toLocaleDateString()}
                                className="p-2 m-2 w-50"
                                // disabled
                            />
                            <br />  
                            <input 
                                readOnly
                                {...register("productname")}
                                placeholder="Product Name" 
                                defaultValue={el.name}
                                // disabled
                                className="p-2 m-2 w-50"
                            />
                            <input 
                                readOnly
                                {...register("price")}
                                placeholder="Product Name" 
                                defaultValue={el.price}
                                // disabled
                                className="p-2 m-2 w-50"
                            />
                            <br />
                            <input type="submit" className="btn btn-dark w-25" />
                        </form>
                    </div>

                    </div>
                    
                )
            }
        </div>
    );
};

export default PlaceOrder;