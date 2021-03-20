import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CContainer } from "@coreui/react";
import {
  ProtectedRouteAfterLogin,
  ProtectedRouteAfterLoginForSuperAdmin,
} from "../protectedRoute";
import {
  Pages,
  Admin,
  Section,
  UpdateCMS,
  History,
  Promo,
  Newsletter,
  PromoDetail,
  Home,
  NewsletterDetail,
} from "../pages";

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
              path="/cms/:language/:pages"
              component={Section}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/cms/:language/:pages/:section/update"
              name="UpdateCMS"
              component={UpdateCMS}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/history"
              name="History"
              component={History}
            />

            <ProtectedRouteAfterLogin
              exact
              name="Promo"
              path="/promo"
              component={Promo}
            />

            <ProtectedRouteAfterLogin
              exact
              name="Newsletter"
              path="/newsletter"
              component={Newsletter}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/promo/detail"
              name="PromoDetail"
              component={PromoDetail}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/newsletter/detail"
              name="NewsletterDetail"
              component={NewsletterDetail}
            />

            <ProtectedRouteAfterLogin
              exact
              path="/"
              name="Home"
              component={Home}
            />
            <ProtectedRouteAfterLoginForSuperAdmin
              exact
              path="/admin"
              name="Admin"
              component={Admin}
            />

            <Redirect from="/" to="/" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
