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
          <div className="row d-flex">
            <div className="col-11 offset-md-1 mobile-full-100">
              <p className="headingVM mobile-2">our vision</p>
              <p className="descVM mobile-1">{dataVisiMisi.Visi}</p>
              <br />
              <p className="headingVM mobile-2">our mission</p>
              <p className="descVM mobile-1">
                <ul className="mb-05 pl-0">- Secara terus-menerus menciptakan lapangan kerja yang layak dan 
                  berkualitas bagi sebanyak mungkin rakyat Indonesia.</ul>
                <ul className="mb-05 pl-0">- Selalu memastikan pertumbuhan bisnis yang berkelanjutan dan 
                  menguntungkan yang memaksimalkan nilai pemegang saham.</ul>
                <ul className="mb-05 pl-0">- Senantiasa menyediakan solusi-solusi bernilai tambah yang 
                  akan mengoptimalkan kepuasan pelanggan.</ul>
                <ul className="mb-05 pl-0">- Secara aktif terlibat dalam masyarakat sebagai warga korporat 
                  yang baik.</ul>
              </p>
              {/* <p className="descVM mobile-1">{dataVisiMisi.Misi}</p> */}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
