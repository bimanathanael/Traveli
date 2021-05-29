import profileImg1 from "../../assets/images/profileImg1.png";
import profileImg2 from "../../assets/images/profileImg2.png";
import cardImage3 from "../../assets/images/cardImage3.png";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollAnimation from "react-animate-on-scroll";

export const AboutUs = ({
  dataAboutUsTop,
  dataAboutUsBottom,
  dataAboutUsCaption,
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
              <h1 className="headingAboutUs">
                Traveli Hadir sebagai Solusi.
                <br/>
                Kita Ada Untuk Mendukung Anda.  
              </h1>
              {/* <p className="descAboutUs">{dataAboutUsTop.Description}</p> */}
              <p className="descAboutUs">

              Di mulai pada tahun 2020, kami menciptakan sebuah platform yang bernama Traveli, 
              dimana platform ini dapat menghubungkan seluruh peminat dan pelaku bisnis di 
              industri kepariwisataan bisa terkoneksi dengan mudah dan tidak perlu banyak 
              biaya.
              <br/>
              <br/>
              Dengan Traveli, semua orang bisa menjadi pelaku bisnis pariwisata (supplier, 
              wholesaler, reseller) dan menjalankan bisnisnya secara digital. Hal 
              ini untuk mendorong transformasi bisnis travel agent dan jaringannya yang 
              dijalankan secara konvensional menuju Online Travel Agent (OTA). Traveli percaya 
              dengan membangun relasi sinergis antar para penggunanya mulai dari pemasok, 
              penjual, dan pembeli dan semuanya terintegrasi dalam sistem maka industry 
              kepariwisataan di Indonesia akan berkembang dengan cepat dan sehat.
              </p>
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
              <p className="descAboutUs">
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
