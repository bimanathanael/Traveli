import quote from '../../assets/images/quote.png';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ScrollAnimation from 'react-animate-on-scroll';


export const Testimonials = () => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
     
    // useEffect(()=> {
    //     function handleResize() {
    //         setMobileView(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)
    // },[])
    
    return (
        <>
            <div className="mt-7">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row rowTesti">
                        <div className="col text-center">
                            <p className="headingTesti mobile-2">
                                TESTIMONIALS
                            </p>
                            <p className="subHeadingTestimonials mobile-1">
                                Happy Clients Say 
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div className="container-testimonials">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 cardTesti mobile-center ">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="quote" src={quote}/>
                                </div>
                                <div className="col-md-12 mt-5 f-15">
                                    <p className="oneRem mobile-1">
                                        "i shall see the fae of mars,
                                        i shall see the fae of mars
                                        i shall see the fae of mars,
                                        i shall see the fae of mars"
                                    </p>
                                </div>
                                <div className="col-md-12 mt-3 mobile-center">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img className="w100" src={people1}/>
                                        </div>
                                        <div className="col-md-9 ">
                                            <h2 className="oneHalfRem mobile-2">
                                                Nout Goldstein
                                            </h2>
                                            <p className="oneRem mobile-1">
                                                Apple Manager
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 cardTesti mobile-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="quote" src={quote}/>
                                </div>
                                <div className="col-md-12 mt-5 f-15">
                                    <p className="oneRem mobile-1">
                                        "i shall see the fae of mars,
                                        i shall see the fae of mars
                                        i shall see the fae of mars,
                                        i shall see the fae of mars"
                                    </p>
                                </div>
                                <div className="col-md-12 mt-3 mobile-center">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img className="w100" src={people2}/>
                                        </div>
                                        <div className="col-md-9 ">
                                            <h2 className="oneHalfRem mobile-2">
                                                Nout Goldstein
                                            </h2>
                                            <p className="oneRem mobile-1">
                                                Apple Manager
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

