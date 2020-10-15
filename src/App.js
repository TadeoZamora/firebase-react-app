import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from './layouts/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from './context/UserContext';
import AdminLayout from './layouts/Admin';

const App = () =>{
  return (
    <UserContext>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/home" />
        </Switch>
      </BrowserRouter>
    </UserContext>
  )
}

export default App;
