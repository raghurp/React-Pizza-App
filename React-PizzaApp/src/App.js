import './App.css';
import React, { Component, Fragment } from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route,  Redirect} from 'react-router-dom';
import { Editprofile } from './components/EditProfile/Editprofile';
import MyProfile from './components/MyProfile/MyProfile';
import User from './components/Layout/User';
import Forgotpassword from './components/ForgotPassword/Forgotpassword';
import ViewEmployee from './components/Employee/ViewEmployee';
import AddEmployee from './components/Employee/AddEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import PizzaSize from './components/ManagePizza/PizzaSize';
import EditSize from './components/ManagePizza/EditSize';
import AddSize from './components/ManagePizza/AddSize'; 

import PizzaCrust from './components/ManagePizza/PizzaCrust';
import EditCrust from './components/ManagePizza/EditCrust';
import AddCrust from './components/ManagePizza/AddCrust';
import AddVegToppings from './components/ManagePizza/AddVegToppings';
import EditVegToppings from './components/ManagePizza/EditVegToppings';
import UploadPizza from './components/UploadPizza/UploadPizza';
import ViewCatalog from './components/UploadPizza/ViewCatalog';
import VegToppings from './components/ManagePizza/VegToppings';
import NonVegToppings from './components/ManagePizza/NonVegToppings';
import AddNonVegToppings from './components/ManagePizza/AddNonVegToppings';
import EditNonVegToppings from './components/ManagePizza/EditNonVegToppings';

import PizzaSides from './components/ManagePizza/PizzaSides/PizzaSides';
import AddSides from './components/ManagePizza/PizzaSides/AddSides';
import EditSide from './components/ManagePizza/PizzaSides/EditSide';
import Beverage from './components/ManagePizza/Beverages/Beverage';
import AddBeverage from './components/ManagePizza/Beverages/AddBeverage';
import EditBeverage from './components/ManagePizza/Beverages/EditBeverage';
import EditUpload from './components/UploadPizza/EditUpload';
import Menus from './components/Customer/Menus/Menus';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Topbar from './components/Customer/Home/Topbar';


export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      (localStorage.getItem('login') && localStorage.getItem('admin') ) ? <Component {...props} /> : <Redirect to="/"/>
  )} />
) 

export const RoleBasedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      (localStorage.getItem('login') && localStorage.getItem('customer') ) ? <Component {...props} /> : <Redirect to="/"/>
  )} />
) 
class App extends Component { 
  render() {
    return ( 
      <div >
        <Router>
        <Route path="/" exact component={Login} /> 
          
          <Fragment > 
          <PrivateRoute path="/user" component ={User} />
          <PrivateRoute path="/user/profile" component={MyProfile} /> 
          <PrivateRoute path="/user/edit"  component={Editprofile} />
          <PrivateRoute path="/user/reset" component={Forgotpassword} />
          <PrivateRoute path="/user/employee" component = {ViewEmployee} />
          <PrivateRoute path="/user/addemployee" component = {AddEmployee} />
          <PrivateRoute path="/user/editemployee/:id" component = {EditEmployee} />
          <PrivateRoute path="/user/editpizza/:id" component = {EditUpload} />
          <PrivateRoute path="/user/pizzasize/" component = {PizzaSize} />
          <PrivateRoute path="/user/editsize/" component = {EditSize} />
          <PrivateRoute path="/user/addsize/" component = {AddSize} /> 
          <PrivateRoute path="/user/pizzacrust/" component = {PizzaCrust} />
          <PrivateRoute path="/user/editcrust/" component = {EditCrust} />
          <PrivateRoute path="/user/addcrust/" component = {AddCrust} />
          <PrivateRoute path="/user/vegToppings/" component = {VegToppings} /> 
          <PrivateRoute path="/user/editvegtoppings/" component = {EditVegToppings} />
          <PrivateRoute path="/user/addvegtoppings/" component = {AddVegToppings} />
          <PrivateRoute path="/user/nonvegToppings/" component = {NonVegToppings} /> 
          <PrivateRoute path="/user/editnonvegtoppings/" component = {EditNonVegToppings} />
          <PrivateRoute path="/user/addnonvegtoppings/" component = {AddNonVegToppings} />
          <PrivateRoute path="/user/upload/" component = {UploadPizza} />
          <PrivateRoute path="/user/viewcatalog/" component = {ViewCatalog} />
          <PrivateRoute path="/user/pizzasides/" component = {PizzaSides} />
          <PrivateRoute path="/user/addsides/" component = {AddSides} />
          <PrivateRoute path="/user/editsides/" component = {EditSide} />
          <PrivateRoute path="/user/beverage/" component = {Beverage} />
          <PrivateRoute path="/user/addbeverage/" component = {AddBeverage} />
          <PrivateRoute path="/user/editbeverage/" component = {EditBeverage} />

          <RoleBasedRoute path="/home" component ={Topbar} />
          <RoleBasedRoute path="/home/menu" component ={Menus } />

          </Fragment>
        </Router>
      
      </div>

    );
  }
}

export default App;
