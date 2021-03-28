
import parse from 'html-react-parser';
import ScrollAnimation from 'react-animate-on-scroll';


export const News = ({news}) => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
     
    // useEffect(()=> {
    //     function handleResize() {
    //         setMobileView(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)
    // },[])
    const latestNews = news.reverse()

    for(let i = 0 ; i < news.length ; i++){
        news[i].shortDesc = news[i].content.slice(0,80) 
    }

    console.log(latestNews, "<latestNews")


    return (
        <>
            <div className="container-news">
                <div className="row mb-5  d-flex justify-content-center mobile-center">
                    <div className="col-md-9 text-center">
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="headingNews mobile-2">
                                NEWS AND UPDATES
                            </p>
                            <p className="oneRem mobile-1">
                                See the face of mars, anyhow and that will be a rare experience seems to me that 
                                a biew of the heavenly bodies through a fine telescope, as well as a tour round 
                                the world
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mb-5 d-flex justify-content-center">
                        {latestNews.map((item, index) => {
                            console.log(item, "<item")
                            return (
                                index == 0 ? 
                                <a href={ '/news/'+item.timeInNumber }>
                                    <div className="col-md-12 cardNews mb-4 mobile-center">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-5 text-right">
                                                <img className="newsImageTop" src={item.image_url}/>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row pt-5 mobile-1-padding-top">
                                                    <div className="col-md-10">
                                                        <h3 className="newsHeadingHome"> 
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p  className="newsDescHome">
                                                            {parse(item.shortDesc)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                :
                                <div className="col-md-4  mobile-center">
                                    <a href={ '/news/'+item.timeInNumber }>
                                        <div className="row m-0 cardNews pt-4 pb-4 mb-2">
                                            <div className="col-md-12">
                                                <img className="newsImageOther" src={item.image_url}/>
                                            </div>
                                            <div className="col-md-10 offset-md-1 mt-3">
                                                <h3 className="newsSecHeading"> 
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="browseAll"> Browse All </button>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

