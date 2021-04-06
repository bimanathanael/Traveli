import React from "react";

// package
import { makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

// assets
import TraveliLogo from "../../assets/images/members/traveli.png";
import BenefitBackground from "../../assets/images/members/benefits-background.png";

const useStyles = makeStyles((themes) => ({
  containerBenefit: {
    marginTop: "7rem",
    marginBottom: "7rem",
  },
  alignPosition: {
    textAlign: "center",
    color: "#07AED6",
  },
  headerBenefit: {
    marginTop: ".5rem",
  },
  benefitMembersContent: {
    backgroundSize: "60rem",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // minHeight: "100vh",
    backgroundPosition: "top",
    backgroundImage: `url(${BenefitBackground})`,
    margin: "2rem auto 0 auto",
    // width: "30rem",
    [themes.breakpoints.down("sm")]: {
      // minHeight: "100vh",
      width: "65%",
      backgroundImage: "none",
      margin: "4rem auto 5rem auto",
      minHeight: "0",
    },
  },
  cardContainer: {
    width: "42rem",
    margin: "0 auto",
    [themes.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContent: {
    marginTop: "1rem",
    width: "13rem",
    minHeight: "13rem",
    border: "none",
    borderRadius: "1rem",
    boxShadow:
      "0px 0px 0px 0px rgba(0, 0, 0, 0.1), 1px 5px 40px 2px rgba(0, 0, 0, 0.1)",
    color: "#07AED6",
  },
  cardTitle: {
    height: "5rem",
  },
  benefitTitle: {
    textAlign: "center",
  },
}));
const BenefitMembers = ({ textHeader, textSubHeader, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.containerBenefit}>
      <div className="justify-content-center">
        <div className={`col-12 ${classes.benefitTitle}`}>
          <ScrollAnimation animateIn="zoomIn">
            <div className={classes.alignPosition}>
              <div className="col-12">
                <img src={TraveliLogo} alt="traveli" width={"100rem"} />
              </div>
              <div className={`${classes.headerBenefit} col-12`}>
                <h2>{textHeader}</h2>
              </div>
              <div className="col-12">
                <h6>{textSubHeader}</h6>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className={`col-12 ${classes.benefitMembersContent}`}>
          <ScrollAnimation animateIn="fadeIn">
            <div className={`row ${classes.cardContainer}`}>
              {data &&
                data.map((item, index) => (
                  <div key={index} className="col-md-4 col-sm-12">
                    <div className={`${classes.cardContent} card`}>
                      <div className="card-body">
                        <div className={classes.cardTitle}>
                          <h6
                            className="card-title"
                            style={{ lineHeight: "1.5" }}
                          >
                            {item.title}
                          </h6>
                        </div>
                        <p
                          style={{ color: "grey", fontSize: ".7rem" }}
                          className="card-text"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default BenefitMembers;
