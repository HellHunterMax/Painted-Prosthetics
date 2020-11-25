import React from 'react';
import { UserService } from "../helpers/user-service";
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        UserService.IsAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)