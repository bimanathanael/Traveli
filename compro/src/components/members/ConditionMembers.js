import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import conditionBackground from "../../assets/images/members/CONDITIONS.png";
import arrowBlue from "../../assets/images/members/arrow_blue.png";
import { makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((themes) => ({
  containerCondition: {
    backgroundImage: `url(${conditionBackground})`,
    padding: "5rem 0",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    minHeight: "110vh",
  },
  conditionHeader: {
    color: "#07AED6",
    marginBottom: "2rem",
    textAlign: "center",
  },
  conditionContent: {
    width: "60%",
    margin: "0rem auto",
    [themes.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  cardContainer: {
    margin: "2rem 0",
  },
  displayFlexCenter: {
    display: "flex",
    alignItems: "center",
  },
  cardArrow: {
    padding: ".2rem",
    backgroundColor: "#F9EE6F",
    borderRadius: ".5rem",
    marginRight: "2rem",
  },
  cardText: {
    padding: "1.5rem 1.5rem 1rem 1.5rem",
    borderRadius: ".5rem",
    backgroundColor: "white",
    width: "100%",
  },
}));

const ConditionMembers = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.containerCondition}>
      <div>
        <div>
          <div className={`col-12 ${classes.conditionHeader}`}>
            <ScrollAnimation animateIn="zoomIn">
              <h2>CONDITIONS</h2>
            </ScrollAnimation>
          </div>
          <div className={classes.conditionContent}>
            <ScrollAnimation animateIn="fadeIn">
              {data &&
                data.map((item, index) => (
                  <div
                    key={index}
                    className={`col-12 ${classes.cardContainer}`}
                  >
                    <div className={classes.displayFlexCenter}>
                      <div className={classes.cardArrow}>
                        <img src={arrowBlue} alt="arrow" />
                        {/* <TiLocationArrow  style={{fontSize: '1.5rem', color: '#07AED6',}}/> */}
                      </div>
                      <div className={classes.cardText}>
                        <p style={{ color: "black", fontSize: "1rem" }}>
                          {item}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionMembers;
