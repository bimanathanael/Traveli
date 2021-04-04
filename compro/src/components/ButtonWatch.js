import React from "react";
import "../pages/members/members.css";
import strings from "../assets/constants/strings";
import { ImPlay2 } from "react-icons/im";
import { IconContext } from "react-icons";

const ButtonWatch = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "3rem", color: "white" }}>
        <button type="button" className="btn button-watch">
          <div className="members-button">
            <div>
              <ImPlay2 />
            </div>
            <span style={{ fontSize: "1rem" }}>{strings.buttonWatchVideo}</span>
          </div>
        </button>
      </IconContext.Provider>
    </>
  );
};

export default ButtonWatch;
