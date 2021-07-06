import cardImage1 from '../../assets/images/cardImage1.png';
import cardImage2 from '../../assets/images/cardImage2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import ScrollAnimation from 'react-animate-on-scroll';


export const Why = ({dataDesc, dataTitle}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])


    return (
        <>
            <div className="container-why">
                <div className="row mb-5 mobile-no-margin-bottom">
                    <div className="col text-center">
                        <ScrollAnimation animateIn='zoomIn'>
                            <p className="headingWhyHome mobile-2">
                                WHY CHOOSE TRAVELI
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation className="mobile-center" animateIn='zoomIn' delay="400">
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-md-3 text-center card-style m-4 p-5 mobile-1-padding">
                            <img className="whySectionImg" src={cardImage1}/>
                            <h3 className="headWhy mobile-2 mt-3"> { dataTitle.Title1 } </h3>
                            <div className="descWhy mobile-1">
                                { parse(dataDesc.Description1_RT) }
                            </div>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5 mobile-1-padding">
                            <img className="whySectionImg" src={cardImage2}/>
                            <h3 className="headWhy mobile-2 mt-3"> { dataTitle.Title2 } </h3>
                            <div className="descWhy mobile-1">
                                { parse(dataDesc.Description2_RT) }
                            </div>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5 mobile-1-padding">
                            <img className="whySectionImg" src={cardImage3}/>
                            <h3 className="headWhy mobile-2 mt-3"> { dataTitle.Title3 } </h3>
                            <div className="descWhy mobile-1">
                                { parse(dataDesc.Description3_RT) }
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

