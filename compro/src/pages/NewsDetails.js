import newsPage1 from '../assets/images/newsPage1.png'
import ScrollAnimation from 'react-animate-on-scroll';
import { useParams } from 'react-router';


export const NewsDetails = () => {

  const params = useParams()

  let oneNews = {
    id: 5,
    img: newsPage1,
    title: "3Traveli expands tax-saving commuter benefits to all it's members and user",
    desc: `3bound of xomponents will help you to prototype design &build much faster bound 
    of xomponents will help you to prototype design &build much faster bound of xomponents 
    will help you to prototype design &build much faster bound of xomponents will help you 
    to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound 
    of xomponents will help you to prototype design &build much faster bound of xomponents 
    will help you to prototype design &build much faster bound of xomponents will help you 
    to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound 
    of xomponents will help you to prototype design &build much faster bound of xomponents 
    will help you to prototype design &build much faster bound of xomponents will help you 
    to prototype design &build much faster, 3bound of xomponents will help you to prototype design &build much faster bound 
    of xomponents will help you to prototype design &build much faster bound of xomponents 
    will help you to prototype design &build much faster bound of xomponents will help you 
    to prototype design &build much faster`
  }

  console.log(params,"<params.id")

  return (
    <>
      <div class="containerNewsDetails">
        <div className="row d-flex justify-content-center">
          <div className="col text-center mt-5">
            <ScrollAnimation animateIn='zoomIn'>
              <p className="headingNewsDetails">
                News and Updates
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row m-auto">
          <div className="col-md-12 cardNewsPage p-0">
            <img className="newsDetailImg m-auto" src={oneNews.img}/>
            <div className="detailNews">
              <p className="dateNews">
                11 February 2021
              </p>
              <h1 className="newsTopTitle">
                {oneNews.title}
              </h1>
              <p className="shortDesc">
                {oneNews.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

