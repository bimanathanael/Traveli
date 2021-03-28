import benefits1 from '../../assets/images/benefits1.png';
import benefits1New from '../../assets/images/benefits1New.gif';
import benefits2 from '../../assets/images/benefits2.png';
import benefits2New from '../../assets/images/benefits2New.gif';
import benefits3New from '../../assets/images/benefits3New.gif';
import benefits4New from '../../assets/images/benefits4New.gif';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ScrollAnimation from 'react-animate-on-scroll';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';


export const Benefits = ({dataTitle, dataDesc}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])

    console.log("masuk benefit", dataTitle)
    return (
        <>
            <div className="container-benefits">
                <div className="row mb-5">
                    <div className="col-md-5 text-center">
                        <ScrollAnimation animateIn="bounceInLeft" animateOut='bounceOutLeft'>
                            <p className="headingBenefit">
                                KEY BENEFITS
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-1 pl-5">
                        <img className="btnArrow prev"  src={prev} />
                        <img className="btnArrow next ml-4" src={next} />
                        {/* <button className="btnArrow prev"> <ArrowBackIcon/> </button>
                        <button className="btnArrow next ml-4"> <ArrowForwardIcon/>  </button> */}
                    </div>
                </div>
                <ScrollAnimation animateIn="bounceInRight" animateOut='bounceOutRight'>
                    <div className="row cardSlider">

                        <div className="col-md-12 cardSliderRoom">
                            <div className="grid-container">
                                <main className="grid-item main">
                                    <div className="items">
                                        <div className="item item0">
                                        </div>
                                        <div className="item item1 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        {dataTitle.Title1}
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        {dataDesc.Description1}
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits1New} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item2 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        {dataTitle.Title2}
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        {dataDesc.Description2}
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits2New} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item3 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        {dataTitle.Title3}
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        {dataDesc.Description3}
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits3New} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item4 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        {dataTitle.Title4}
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        {dataDesc.Description4}
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits4New} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="item item4 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                    </h1>
                                                    <p className="benefitDesc">
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
        </div>
    </>
  )
}

