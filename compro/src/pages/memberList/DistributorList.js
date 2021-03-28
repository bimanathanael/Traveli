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
    paddingTop: "10rem",
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
const DistributorList = ({ url }) => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [subDesc, setSubDesc] = useState(null);
  const [openBtn, setOpenBtn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [triggerSub, setTriggerSub] = useState(`wholesaler`);
  const [colorButtonOne, setColorButtonOne] = useState("yellow");
  const [colorButtonTwo, setColorButtonTwo] = useState("white");
  const [colorButtonThree, setColorButtonThree] = useState("white");

  const [oneClicked, setOneClicked] = useState(false);
  const [twoClicked, setTwoClicked] = useState(false);
  const [threeClicked, setThreeClicked] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}/MembersListWholesaler`)
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
          if (triggerSub === "wholesaler") {
            const wholesalerList = res.data.message.WholesalerList;
            if (wholesalerList) {
              setSubTitle(wholesalerList.Title);
              setSubDesc(wholesalerList.Description);
            }
          }

          if (triggerSub === "corporate") {
            const corporateList = res.data.message.CorporateList;
            if (corporateList) {
              setSubTitle(corporateList.Title);
              setSubDesc(corporateList.Description);
            }
          }

          if (triggerSub === "agency") {
            const agencyList = res.data.message.AgencyList;
            if (agencyList) {
              setSubTitle(agencyList.Title);
              setSubDesc(agencyList.Description);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [triggerSub, url]);

  const openButton = (index) => {
    setCurrentIndex(index);
    setOpenBtn(true);
  };

  //   const handleCloseButton = () => {
  //     setCurrentIndex(null);
  //     setOpenBtn(false);
  //   };

  const handleButtonOne = () => {
    setColorButtonOne("yellow");
    setColorButtonTwo("white");
    setColorButtonThree("white");
    setOneClicked(true);
    setTwoClicked(false);
    setThreeClicked(false);
    setTriggerSub("wholesaler");
  };

  const handleButtonTwo = () => {
    setColorButtonOne("white");
    setColorButtonTwo("yellow");
    setColorButtonThree("white");
    setOneClicked(false);
    setTwoClicked(true);
    setThreeClicked(false);
    setTriggerSub("agency");
  };

  const handleButtonThree = () => {
    setColorButtonOne("white");
    setColorButtonTwo("white");
    setColorButtonThree("yellow");
    setOneClicked(false);
    setTwoClicked(false);
    setThreeClicked(true);
    setTriggerSub("corporate");
  };

  return (
    <div className="members-page">
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
              <div style={{ margin: "10rem auto 0 auto" }}>
                <ScrollAnimation animateIn="fadeIn">
                  <div
                    style={{
                      width: "90%",
                      textAlign: "center",
                      margin: "0 auto",
                    }}
                  >
                    <h6>{`PILIH MEMBER KAMI SEBAGAI PARENT UNTUK USAHA ANDA`}</h6>
                  </div>
                  <div
                    className="button-container"
                    style={{ backgroundColor: "white" }}
                  >
                    <Button
                      style={{
                        backgroundColor: colorButtonOne,
                        borderRadius: "10rem",
                        color: oneClicked ? "#07AED6" : "#707070",
                      }}
                      className="button-temp"
                      onClick={handleButtonOne}
                    >
                      {`WHOLESALER LIST`}
                    </Button>
                    <Button
                      style={{
                        backgroundColor: colorButtonTwo,
                        borderRadius: "10rem",
                        color: twoClicked ? "#07AED6" : "#707070",
                      }}
                      className="button-temp"
                      onClick={handleButtonTwo}
                    >
                      {`AGENCY LIST`}
                    </Button>
                    <Button
                      style={{
                        backgroundColor: colorButtonThree,
                        borderRadius: "10rem",
                        color: threeClicked ? "#07AED6" : "#707070",
                      }}
                      className="button-temp"
                      onClick={handleButtonThree}
                    >
                      {`CORPORATE LIST`}
                    </Button>
                  </div>
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
              <h2>{subTitle}</h2>
            </div>
            <div className="col-12" style={{ fontSize: ".7rem" }}>
              <p style={{ color: "black" }}>{subDesc}</p>
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
                          padding: "0 1rem 0 0",
                          //   fontSize: ".5rem",
                          color: "white",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p
                        style={{
                          width: "50%",
                          padding: "0 2rem 0 0",
                          //   fontSize: ".5rem",
                          color: "white",
                        }}
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem
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
                    <span style={{ fontWeight: "bold" }}>
                      Select Parent Company
                    </span>
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
