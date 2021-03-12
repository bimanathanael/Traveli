import news1 from '../../assets/images/news1.png';
import news2 from '../../assets/images/news2.png';
import news3 from '../../assets/images/news3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ScrollAnimation from 'react-animate-on-scroll';


export const News = () => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
     
    // useEffect(()=> {
    //     function handleResize() {
    //         setMobileView(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)
    // },[])
    const latestNews = [
        {
            image: news3,
            heading: "What looked like a small patch of purpble grass",
            desc: "Truely it was a great juourney, anmd in it i met with amnu, who to know was to love ruely it was a great juourney, anmd in it i met wi"
        },
        {
            image: news2,
            heading: "Abouve five feet square, was moving accross",
            desc: " was a great juourney, anmd  it was a great juourney, anmd i was a great juourney, anmd  to know was to love"
        },
        {
            image: news3,
            heading: "What looked like a small patch of purpble grass",
            desc: "Truely it was a great juourney, anmd in it i met with amnu, who to know was to love"
        },
        {
            image: news2,
            heading: "Abouve five feet square, was moving accross",
            desc: " was a great juourney, anmd  it was a great juourney, anmd i was a great juourney, anmd  to know was to love"
        },
    
    ]


    return (
        <>
            <div className="container-news">
                <div className="row mb-5">
                    <div className="col text-center">
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="headingNews">
                                NEWS AND UPDATES
                            </p>
                            <p className="f-15">
                                See the fave of mars See the fave of mars See the fave of mars
                                See the fave of mars See the fave of mars See the fave of mars
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mb-5 d-flex justify-content-center">
                        {latestNews.map((item, index) => {
                            return (
                                index == 0 ? 
                                    <div className="col-md-12 cardNews mb-4">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-5 text-right">
                                                <img className="newsImageTop" src={item.image}/>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row pt-5">
                                                    <div className="col-md-8">
                                                        <h3> 
                                                            {item.heading}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <div className="col-md-4">
                                        <div className="row m-0 cardNews pt-4 pb-4">
                                            <div className="col-md-12">
                                                <img className="newsImageOther" src={item.image}/>
                                            </div>
                                            <div className="col-md-10 offset-md-1 mt-3">
                                                <h3> 
                                                    {item.heading}
                                                </h3>
                                            </div>
                                        </div>
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

