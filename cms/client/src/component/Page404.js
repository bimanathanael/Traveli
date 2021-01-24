import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CCol, CContainer, CRow } from "@coreui/react";

const Page404 = () => {
  const history = useHistory();
  const backToHome = () => {
    history.push("/");
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-muted float-left">
                The page you are looking for was not found.
              </p>
            </div>
          </CCol>
        </CRow>
        <div style={{ textAlign: "center" }}>
          <Button variant="info" onClick={backToHome()}>
            Back To Home
          </Button>
        </div>
      </CContainer>
    </div>
  );
};

export default Page404;
