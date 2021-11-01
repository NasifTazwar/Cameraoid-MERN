import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user , isLoading} = useAuth();

    if(isLoading){
        return <div className="spinner-border p-4 m-5" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        ></Redirect>

        }
        >

        </Route>
    );
};

export default PrivateRoute;