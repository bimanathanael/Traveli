import clientsLogo from '../../assets/images/clientsLogo.png';
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
                            <p className="headingPartners">
                                OUR PARTNERS
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <img className="clientLogo" src={clientsLogo}/>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

