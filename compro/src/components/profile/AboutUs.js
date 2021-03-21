import profileImg1 from '../../assets/images/profileImg1.png';
import profileImg2 from '../../assets/images/profileImg2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';


export const AboutUs = ({data}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])

    return (
        <>
            <div className="container-profile-why">
                <div className="row mb-5">
                    <div className="col text-center">
                        <ScrollAnimation animateIn='zoomIn'>
                            <p className="headingNews">
                                about us
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn='bounceInRight'>
                    <div className="row mb-5">
                        <div className="col-md-5 offset-md-1 pt-5">
                            <h1 className="headingAboutUs">
                                {data.AboutUsTop.Title}
                            </h1>
                            <p className="descAboutUs">
                                {data.AboutUsTop.Description}
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img className="w100 aboutUsImg" src={profileImg1}/>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInLeft'>
                    <div className="row mt-6">
                        <div className="col-md-5 offset-md-1">
                            <img className="w100 aboutUsImg pr-5" src={profileImg2}/>
                        </div>
                        <div className="col-md-5 p4-5">
                            <h1 className="headingAboutUs">
                                {data.AboutUsBottom.Title}

                            </h1>
                            <p className="descAboutUs">
                                {data.AboutUsBottom.Description1}
                                <br/>
                                {data.AboutUsBottom.Description2}
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='zoomIn'>
                    <div className="row mb-4 mt-7 d-flex justify-content-center">
                        <div className="col-md-8 text-center">
                            <h1 className="headingAboutUs">
                                {data.AboutUsCaption.Caption}
                            </h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

