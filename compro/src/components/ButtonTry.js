import React from "react";
import "../pages/members/members.css";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const ButtonTry = ({ feature, title, btnData }) => {
  return (
    <>
      <a href={ btnData && btnData.link}>
        <button type="button" className="btn btn-traveli btn-v8-hero no-mobile">
          <div className="row">
            <div className="col-3 ml-0 pl-0">
              <a className="arrow">
                {" "}
                <ArrowForwardIosOutlinedIcon />{" "}
              </a>
            </div>
            <div className="col btn-font" style={{ color: feature && "#07AED6" }}>
              { btnData != undefined ? btnData.title : "Try it for Free" }
            </div>
          </div>
        </button>
        <button className="mobile-only btn btn-yellow mt-3">
          Try it for Free
        </button>
      </a>
    </>
  );
};

export default ButtonTry;
