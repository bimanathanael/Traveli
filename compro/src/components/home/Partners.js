import clientsLogo from '../../assets/images/clientsLogo.png';
import sekai from '../../assets/images/sekai.png';
import rodex from "../../assets/images/rodex.png";
import hotelinx from "../../assets/images/hotelinx.png";
import mgBedBank from "../../assets/images/mgBedBank.png";
import voltras from "../../assets/images/voltras.png";
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import ScrollAnimation from 'react-animate-on-scroll';

export const Partners = () => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
     
    // useEffect(()=> {
    //     function handleResize() {
    //         setMobileView(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)
    // },[])
    
    return (
        <>
            <div className="container-partners">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row">
                        <div className="col text-center">
                            <p className="headingPartners mobile-2">
                                OUR PARTNERS
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="row justify-content-center">
                            <div className="col-md-3 text-center mt-2">
                                <a href="http://voltras.co.id" target="__blank">
                                    <img className="clientLogoHome" src={voltras}/>
                                </a>
                            </div>
                            <div className="col-md-3 text-center mt-2">
                                <a href="https://rodextrip.com" target="__blank">
                                    <img className="clientLogoHome" src={rodex}/>
                                </a>
                            </div>
                            <div className="col-md-3 text-center mt-2">
                                <a href="https://sekaitour.com" target="__blank">
                                    <img className="clientLogoHome" src={sekai}/>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-4 text-center mt-2">
                                <a href="https://hotelinx.com" target="__blank">
                                    <img className="clientLogoHome" src={hotelinx}/>
                                </a>
                            </div>
                            <div className="col-md-4 text-center mt-2">
                                <a href="https://mgbedbank.com" target="__blank">
                                    <img className="clientLogoHome" src={mgBedBank}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

