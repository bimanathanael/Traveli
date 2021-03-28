import React from "react";
import ButtonTry from "../ButtonTry";

import { makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import ArrowBlue from "../../assets/images/members/arrow_blue.png";

const useStyles = makeStyles((theme) => ({
  containerTemp: {
    margin: "5rem auto",
  },
  displayFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      //   margin: "0 auto",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  cardContainer: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
    padding: "1rem",
    margin: "1rem 1rem 0rem 1rem",
    width: "15rem",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      //   width: "10rem:
      margin: "0 auto",
    },
  },
  displayFlexAlignCenter: {
    display: "flex",
    alignItems: "center",
  },
}));

const FeatureMemberTemp = ({ imageContent, title, data, left }) => {
  const classes = useStyles();
  return (
    <div className={`col-12 ${classes.containerTemp}`}>
      <div>
        <div className={classes.displayFlexCenter}>
          {left ? (
            <>
              <div className="col-md-2 col-sm-12">
                <ScrollAnimation animateIn="fadeInLeft">
                  <div className={`card ${classes.cardContainer}`}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#07AED6" }}>
                        {title}
                      </h5>
                      {data &&
                        data.map((item, index) => (
                          <div key={index}>
                            <div className={classes.displayFlexAlignCenter}>
                              <div style={{ alignSelf: "flex-start" }}>
                                {/* <TiLocationArrow
                                  style={{ fontSize: "1rem", color: "#07AED6" }}
                                /> */}
                                <img src={ArrowBlue} alt="arrow" />
                              </div>
                              <div style={{ fontSize: ".7rem" }}>
                                <span>{item}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div style={{ margin: "2rem 0" }}>
                        <ButtonTry feature={true} />
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-sm-12 mt-3 ml-md-5">
                <ScrollAnimation animateIn="fadeInRight">
                  <img src={imageContent} alt="splr-1" width={"100%"} />
                </ScrollAnimation>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 col-sm-12 mt-5">
                <ScrollAnimation animateIn="fadeInLeft">
                  <img src={imageContent} alt="splr-1" width={"100%"} />
                </ScrollAnimation>
              </div>
              <div className="col-md-5 col-sm-12">
                <ScrollAnimation animateIn="fadeInRight">
                  <div className={`card ${classes.cardContainer}`}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#07AED6" }}>
                        {title}
                      </h5>
                      {data &&
                        data.map((item, index) => (
                          <div key={index}>
                            <div className={classes.displayFlexAlignCenter}>
                              <div style={{ alignSelf: "flex-start" }}>
                                {/* <TiLocationArrow
                                  style={{ fontSize: "1rem", color: "#07AED6" }}
                                /> */}
                                <img src={ArrowBlue} alt="arrow" />
                              </div>
                              <div style={{ fontSize: ".7rem" }}>
                                <span>{item}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div style={{ margin: "2rem 0" }}>
                        <ButtonTry feature={true} />
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureMemberTemp;
