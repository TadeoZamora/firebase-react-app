import React from 'react';
import routes from '../routes';
import { Route, Switch, Redirect } from "react-router-dom";
import { Card } from 'react-bootstrap';

const AuthLayout = () => {
    const getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/auth") {
            return (
              <Route
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

export default AuthLayout;