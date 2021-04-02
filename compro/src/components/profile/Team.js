import deny from "../../assets/images/deny.png";
import deka from "../../assets/images/deka.png";
import jefry from "../../assets/images/jefry.png";
import rivan from "../../assets/images/rivan.png";
import pongky from "../../assets/images/pongky.png";
import aafiyah from "../../assets/images/aafiyah.png";
import profileImg2 from "../../assets/images/profileImg2.png";
import cardImage3 from "../../assets/images/cardImage3.png";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollAnimation from "react-animate-on-scroll";

export const Team = () => {
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
        <div className="row mb-5 mt-5 d-flex justify-content-center">
          <div className="col-md-7 text-center">
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
          <div className="row mb-5 mt-5 d-flex justify-content-center pl-5 mobile-no-padding-bottom mobile-no-margin-top">
            <div className="col-md-3 d-flex justify-content-end mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={deny} />
                <div className="descTeam">
                  <p className="teamName ">Deny Fajar</p>
                  <p className="teamPos ">{"Founder & CEO"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={deka} />
                <div className="descTeam">
                  <p className="teamName ">Deka Fandestia</p>
                  <p className="teamPos ">{"Co-Founder"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-start mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={jefry} />
                <div className="descTeam">
                  <p className="teamName ">Jefry L. Lydia</p>
                  <p className="teamPos ">{"Co-Founder"}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft">
          <div className="row mb-5 mt-5 d-flex justify-content-center pl-5 mobile-no-margin-top">
            <div className="col-md-3 d-flex justify-content-end mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={rivan} />
                <div className="descTeam">
                  <p className="teamName ">Rivan</p>
                  <p className="teamPos ">{"Business Development"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={pongky} />
                <div className="descTeam">
                  <p className="teamName ">Pongku Koesasi</p>
                  <p className="teamPos ">{"Sales & Marketing"}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-start mobile-center">
              <div className="teamCard ">
                <img className="teamImg" src={aafiyah} />
                <div className="descTeam">
                  <p className="teamName ">Aafiyah Salam</p>
                  <p className="teamPos ">{"Corporate Secretary"}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
