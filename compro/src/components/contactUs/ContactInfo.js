import profileImg1 from '../../assets/images/profileImg1.png';
import profileImg2 from '../../assets/images/profileImg2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';


export const ContactInfo = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])


    return (
        <>
            <div className="container-contact">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe id="gmap_canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                    src="https://maps.google.com/maps?q=melawai&t=&z=17&ie=UTF8&iwloc=&output=embed">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1 contactSection oneRem">
                        <p className="headingContact">
                            Contact Information
                        </p>
                        <p>
                            Give us a call or drop by anytime, we will answer all enquiries within 24 hours on business days.
                        </p>
                        <br/>
                        <p>
                            <b>PT. Traveli Caraka Nuswantara</b>
                            <br/>
                            Jl. Adityawarman I No.2, RT 6 / RW 2 Melawai,
                            <br/>
                            Kebayoran Baru, Jakarta Selatan,
                            <br/>
                            DKI Jakarta 12160
                            <br/>
                            <br/>
                            <b> Tel. : 021-71793669</b>
                            <br/>
                            <b> Email. : info@traveli.co.id</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

