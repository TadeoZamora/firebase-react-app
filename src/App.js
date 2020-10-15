import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from './layouts/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return (<BrowserRouter>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
    </Switch>
  </BrowserRouter>)
}

export default App;
