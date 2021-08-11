import profileImg1 from "../../assets/images/profileImg1.png";
import profileImg2 from "../../assets/images/profileImg2.png";
import cardImage3 from "../../assets/images/cardImage3.png";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollAnimation from "react-animate-on-scroll";
import parse from 'html-react-parser';

export const AboutUs = ({
  dataAboutUsTop,
  dataAboutUsBottom,
  dataAboutUsCaption,
  dataProfile
}) => {
  const [mobileView, setMobileView] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-profile-why">
        <div className="row mb-5">
          <div className="col text-center">
            <ScrollAnimation animateIn="zoomIn">
              <p className="headingNews">about us</p>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="bounceInRight">
          <div className="row mb-5 d-flex justify-content-center">
            <div className="col-md-7">
              <img className="w100 aboutUsImg" src={profileImg1} />
            </div>
          </div>
          <div className="row mb-5 d-flex justify-content-center">
            <div className="col-md-9">
              {/* <h1 className="headingAboutUs">{dataAboutUsTop.Title}</h1> */}
              <div className="headingAboutUs">
                {parse(dataProfile.AboutUs.Title)}
              </div>
              {/* <p className="descAboutUs">{dataAboutUsTop.Description}</p> */}
              <div className="descAboutUs">
                {parse(dataProfile.AboutUs.Description_RT)}
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="bounceInLeft">
          <div className="row mt-6">
            <div className="col-md-5 offset-md-1">
              <img className="w100 aboutUsImg pr-5" src={profileImg2} />
            </div>
            <div className="col-md-5 p-4">
              <h1 className="headingAboutUs">{dataAboutUsBottom.Title}</h1>
              div className="descAboutUs">
                {dataAboutUsBottom.Description1}
                <br />
                {dataAboutUsBottom.Description2}
              </p>
            </div>
          </div>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="zoomIn">
          <div className="row mb-4 mt-7 d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="headingAboutUs">{dataAboutUsCaption.Caption}</h1>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
