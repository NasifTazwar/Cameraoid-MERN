import React from 'react';
import './Register.css';
import loginImg from '../../../images/carousel/login3.png';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Register = () => {
    const [loginData , setLoginData] = useState({});
    const {user , registerUser, isLoading , authError , signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;

        // console.log(field , value);

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){

            alert("Password didn't match!");
            return;
        }
        registerUser(loginData.email , loginData.password ,loginData.name , history);
        /* registerUser(loginData.email , loginData.password); */
        e.preventDefault();
    }
    const handleGoogleSignIn =()=>{
        // signInWithGoogle(location , history ,redirect_url);
        signInWithGoogle(location , history);
    }


    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" style={{height: "85vh"}}>
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="px-3 justify-content-center mt-4 mb-5 border-line"> 
                    </div>
                    <img className="w-50" src={loginImg} alt=""/> 
                </div>
            </div>
            <div className="col-lg-6 border-start">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h6 className="mr-4 my-2">Sign up with</h6>
                        <div className="d-flex justify-content-center">
                            <div onClick={handleGoogleSignIn} className="linkedin text-center me-3 rounded-circle">
                                <div className="fa fa-linkedin"><FaGoogle></FaGoogle></div>
                            </div>
                            <div className="facebook text-center me-3">
                                <div className=""><FaFacebookF></FaFacebookF></div>
                            </div>
                            <div className="twitter text-center me-3">
                                <div className="fa fa-twitter"><FaTwitter></FaTwitter></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div> 
                        <small className="or text-center">Or</small>
                        <div className="line"></div>
                        <h6 className="mb-0 mt-1 text-sm">Create an account</h6>
                    </div>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="row px-3"> 
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">User Name</h6>
                            </label> 
                            <input onBlur={handleOnBlur} className="mb-4" type="text" name="name" placeholder="Enter your name"/> 
                        </div>
                        <div className="row px-3"> 
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> 
                            <input onBlur={handleOnBlur} className="mb-4" type="email" name="email" placeholder="Enter a valid email address"/> 
                        </div>
                        <div className="row px-3"> 
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> 
                            <input onBlur={handleOnBlur} type="password" name="password" placeholder="Enter password"/>
                        </div>
                        <div className="row px-3"> 
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Confirm Password</h6>
                            </label> 
                            <input onBlur={handleOnBlur} type="password" name="password2" placeholder="Confirm password"/>
                        </div>
                        
                        <div className="row my-3 px-3"> 
                            <button type="submit" className="btn btn-blue text-center">Register</button> 
                        </div>
                        {
                            isLoading && 
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true">
                                    
                                </div>
                            </div>
                        }
                        {
                            user?.email && 
                                <Alert variant="success">
                                    Successfully Registerd Your Account!
                                </Alert>
                        }
                        {
                            authError &&
                                <Alert variant="danger">
                                    {authError.slice(9)}
                                </Alert>
                        }
                    </form>
                    <div className="row mb-4 px-3"> 
                        <small className="font-weight-bold">Already have an account?  
                        <NavLink to="/login" className="text-danger "> Login</NavLink>
                        </small>
                     </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
    );
};

export default Register;