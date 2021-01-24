import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
const { jwtVerifyUsername } = require("../../helpers/jsonwebtoken");

export const getEnglish = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/en/`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_ENGLISH",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/cms/en" />;
      });
  };
};

export const getEnglishByPages = (pages = "homepage", history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/en/${pages}`, {
      method: "GET",
      mode: "cors",
      headers: {
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
      .then(({ message }) => {
        dispatch({
          type: "SET_ENGLISH_UPDATE",
          payload: message,
        });
      })
      .catch((err) => {
        err.status === 404 && history.push("/cms/en");
      });
  };
};

export const updateEnglish = (paramPages, data, history, paramSection) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/en/${paramPages}`, {
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
      .then(({ message }) => {
        dispatch({
          type: "UPDATE_ENGLISH",
          payload: message,
        });
        dispatch({
          type: "SET_ENGLISH_UPDATE",
          payload: message,
        });
        const setHistory = {
          username: jwtVerifyUsername(localStorage.getItem("username")),
          pages: paramPages,
          section: paramSection,
        };

        return fetch(`http://localhost:3000/history`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(setHistory),
        });
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
          type: "ADD_HISTORY",
          payload: result.message,
        });
        Swal.fire({
          icon: "success",
          text: "Success update!",
        });
        history.push("/cms/en");
      })

      .catch((err) => {
        <Redirect to="/cms/en" />;
      });
  };
};
