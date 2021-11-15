import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children , ...rest}) => {
    const {user , admin , isLoading} = useAuth();
    if(isLoading){
        return <div class="d-flex align-items-center">
                    <strong className="text-info">Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                // pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;