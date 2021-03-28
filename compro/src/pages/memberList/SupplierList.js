import React, { useEffect, useState } from "react";

// assets
import backgroundSupplier from "../../assets/images/background-supplier.png";
import logoOyo from "../../assets/images/oyo-logo.png";
import accorHotelsLogo from "../../assets/images/accor-hotels.png";
import airyRoomLogo from "../../assets/images/airy-rooms.png";
import avisLogo from "../../assets/images/avis.png";
import witaTourLogo from "../../assets/images/wita-tour.png";
import yukTravelLogo from "../../assets/images/yuk-travel.png";
import travelingYuk from "../../assets/images/travelingyuk.png";
import kanoLogo from "../../assets/images/logo kano.png";
import goldenRama from "../../assets/images/golden_rama.png";

// package
import { BsChevronDoubleDown } from "react-icons/bs";
import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";

const useStyles = makeStyles((themes) => ({
  heroSupplier: {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundSupplier})`,
    color: "white",
    paddingTop: "10rem",
  },
  cardContainer: {
    width: "15rem",
    height: "15rem",
    [themes.breakpoints.down("sm")]: {
      width: "10rem",
      height: "10rem",
      margin: "0 auto",
    },
  },
  heroDesc: {
    color: "white",
    maxWidth: "40%",
    margin: "0 auto",
    [themes.breakpoints.down("sm")]: {
      maxWidth: "70%",
    },
  },
}));

const logo = [
  accorHotelsLogo,
  airyRoomLogo,
  avisLogo,
  witaTourLogo,
  yukTravelLogo,
];

const SupplierList = ({ url }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/MembersListSupplier`)
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
          const hero = res.data.message.Hero;
          if (hero) {
            setTitle(hero.Title);
            setDesc(hero.Descripiton);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <div className="members-page">
      <div className={classes.heroSupplier}>
        {title && desc && (
          <>
            <div className="row" style={{ margin: "0 auto" }}>
              <div className="col-12">
                <ScrollAnimation animateIn="zoomIn">
                  <div className="col-12">
                    <h2>{title}</h2>
                  </div>
                  <div className="col-12">
                    <p className={classes.heroDesc}>{desc}</p>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-12">
                <ScrollAnimation animateIn="zoomIn">
                  <div
                    className="col-12"
                    style={{ maxWidth: "50%", margin: "5rem auto" }}
                  >
                    <Slider {...settings}>
                      {logo.map((item, index) => (
                        <div key={index}>
                          <img
                            src={item}
                            alt={`logo${index}`}
                            width={"130rem"}
                            height={"60rem"}
                            style={{
                              margin: "0 auto",
                              padding: ".7rem 1rem .7rem 1rem",
                              background: "rgba(255, 255, 255, 0.8)",
                              borderRadius: ".5rem",
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-12">
              <ScrollAnimation animateIn="bounce" initiallyVisible={true}>
                <div
                  className="col-12"
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{"Discover More"}</span>
                  <BsChevronDoubleDown />
                </div>
              </ScrollAnimation>
            </div>
          </>
        )}
      </div>
      <div
        className="supplier-header"
        style={{
          textAlign: "center",
          maxWidth: "60%",
          margin: "5rem auto",
        }}
      >
        <div className="row">
          <div style={{ margin: "0 auto" }}>
            <ScrollAnimation animateIn="zoomIn">
              <div className="col-12" style={{ color: "#07AED6" }}>
                <h2>{"OUR SUPPLIER"}</h2>
              </div>
              <div className="col-12" style={{ fontSize: ".7rem" }}>
                <p style={{ color: "black" }}>
                  {
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. "
                  }
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="supplier-logo">
        <ScrollAnimation animateIn="fadeInUpBig">
          <div
            className="row"
            style={{ maxWidth: "80%", margin: "0 auto 5rem auto" }}
          >
            {[
              logoOyo,
              accorHotelsLogo,
              avisLogo,
              airyRoomLogo,
              kanoLogo,
              kanoLogo,
              airyRoomLogo,
              witaTourLogo,
              travelingYuk,
              travelingYuk,
              goldenRama,
              goldenRama,
            ].map((item, index) => (
              <div
                key={index}
                className="col-md-3 col-sm-12"
                style={{ margin: "1rem 0" }}
              >
                <div className={`${classes.cardContainer} card text-center`}>
                  <img
                    src={item}
                    width={"80%"}
                    alt="logo-oyo"
                    style={{
                      margin: "auto auto",
                      objectFit: "contain",
                    }}
                  />
                  {/* <div className="card-body">
                                        </div> */}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SupplierList;
