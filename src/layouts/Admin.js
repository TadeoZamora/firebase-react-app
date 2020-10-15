import React from 'react';
import routes from '../routes';
import { Route, Switch, Redirect } from "react-router-dom";
import { User } from '../context/UserContext';

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

const AdminLayout = () => {
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
            <div className="row">
                <div className="col">
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect from="*" to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;