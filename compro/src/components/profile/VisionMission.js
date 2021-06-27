import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import parse from "html-react-parser";

export const VisionMission = ({ dataVisi, dataMisi }) => {

  const [mobileView, setMobileView] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      { dataVisi && dataMisi && (
        <div className="container-vision-mission">
          <ScrollAnimation animateIn="zoomIn">
            <div className="row d-flex">
              <div className="col-11 offset-md-1 mobile-full-100">
                <p className="headingVM mobile-2">our vision</p>
                <div className="descVM mobile-1">
                  {parse(dataMisi.Misi)}
                </div>
                <br />
                <p className="headingVM mobile-2">our mission</p>
                <div className="descVM mobile-1">
                  {parse(dataVisi.Visi)}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      )}
    </>
  );
};
