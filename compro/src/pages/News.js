import newsPage1 from '../assets/images/newsPage1.png'
import newsPage2 from '../assets/images/newsPage2.png'
import newsPage3 from '../assets/images/newsPage3.png'

export const News = () => {

  let newsList = [
    {
      id: 0,
      img: newsPage1,
      title: "1Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "1bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },{
      id: 1,
      img: newsPage3,
      title: "2Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "2bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },{
      id: 2,
      img: newsPage3,
      title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "3bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },{
      id: 3,
      img: newsPage3,
      title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "3bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },{
      id: 4,
      img: newsPage2,
      title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "3bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },{
      id: 5,
      img: newsPage2,
      title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
      desc: "3bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster bound of xomponents will help you to prototype design &build much faster"
    },
  ]

  for(let i = 0 ; i < newsList.length ; i++){
    newsList[i].shortDesc = newsList[i].desc.slice(0,80) 
  }

  return (
    <>
      <div class="containerNews">
        <div className="row m-auto">
          { newsList.map((oneNews,idx) => {
            return (
            idx == 0 ? 
                <div className="col-md-12 cardNewsPage pl-5 pt-5">
                  <div className="row">
                    <img className="newsTopImg m-auto" src={oneNews.img}/>
                  </div>
                  <p className="dateNews">
                    11 February 2021
                  </p>
                  <h1 className="newsTopTitle">
                    {oneNews.title}
                  </h1>
                  <p className="shortDesc">
                    {oneNews.shortDesc} . . . . .
                  </p>
                  <div className="row text-right mt-5">
                    <div className="col">
                      <p className="readMore">
                        <a href={ '/news/'+oneNews.id }>
                          READ MORE
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              :
                <div className="col-md-4 mt-2 pt-4 pl-4 pr-4">
                  <div className="row cardNewsPageBot p-2">
                    <img className="newsBotImg " src={oneNews.img}/>
                    <p className="dateNewsBot">
                      11 February 2021
                    </p>
                    <p className="newsBotTitle">
                      {oneNews.title}
                    </p>
                    <p className="shortDesc">
                      {oneNews.shortDesc} . . . . .
                    </p>
                    <div className="col-md-12 text-right mt-2">
                      <p className="readMoreBot">
                        <a href={ '/news/'+oneNews.id }>
                          READ MORE
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

