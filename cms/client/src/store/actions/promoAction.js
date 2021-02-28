import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
export const getPromo = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo`, {
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_PROMO",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};

export const getOnePromo = (titleId) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo/${titleId}`, {
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_ONE_PROMO",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};

export const addPromo = (data, setShow) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo`, {
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
          type: "ADD_PROMO",
          payload: message,
        });
        setShow(false);

        Swal.fire({ icon: "success", text: "Success add new Promo!" });
      })
      .catch((err) => {
        console.log("SDSD");
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const deletePromo = (time, history) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo/${time}`, {
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
          type: "DELETE_PROMO",
          payload: time,
        });
        history.push("/promo");
        Swal.fire({ icon: "success", text: "Success delete Promo!" });
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};

export const updatePromo = (
  dataPromo,
  time,
  setShow,
  history,
  setOldPassword,
  setNewPassword,
  setConfirmPassword
) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo/${time}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(dataPromo),
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
          type: "UPDATE_PROMO",
          payload: message,
        });

        Swal.fire({ icon: "success", text: "Success update promo!" });
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

export const uploadImages = (data) => {
  console.log(data, "cek data apa aja");
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/promo/addImage/new`, {
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
        console.log(message, "cek message");
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          Swal.fire({ icon: "error", text: JSON.parse(errorMessage).message });
        });
      });
  };
};
