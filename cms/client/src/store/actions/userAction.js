import { Redirect } from "react-router-dom";
const {
  jwtVerifyToken,
  jwtSetUsername,
} = require("../../helpers/jsonwebtoken");

const Swal = require("sweetalert2");

export const loginAdmin = (data, history, setUsername, setPassword) => {
  return (dispatch, getState) => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((result) => {
        localStorage.setItem("access_token", result.access_token);
        const dataFromJwt = jwtVerifyToken(result.access_token);
        const jwtUsername = jwtSetUsername(dataFromJwt.username);
        localStorage.setItem("username", jwtUsername);
        setUsername("");
        setPassword("");

        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          if (JSON.parse(errorMessage).message) {
            Swal.fire({
              icon: "error",
              text: JSON.parse(errorMessage).message,
            });
          }
        });
      });
  };
};

export const getAdmin = () => {
  return (dispatch, getState) => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/listAdmin`, {
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_ADMIN",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};

export const addAdmin = (
  data,
  history,
  setShow,
  setUsername,
  setPassword,
  setConfirmPassword
) => {
  return (dispatch, getState) => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((result) => {
        dispatch({
          type: "ADD_ADMIN",
          payload: result.message,
        });
        setShow(false);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        history.push("/admin");
        Swal.fire({ icon: "success", text: "Success add new Admin!" });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const deleteAdmin = (adminId) => {
  return (dispatch, getState) => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/${adminId}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((result) => {
        dispatch({
          type: "DELETE_ADMIN",
          payload: adminId,
        });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const updateAdmin = (
  data,
  history,
  setShow,
  setOldPassword,
  setNewPassword,
  setConfirmPassword
) => {
  return (dispatch, getState) => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/${data.username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((result) => {
        setShow(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        history.push("/admin");
        Swal.fire({ icon: "success", text: "Success update password!" });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          if (JSON.parse(errorMessage).message) {
            Swal.fire({
              icon: "error",
              text: JSON.parse(errorMessage).message,
            });
          }
        });
      });
  };
};
