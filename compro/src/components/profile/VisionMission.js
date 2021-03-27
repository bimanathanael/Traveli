import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const VisionMission = ({ dataVisiMisi }) => {
  const [mobileView, setMobileView] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setMobileView(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-vision-mission">
        <ScrollAnimation animateIn="zoomIn">
          <div className="row d-flex justify-content-center">
            <div className="col-7 mobile-full-100 text-center">
              <p className="headingVM mobile-2">our vision</p>
              <p className="descVM mobile-1">{dataVisiMisi.Visi}</p>
              <br />
              <p className="headingVM mobile-2">our mission</p>
              <p className="descVM mobile-1">{dataVisiMisi.Misi}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
