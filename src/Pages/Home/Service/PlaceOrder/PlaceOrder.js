import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';


const PlaceOrder = () => {
    const {_id} = useParams();
    const {user} = useAuth();

    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('https://nameless-cliffs-17759.herokuapp.com/packages' , {

        })
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const element = services.filter(service => service._id === _id);

    // FORM
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        fetch('https://nameless-cliffs-17759.herokuapp.com/userorders', {
            method: "POST",
            headers: {"content-type": "application/json", },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result=> alert("Successfully Ordered. Please wait for the confirmation message."))
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
                                <h2 className="card-text"><small>{el.price}</small></h2>
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
                                {...register("email", { required: true })}
                                placeholder="Email" 
                                className="p-2 m-2 w-50"
                                defaultValue={user.email}
                            />
                            <br />  
                            <input 
                                {...register("address", { required: true })}
                                placeholder="Address" 
                                className="p-2 m-2 w-50"
                            />
                            <br />  
                            <input 
                                type="number" 
                                {...register("mobile", { required: true })}
                                placeholder="Mobile Number" 
                                className="p-2 m-2 w-50"
                            />
                            <br />  
                            <input
                                {...register("date", { required: true })}
                                placeholder="Date" 
                                defaultValue={new Date()}
                                className="p-2 m-2 w-50"
                            />
                            <br />  
                            <input 
                                {...register("packagename")}
                                placeholder="Package Name" 
                                defaultValue={el.name}
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