import React from "react";
import { Route, Redirect } from "react-router-dom";
import { jwtVerifyUsername } from "./helpers/jsonwebtoken";

export const ProtectedRouteBeforeLogin = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("access_token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/cms/english"} />;
        }
      }}
    />
  );
};

export const ProtectedRouteAfterLogin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("access_token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export const ProtectedRouteAfterLoginForSuperAdmin = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          localStorage.getItem("access_token") &&
          jwtVerifyUsername(localStorage.getItem("username")) === "admin1223"
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/cms/en" />;
        }
      }}
    />
  );
};
