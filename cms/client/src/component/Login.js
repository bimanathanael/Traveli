import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { loginAdmin } from "../store/actions/userAction";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!username) {
      Swal.fire({ icon: "error", text: "username cannot empty!" });
    } else if (!password) {
      Swal.fire({ icon: "error", text: "password cannot empty!" });
    } else {
      const loginForm = {
        username,
        password,
      };
      dispatch(loginAdmin(loginForm, history, setUsername, setPassword));
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard
                className="p-4"
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <CCardBody>
                  <CForm onSubmit={(e) => loginHandler(e)}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => usernameHandler(e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => passwordHandler(e)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol>
                        <CButton
                          type="submit"
                          style={{
                            backgroundColor: "#3FA1D9",
                            color: "white",
                            width: "100%",
                          }}
                          // color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 d-md-down-none"
                style={{
                  width: "44%",
                  backgroundColor: "#3FA1D9",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Welcome to Traveli CMS</h2>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
