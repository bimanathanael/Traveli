import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import parse from "html-react-parser";

export const PromoSection = ({ url }) => {

  let [curr, setCurr] = useState(0);
  let [news, setNews] = useState();
  let promos = [];

  useEffect(() => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/promo`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log(resp);
          throw resp;
        }
      })
      .then(({ message }) => {
        setNews(message);
      })
      .catch((err) => {});
  }, []);

  if (news != undefined) {
    for (var key in news) {
      if (news.hasOwnProperty(key)) {
        promos.push(news[key]);
      }
    }
  }

  const move = (direction) => {
    if (direction == "left" && curr - 1 >= 0) {
      setCurr((curr -= 1));
      console.log("masuk atas");
    } else if (direction == "right" && curr + 1 < promos.length) {
      setCurr((curr += 1));
      console.log("masuk bawah");
    }
  };

  return (
    <>
      {promos.length !== 0 && (
        <div className="container-promo">
          <div className="row">
            <div className="col text-center mt-5">
              <ScrollAnimation animateIn="zoomIn">
                <p className="headingPromo mobile-2">our offers</p>
              </ScrollAnimation>
            </div>
          </div>

          {/* desktop only */}
          <div className="row no-mobile">
            <div className="col-md-1 text-right d-flex align-items-center">
              <div>
                <img className="w-55" src={left} onClick={() => move("left")} />
              </div>
            </div>
            <div className="col-md-10 text-center d-flex align-items-center">
              <div className="col">
                <img className="promoImage" src={promos[curr].image_url} />
              </div>
            </div>
            <div className="col-md-1 text-left d-flex align-items-center">
              <div>
                <img
                  className="w-55"
                  src={right}
                  onClick={() => move("right")}
                />
              </div>
            </div>
          </div>

          {/* mobile only */}
          <div className="row mobile-only">
            <div className="col-md-12 mobile-center mb-2">
              <div>
                <img className="w-55" src={left} onClick={() => move("left")} />
              </div>
              <div>
                <img
                  className="w-55"
                  src={right}
                  onClick={() => move("right")}
                />
              </div>
            </div>
            <div className="col-md-10 text-center d-flex align-items-center">
              <div className="col">
                <img className="promoImage" src={promos[curr].image_url} />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <h5 className="col-md-6 blueTraveli text-center titlePromo">
              {promos[curr].title}
            </h5>
            <p className="col-md-9 text-justify mt-3">
              {parse(promos[curr].content)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
