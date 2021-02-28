import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ProtectedRouteBeforeLogin } from "./protectedRoute";
import "./scss/style.scss";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
// import TheLayout from "./containers/TheLayout";
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <ProtectedRouteBeforeLogin
              exact
              path="/login"
              name="Login Page"
              component={Login}
            />

            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />

            <Route path="/" name="Home" component={TheLayout} />
            <Redirect to="/" />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
