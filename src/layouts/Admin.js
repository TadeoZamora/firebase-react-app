import React,{useEffect,useContext, useState} from 'react';
import routes from '../routes';
import { Route, Switch, Redirect } from "react-router-dom";
import { User } from '../context/UserContext';
import NavbarComponent from '../components/Navbar/Navbar';
import Notification from '../components/Notification/Notification';
import DbHook from '../hooks/DbHook';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <User.Consumer>
        {
          (value) => (
            <Route
              {...rest}
              render={({ location }) =>
                value.user.isAuthenticated ? (
                  <Component  />
                ) : (
                  <Redirect to='/auth/login' />
                )
              }
            />
  
          )
        }
      </User.Consumer>
    );
  }

const AdminLayout = ({...props}) => {
    const {show,setShow,newOrders} = DbHook()
    const { isAuthenticated,ValidateUserAccess, loading } = useContext(User)
    //with this hook we watch if the user is still logged
    //we have to validate this every time that user change of page
    useEffect(()=>{
      ValidateUserAccess()
    },[props.location.pathname])

    useEffect(()=>{
      if(props.location.pathname === '/admin/panel'){
        newOrders()
      }
    },[])

    const getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <PrivateRoute
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };
    return (
        <div className="container-fluid">
            <NavbarComponent />
            <div className="row">
                <div className="col">
                {
                  loading ? 'Loading...' : 
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect from="*" to="/auth/login" />
                    </Switch>
                }
                </div>
            </div>
            <Notification show={show} setShow={setShow}/>
        </div>
    );
};

export default AdminLayout;