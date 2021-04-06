import React from "react";
import { makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

const UseStyles = makeStyles((themes) => ({
  cardContainer: {
    margin: "2.5rem auto 2rem auto",
    border: "none",
    maxWidth: "100%",
    background: "background: rgba(76, 175, 80, 0.1)",
    [themes.breakpoints.down("sm")]: {
      margin: "1rem auto",
    },
  },
  displayFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [themes.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cardContent: {
    margin: "1rem 3rem 0rem 3rem",
    width: "22rem",
    minHeight: "15rem",
    border: "none",
    [themes.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "0rem auto",
    },
  },
  cardBody: {
    color: "#07AED6",
    fontSize: "1.5rem !important",
  },
  cardParagraph: {
    color: "grey !important",
    lineHeight: "2",
    fontSize: "1rem !important",
  },
}));

const SupplierWorkTemp = ({
  contentSupplier,
  textTitle,
  textSub,
  left,
  supplier,
}) => {
  const classes = UseStyles();
  return (
    <div className={`col-12 ${classes.cardContainer}`}>
      <div>
        <div className={classes.displayFlexCenter}>
          {left ? (
            <>
              {/* <div className="col-3"> */}
              <ScrollAnimation animateIn="fadeInLeft">
                <div className={`${classes.cardContent}`}>
                  <div className="card-body">
                    <h5 className={`card-title ${classes.cardBody}`}>
                      {textTitle}
                    </h5>
                    <p className={`card-text ${classes.cardParagraph}`}>
                      {textSub}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              {/* </div> */}
              <div className="col-5">
                <ScrollAnimation animateIn="fadeInRight">
                  <img
                    src={contentSupplier}
                    alt="splr-1"
                    width={supplier ? "90%" : "70%"}
                    style={{ margin: "0 auto" }}
                  />
                </ScrollAnimation>
              </div>
            </>
          ) : (
            <>
              <div className="col-5">
                <ScrollAnimation animateIn="fadeInLeft">
                  <img
                    src={contentSupplier}
                    alt="splr-1"
                    width={"90%"}
                    style={{ margin: "0 auto" }}
                  />
                </ScrollAnimation>
              </div>
              <div>
                <ScrollAnimation animateIn="fadeInRight">
                  <div className={`card ${classes.cardContent}`}>
                    <div className="card-body">
                      <h5 className={`card-title ${classes.cardBody}`}>
                        {textTitle}
                      </h5>
                      <p className={`card-text ${classes.cardParagraph}`}>
                        {textSub}
                      </p>
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

export default SupplierWorkTemp;
