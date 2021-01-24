import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CContainer } from "@coreui/react";
import {
  ProtectedRouteAfterLogin,
  ProtectedRouteAfterLoginForSuperAdmin,
} from "../protectedRoute";
import { Pages, Admin, Section, UpdateCMS, History } from "../pages";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            <ProtectedRouteAfterLogin
              exact
              name="Pages"
              path="/cms/:language/"
              component={Pages}
            />
            <ProtectedRouteAfterLogin
              exact
              name="Section"
              path="/cms/:language/update/:pages"
              component={Section}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/cms/:language/update/:pages/:section"
              name="UpdateCMS"
              component={UpdateCMS}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/history"
              name="History"
              component={History}
            />

            <ProtectedRouteAfterLoginForSuperAdmin
              exact
              path="/admin"
              name="Admin"
              component={Admin}
            />
            <Redirect from="/" to="/cms/en" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
