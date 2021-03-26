import React, { useState, useEffect } from "react";

// assets
import backgroundDistributor from "../../assets/images/background-distributor.png";
import yukTravel from "../../assets/images/yuk-travel.png";
import backgroundCompany from "../../assets/images/background-company.png";
import logoOyo from "../../assets/images/oyo-logo.png";
import travelingYuk from "../../assets/images/travelingyuk.png";
import kanoLogo from "../../assets/images/logo kano.png";
import goldenRama from "../../assets/images/golden_rama.png";

// package
import { makeStyles, IconButton, Button } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import Slider from "react-slick";

const useStyles = makeStyles((themes) => ({
  heroDistributor: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), 90%, white),url(${backgroundDistributor})`,
    color: "white",
    paddingTop: "7rem",
  },
  companyBackground: {
    backgroundImage: `url(${backgroundCompany})`,
    minHeight: "120vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderTopRightRadius: "2rem",
    borderBottomRightRadius: "2rem",
    [themes.breakpoints.down("sm")]: {
      minHeight: "50vh",
    },
  },
  companyDetail: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    paddingTop: "50%",
    paddingBottom: "50%",
    width: "90%",
    // margin: "0",
    paddingLeft: "2rem",
    borderTopRightRadius: "2rem",
    borderBottomRightRadius: "2rem",
  },
  sliderHero: {
    maxWidth: "30%",
    margin: "2rem auto 0 auto",
    [themes.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  sliderImage: {
    objectFit: "contain",
    margin: "0 auto",
    padding: ".7rem 1rem .7rem 1rem",
    background: "rgba(255, 255, 255)",
    borderRadius: ".5rem",
    boxShadow: "10px 10px 0px 0px rgba(255, 255, 255, 0.1)",
  },
  headerWholesaler: {
    textAlign: "center",
    maxWidth: "50%",
    margin: "5rem auto 4rem auto",
    [themes.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
  contentCompany: {
    margin: "0 auto 0 auto",
    display: "flex",
    width: "90%",
    flexDirection: "column",
    [themes.breakpoints.down("sm")]: {
      //   maxWidth: "90%",
    },
  },
  cardCompany: {
    width: "13rem",
    height: "13rem",
    [themes.breakpoints.down("sm")]: {
      width: "6rem",
      height: "6rem",
    },
  },
  buttonParent: {
    backgroundColor: "#F7EC18",
    marginBottom: ".5rem",
    fontSize: ".7rem",
    [themes.breakpoints.down("sm")]: {
      fontSize: ".3rem",
    },
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "space-around",
    [themes.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: ".3rem",
    },
  },
}));
const DistributorList = () => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [openBtn, setOpenBtn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://pacific-hamlet-79377.herokuapp.com/id/MembersListWholesaler`
      )
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
          const hero = res.data.message.Hero;
          if (hero) {
            setTitle(hero.Title);
            setDesc({
              descOne: hero.Description1,
              descTwo: hero.Description2,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openButton = (index) => {
    setCurrentIndex(index);
    setOpenBtn(true);
  };

  //   const handleCloseButton = () => {
  //     setCurrentIndex(null);
  //     setOpenBtn(false);
  //   };

  return (
    <div className="">
      <div className={classes.heroDistributor}>
        {title && desc && (
          <>
            <div className="row" style={{ width: "90%", margin: "0 auto" }}>
              <div className="col-md-5 col-sm-12" style={{ margin: "0 auto" }}>
                <ScrollAnimation animateIn="fadeInLeft">
                  <h1 style={{ marginBottom: "2rem" }}>{title}</h1>
                  <div style={{ fontSize: ".8rem" }}>
                    <p style={{ color: "white" }}>{desc.descOne}</p>
                    <p style={{ color: "white" }}>{desc.descTwo}</p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className={`col-md-8 col-sm-12 ${classes.sliderHero}`}>
                <ScrollAnimation animateIn="fadeInRight">
                  <Slider {...settings}>
                    {[yukTravel, travelingYuk].map((item, index) => (
                      <div key={index}>
                        <img
                          src={item}
                          alt={`logo-travel`}
                          width={"230rem"}
                          height={"80rem"}
                          className={classes.sliderImage}
                        />
                      </div>
                    ))}
                  </Slider>
                </ScrollAnimation>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={classes.headerWholesaler}>
        <div className="row">
          <ScrollAnimation animateIn="zoomIn">
            <div
              className="col-12"
              style={{ color: "#07AED6", marginBottom: "1rem" }}
            >
              <h2>{"THE WHOLESALER"}</h2>
            </div>
            <div className="col-12" style={{ fontSize: ".7rem" }}>
              <p>
                {
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. "
                }
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div style={{ margin: "5rem 0 2rem 0" }}>
        <div className="row">
          <div className="col-6">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className={`col-12 ${classes.companyBackground}`}>
                {openBtn && (
                  <div className={classes.companyDetail}>
                    <div
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      <h5>Hello</h5>
                    </div>
                    <div className={classes.paragraphContainer}>
                      <p
                        style={{
                          width: "50%",
                          //   fontSize: ".5rem",
                          color: "white",
                        }}
                      >
                        sokdpaofkeop kfopakaoasda;a kasd;ka ;askd;akw'dkp[ado
                        ;ad;adlawppkoakdwopdk
                      </p>
                      <p
                        style={{
                          width: "50%",
                          //   fontSize: ".5rem",
                          color: "white",
                        }}
                      >
                        asdkjaiojawoeja wopejwapoej wapoejwaopej
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-6">
            <ScrollAnimation animateIn="fadeInRight">
              <div className={`${classes.contentCompany}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h6>Select Parent Company</h6>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <IconButton size="small">
                        <ChevronLeftIcon style={{ color: "black" }} />
                      </IconButton>
                      <IconButton size="small">
                        <ChevronRightIcon style={{ color: "black" }} />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {[
                    logoOyo,
                    yukTravel,
                    travelingYuk,
                    kanoLogo,
                    goldenRama,
                    goldenRama,
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 col-sm-6">
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          margin: ".5rem 0",
                        }}
                        onClick={() => openButton(index)}
                      >
                        <div
                          className={`card text-center ${classes.cardCompany}`}
                        >
                          <img
                            src={item}
                            width={
                              openBtn && currentIndex === index ? "70%" : "90%"
                            }
                            alt="logo-oyo"
                            style={{
                              objectFit: "contain",
                              margin: "auto auto",
                            }}
                          />
                          {openBtn && currentIndex === index && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "1rem auto",
                              }}
                            >
                              <Button
                                className={classes.buttonParent}
                                size="small"
                                variant="contained"
                                // fullWidth={true}
                              >
                                set as parent
                              </Button>
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorList;
