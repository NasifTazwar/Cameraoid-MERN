import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle , setIsLoading} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result=>{
            // setUser(result.user);
            history.push(redirect_url);
        })
        .finally(()=> setIsLoading(false));
    }
    return (
        <div className="login-container pt-4 pb-3">
            <div className="login-container-details container w-50 pb-3">
                <h2 className="py-4">Sign-up with Google First</h2>
                <button onClick={handleGoogleLogin} className="btn login-button"><p className="fs-5 text"><span className="google-icon-resize"><FcGoogle></FcGoogle></span> Continue with Google</p></button>    
            </div> 
        </div>
    );
};

export default Login;