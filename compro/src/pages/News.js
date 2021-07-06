import { useEffect, useState } from "react";
import parse from "html-react-parser";

export const News = ({ mainUrl }) => {
  const [news, setNews] = useState([]);
  let allNews = []

  useEffect(() => {
    fetch(`${mainUrl}/newsletter`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        console.log(message, "<<< NEWS")
        setNews(message);
      })
      .catch((err) => {});
  }, []);

  if (news.length !== 0) {
    for (let i = 0; i < news.length; i++) {
      if(news[i].show == true){
        news[i].shortDesc = news[i].content.slice(0, 80);
        allNews.push(news[i])
      }
    }
  }

  const noNews = () => {
    return (
      <div>
        <hr/>
        <hr/>
        <center className="headingOffer mobile-1">
          Currently no new News
        </center>
        <hr/>
        <hr/>
      </div>
    )
  }

  return (
    <>
      <div className="containerNews">
        { allNews.length == 0 && noNews() }
        <div className="row m-auto">
          {allNews.map((oneNews, idx) => {
            return idx == 0 ? (
              <div className="col-md-12 cardNewsPage pl-5 pt-5">
                <div className="col-md-12">
                  <a href={"/news/" + oneNews.timeInNumber}>
                    <img
                      className="newsTopImg m-auto"
                      src={oneNews.image_url}
                    />
                  </a>
                </div>
                <div className="col-md-12">
                  <p className="dateNews">{oneNews.time}</p>
                </div>
                <div className="col-md-12">
                  <h1 className="newsTopTitle">{oneNews.title}</h1>
                </div>
                <div className="col-md-12">
                  <p className="shortDesc">{parse(oneNews.shortDesc)}</p>
                </div>
                <div className="row text-right mt-4">
                  <div className="col">
                    <p className="readMore">
                      <a href={"/news/" + oneNews.timeInNumber}>READ MORE</a>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-4 mt-2 pt-4 pl-4 pr-4 mobile-center">
                <div className="row cardNewsPageBot p-2 mobile-center">
                  <div className="col-md-12">
                    <a href={"/news/" + oneNews.timeInNumber}>
                      <img className="newsBotImg " src={oneNews.image_url} />
                    </a>
                  </div>
                  <div className="col-md-12">
                    <p className="dateNewsBot no-mobile">11 February 2021</p>
                  </div>
                  <div className="col-md-12">
                    <p className="newsBotTitle">{oneNews.title}</p>
                  </div>
                  <div className="col-md-12">
                    <p className="shortDesc">{parse(oneNews.shortDesc)}</p>
                  </div>
                  <div className="col-md-12 text-right mt-2">
                    <p className="readMoreBot">
                      <a href={"/news/" + oneNews.timeInNumber}>READ MORE</a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
