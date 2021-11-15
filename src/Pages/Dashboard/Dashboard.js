import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import DashboardHome from "./DashboardHome/DashboardHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();

  return (
    <div className="container-fluid" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row me-auto">
        <nav
          id="sidebarMenu"
          className="col-md-2 col-lg-2 d-sm-block border-bottom"
          style={{backgroundColor:"#FFFFFF"}}
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-md-column flex-lg-column align-items-start">
            <li className="nav-item">
                <NavLink
                  to={`${url}`}
                  className="nav-link active"
                  aria-current="page"
                >
                  <span data-feather="home"></span>Dashboard
                </NavLink>
              </li>
              {
                admin ?
                <>
                <li className="nav-item">
                  <NavLink to={`${url}/makeadmin`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Make Admin
                  </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink to={`${url}/manageallorder`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Manage All Orders
                  </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink to={`${url}/manageproducts`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Manage Products
                  </NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink to={`${url}/addproduct`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Add Products
                  </NavLink>
                </li> 
                </>
                :
                <>
                  <li className="nav-item">
                <NavLink to={`${url}/myorders`} className="nav-link">
                  <span data-feather="file"></span>My Orders
                </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={`${url}/payment`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Payment
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={`${url}/addreviews`} className="nav-link">
                    <span data-feather="shopping-cart"></span>Add Review
                  </NavLink>
                </li>
                
                </>
              }
            </ul>
          </div>
        </nav>

        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Share
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Export
                </button>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
              >
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <div className="container-fluid my-orders-container" style={{height: "100vh" , overflow: "scroll"}} >
            <Switch>
              <PrivateRoute exact path={path}>
                <DashboardHome></DashboardHome>
              </PrivateRoute>
              <PrivateRoute path={`${url}/myorders`}>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path={`${url}/payment`}>
                <Payment></Payment>
              </PrivateRoute>
              <PrivateRoute path={`${url}/addreviews`}>
                <Review></Review>
              </PrivateRoute>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manageallorder`}>
                <ManageAllOrder></ManageAllOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
