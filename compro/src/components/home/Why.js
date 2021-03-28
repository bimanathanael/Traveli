import cardImage1 from '../../assets/images/cardImage1.png';
import cardImage2 from '../../assets/images/cardImage2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
                <div className="row mb-5">
                    <div className="col text-center">
                        <ScrollAnimation animateIn='zoomIn'>
                            <p className="headingNews">
                                WHY CHOOSE TRAVELI
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateIn='zoomIn' delay="400">
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-md-3 text-center card-style m-4 p-5">
                            <img className="whySectionImg" src={cardImage1}/>
                            <h3 className="headWhy"> { dataTitle.Title1 } </h3>
                            <p className="descWhy">
                                { dataDesc.Description1 }
                            </p>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5">
                            <img className="whySectionImg" src={cardImage2}/>
                            <h3 className="headWhy"> { dataTitle.Title2 } </h3>
                            <p className="descWhy">
                                { dataDesc.Description2 }
                            </p>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5">
                            <img className="whySectionImg" src={cardImage3}/>
                            <h3 className="headWhy"> { dataTitle.Title3 } </h3>
                            <p className="descWhy">
                                { dataDesc.Description3 }
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

