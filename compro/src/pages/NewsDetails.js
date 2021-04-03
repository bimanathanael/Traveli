import newsPage1 from "../assets/images/newsPage1.png";
import ScrollAnimation from "react-animate-on-scroll";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export const NewsDetails = ({ url }) => {
  let [oneNews, setOneNews] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/Newsletter/` + params.id)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log(resp);
          throw resp;
        }
      })
      .then(({ message }) => {
        setOneNews(message);
      })
      .catch((err) => {});
  }, [params]);


  return (
    <>
      {oneNews !== undefined && (
        <div className="containerNewsDetails">
          <div className="row d-flex justify-content-center">
            <div className="col text-center mt-5">
              <ScrollAnimation animateIn="zoomIn">
                <p className="headingNewsDetails">News and Updates</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-12 cardNewsPageDetail p-0">
              <img
                className="newsDetailImg mobile-h-2 m-auto"
                src={oneNews.image_url}
              />
              <div className="detailNews">
                <p className="dateNews">11 February 2021</p>
                <h1 className="newsTopTitle">{oneNews.title}</h1>
                <p className="shortDesc">{parse(oneNews.content)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
