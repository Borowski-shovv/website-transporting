import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from '../context/userContext';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { userData } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={props =>
              userData.token ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
        />
    )
}


export default PrivateRoute;