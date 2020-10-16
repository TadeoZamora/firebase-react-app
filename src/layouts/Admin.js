import React,{useEffect,useContext, useState} from 'react';
import routes from '../routes';
import { Route, Switch, Redirect } from "react-router-dom";
import { User } from '../context/UserContext';
import NavbarComponent from '../components/Navbar/Navbar';

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
    const { isAuthenticated,ValidateUserAccess, loading } = useContext(User)
    //with this hook we watch if the user is still logged
    //we have to validate this every time that user change of page
    useEffect(()=>{
      ValidateUserAccess()
    },[props.location.pathname])

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
        </div>
    );
};

export default AdminLayout;