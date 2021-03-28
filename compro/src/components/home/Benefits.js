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
import ScrollMenu from 'react-horizontal-scrolling-menu';

import {MobileBenefits} from './MobileBenefits'


export const Benefits = ({dataTitle, dataDesc}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth)

    const dataBenefits = [
        {
            title: dataTitle.Title1,
            desc: dataDesc.Description1,
            image: benefits1New,
        },{
            title: dataTitle.Title2,
            desc: dataDesc.Description2,
            image: benefits2New,
        },{
            title: dataTitle.Title3,
            desc: dataDesc.Description3,
            image: benefits3New,
        },{
            title: dataTitle.Title4,
            desc: dataDesc.Description4,
            image: benefits4New,
        }
    ]

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
                <div className="row mb-5 mobile-no-margin">
                    <div className="col-md-5 text-center">
                        <ScrollAnimation animateIn="bounceInLeft" animateOut='bounceOutLeft'>
                            <p className="headingBenefit mobile-2">
                                KEY BENEFITS
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row no-mobile">
                    <div className="col-md-5 offset-md-1 pl-5 arrow-provide">
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
                                        <div className="item no-mobile">
                                        </div>
                                        {
                                            dataBenefits.map( data => {
                                                return (            
                                                <div className="item cardBenefits">
                                                    <div className="row p-5 right0">
                                                        <div className="col-md-7">
                                                            <h1 className="benefitTitle traveliColor mobile-2">
                                                                {data.title}
                                                            </h1>
                                                            <p className="benefitDesc mobile-1">
                                                                {data.desc}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-5 text-center no-mobile">
                                                            <img className="img-fluid responsiveImg2" 
                                                            src={data.image} alt="Carousel 1"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }           
                                        <div className="itemGanjel cardBenefits mobile-inline-block">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor mobile-2">
                                                        {dataBenefits[0].title}
                                                    </h1>
                                                    <p className="benefitDesc mobile-1">
                                                        {dataBenefits[0].desc}
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center no-mobile">
                                                    <img className="img-fluid responsiveImg2" 
                                                    src={dataBenefits[0].image} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
        </div>
        
        <MobileBenefits className="mobile-only" dataBenefits={dataBenefits}/>
    </>
  )
}

