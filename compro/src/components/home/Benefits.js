import benefits1 from '../../assets/images/benefits1.png';
import benefits2 from '../../assets/images/benefits2.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ScrollAnimation from 'react-animate-on-scroll';



export const Benefits = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])


    return (
        <>
            <div className="container-benefits">
                <div className="row mb-5">
                    <div className="col text-center">
                        <ScrollAnimation animateIn="bounceInLeft" animateOut='bounceOutLeft'>
                            <p className="headingBenefit">
                                KEY BENEFITS
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-3 offset-md-5">
                        <button className="btnArrow prev"> <ArrowBackIcon/> </button>
                        <button className="btnArrow next ml-4"> <ArrowForwardIcon/>  </button>
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
                                                        PEMBAYARAN REAL-TIME
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        Dengan sistem yang sudah online dan terintegrasi, anda bisa
                                                        langsung menikmati hasil transaksi anda secara real-time.
                                                        Kalau bisa langsung, buar apa menunggu?
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits1} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item2 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        KUSTOMISASI WEBSITE SESUAI KEINGINAN ANDA
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        Anda memiliki kebebasan untuk memakai domain dan logo anda sendiri
                                                        pada website yang disediakan Traveli, Sehingga identitas brand anda bis dikenal
                                                        dengan mudah
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits2} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item3 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        TANPA BIAYA DI MUKA ATAU INVESTASI APAPUN
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        Di Traveli, anda tidak perlu repot-repot memikirkan berapa modal
                                                        yang diperlukan untuk menjadi member. Cukup registrasi dan anda langsung
                                                        dapat bertransaksi
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits1} alt="Carousel 1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item item4 cardBenefits">
                                            <div className="row p-5 right0">
                                                <div className="col-md-7">
                                                    <h1 className="benefitTitle traveliColor">
                                                        PERLUAS JARINGAN BISNIS ANDA
                                                    </h1>
                                                    <p className="benefitDesc">
                                                        Pada ekosistem platform Traveli, kami menghubungkan
                                                        anda langsung ke market yang berpotensial. Mulai dari 
                                                        penyedia produk hingga pembeli yang prospektif, semua 
                                                        dalam 1 tempat.
                                                    </p>
                                                </div>
                                                <div className="col-md-5 text-center">
                                                    <img className="img-fluid responsiveImg2" src={benefits1} alt="Carousel 1"/>
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
    </>
  )
}

