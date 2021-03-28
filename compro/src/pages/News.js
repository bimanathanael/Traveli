import { useEffect, useState } from "react";
import parse from "html-react-parser";

export const News = ({ url }) => {
  const [news, setNews] = useState([]);
  // let newsList = []

  useEffect(() => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/newsletter`)
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

  if (news.length !== 0) {
    for (let i = 0; i < news.length; i++) {
      news[i].shortDesc = news[i].content.slice(0, 80);
    }
  }

  return (
    <>
      {news.length !== 0 && (
        <div class="containerNews">
          <div className="row m-auto">
            {news.map((oneNews, idx) => {
              return idx == 0 ? (
                <div className="col-md-12 cardNewsPage pl-5 pt-5">
                  <div className="row">
                    <img
                      className="newsTopImg m-auto"
                      src={oneNews.image_url}
                    />
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
                    <img className="newsBotImg " src={oneNews.image_url} />
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
      )}
    </>
  );
};
