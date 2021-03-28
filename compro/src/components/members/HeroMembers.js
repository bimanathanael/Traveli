import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import ButtonTry from "../ButtonTry";
import ButtonWatch from "../ButtonWatch";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((themes) => ({
  heroMembers: {
    backgroundSize: "cover",
    backgroundColor: "#07AED6",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "120vh",
    [themes.breakpoints.down("sm")]: {
      minHeight: "100vh",
    },
  },
  headerMembers: {
    paddingLeft: "6rem",
    paddingTop: "10rem",
    color: "white",
    [themes.breakpoints.down("sm")]: {
      paddingLeft: "0",
      paddingRight: "0",
      width: "85%",
      margin: "0 auto",
      paddingTop: "10rem",
    },
  },
  contentMembers: {
    maxWidth: "25rem",
    marginBottom: "2rem",
    [themes.breakpoints.down("sm")]: {
      backgroundColor: `rgb(0,0,0, 0.3)`,
      padding: "1rem",
      borderRadius: "1rem",
    },
  },
  buttonMembers: {
    display: "flex",
    alignItems: "center",
    [themes.breakpoints.down("sm")]: {
      // flexDirection: "column",
      // justifyContent: "center",
      backgroundColor: `rgb(0,0,0, 0.3)`,
      padding: "1rem",
      borderRadius: "1rem",
      maxWidth: "25rem",
      width: "100%",
    },
  },
  footerMembers: {
    maxWidth: "25rem",
    backgroundImage: "linear-gradient(#ebe485, white)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
    position: "absolute",
    marginTop: "-3rem",
    zIndex: 1,
    left: "50%",
    WebkitTransform: "translateX(-50%)",
    transform: "translateX(-50%)",
    [themes.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  footerTypography: {
    textAlign: "center",
    padding: "1rem 1rem 0 1rem",
  },
  heroDesc: {
    marginBottom: "0",
  },
}));

const HeroMembers = ({ backgroundHero, data, footer = true }) => {
  const classes = useStyles();
  return (
    <>
      {data && (
        <>
          <div
            className={classes.heroMembers}
            style={{ backgroundImage: `url(${backgroundHero})` }}
          >
            <ScrollAnimation animateIn="fadeIn">
              <div className={classes.headerMembers}>
                <div>
                  <div className="col-12">
                    <div className={classes.contentMembers}>
                      <h1 className={classes.heroTitle}>{data.title}</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className={classes.contentMembers}>
                      <p className={classes.heroDesc}>{data.description}</p>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className={classes.buttonMembers}>
                      <ButtonTry />
                      <ButtonWatch />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          {footer && (
            <ScrollAnimation animateIn="zoomIn">
              <div className={classes.footerMembers}>
                <h6 className={classes.footerTypography}>{data.footer}</h6>
              </div>
            </ScrollAnimation>
          )}
        </>
      )}
    </>
  );
};

export default HeroMembers;
