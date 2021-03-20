import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

export const getNewsletter = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/newsletter`, {
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_NEWSLETTER",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};

export const getOneNewsletter = (timeInNumber) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/newsletter/${timeInNumber}`, {
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_ONE_NEWSLETTER",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};

export const addNewsletter = (data, setShow) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/newsletter`, {
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
      .then(({ message }) => {
        dispatch({
          type: "ADD_NEWSLETTER",
          payload: message,
        });
        setShow(false);

        Swal.fire({ icon: "success", text: "Success add new Newsletter!" });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const deleteNewsletter = (time, history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/newsletter/${time}`, {
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
          type: "DELETE_NEWSLETTER",
          payload: time,
        });
        history.push("/newsletter");
        Swal.fire({ icon: "success", text: "Success delete Newsletter!" });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const updateNewsletter = (dataNewsletter, time, setShow, history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/newsletter/${time}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(dataNewsletter),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setShow(false);

        dispatch({
          type: "UPDATE_NEWSLETTER",
          payload: message,
        });
        Swal.fire({ icon: "success", text: "Success update Newsletter!" });
        history.push("/newsletter");
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};
