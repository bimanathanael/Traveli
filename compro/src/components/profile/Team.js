import deny from "../../assets/images/deny.png";
import deka from "../../assets/images/deka.png";
import jefry from "../../assets/images/jefry.jpg";
import rivan from "../../assets/images/rivan.png";
import pongky from "../../assets/images/pongky.png";
import aafiyah from "../../assets/images/aafiyah.png";
import profileImg2 from "../../assets/images/profileImg2.png";
import cardImage3 from "../../assets/images/cardImage3.png";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollAnimation from "react-animate-on-scroll";

export const Team = ({ profileList }) => {
  const [mobileView, setMobileView] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-profile-team">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="text-center">
            <ScrollAnimation animateIn="zoomIn">
              <p className="headingTeam mobile-2">our team</p>
              <p className="descTeam mobile-1">
                TCN didukung oleh para tenaga ahli yang berpengalaman di bisnis
                perjalanan dan kepariwisataan, termasuk tim pengembang ecommerce
                yang handal serta dilengkapi dengan tim layanan pengguna yang
                siap melayani 24/7.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="bounceInRight">
          <div className="row mb-5 d-flex justify-content-center mobile-no-padding-bottom mobile-no-margin-top">
            {profileList && profileList.map((item, index) => (
                <div className="col-md-4 mb-4 d-flex justify-content-end mobile-center">
                  <div className="teamCard ">
                    <img className="teamImg" src={item.image_url} />
                    <div className="descTeam">
                      <p className="teamName ">{item.name}</p>
                      <p className="teamPos ">{item.job}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
