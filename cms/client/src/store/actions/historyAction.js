import { Redirect } from "react-router-dom";
export const getHistory = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/history/`, {
      headers: { access_token: localStorage.getItem("access_token") },
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
          type: "SET_HISTORY",
          payload: message,
        });
      })
      .catch((err) => {
        <Redirect to="/" />;
      });
  };
};
