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

  // let oneNews = {
  //   id: 5,
  //   img: newsPage1,
  //   title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
  //   desc: `3bound of xomponents will help you to prototype design &build much faster bound
  //   of xomponents will help you to prototype design &build much faster bound of xomponents
  //   will help you to prototype design &build much faster bound of xomponents will help you
  //   to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound
  //   of xomponents will help you to prototype design &build much faster bound of xomponents
  //   will help you to prototype design &build much faster bound of xomponents will help you
  //   to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound
  //   of xomponents will help you to prototype design &build much faster bound of xomponents
  //   will help you to prototype design &build much faster bound of xomponents will help you
  //   to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound
  //   of xomponents will help you to prototype design &build much faster bound of xomponents
  //   will help you to prototype design &build much faster bound of xomponents will help you
  //   to prototype design &build much faster`
  // }

  // console.log(params,"<params.id")

  return (
    <>
      {oneNews !== undefined && (
        <div class="containerNewsDetails">
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
