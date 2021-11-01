import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home';
import AddPackage from './Pages/Home/Service/AddPackage/AddPackage';
import PlaceOrder from './Pages/Home/Service/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/placeOrder/:_id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/addNewPackage'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
