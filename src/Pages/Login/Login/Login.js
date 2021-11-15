import React from 'react';
import './Login.css';
import loginImg from '../../../images/carousel/login3.png';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [loginData , setLoginData] = useState({});
    const {user , loginUser, isLoading , authError , signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    // const redirect_url = location.state?.from || '/';

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;

        // console.log(field , value);

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email , loginData.password , location , history);
        e.preventDefault();
    }

    const handleGoogleSignIn =()=>{
        // signInWithGoogle(location , history ,redirect_url);
        signInWithGoogle(location , history);
    }


    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex align-items-center">
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
                        <h6 className="mr-4 my-2">Sign in with</h6>
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
                    </div>
                    <form onSubmit={handleLoginSubmit}>
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
                    
                    <div className="row my-3 px-3"> 
                        <button type="submit" className="btn btn-blue text-center">Login</button> 
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
                                Successfully Signed In!
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
                        <small className="font-weight-bold">Don't have an account?  
                        <NavLink to="/register" className="text-danger "> Register</NavLink>
                        </small>
                     </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
    );
};

export default Login;