import profileImg1 from '../../assets/images/profileImg1.png';
import profileImg2 from '../../assets/images/profileImg2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';


export const AboutUs = () => {
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
                                Permasalahan serta potensi yang tidak pernah diketahui
                                dan disadari
                            </h1>
                            <p className="descAboutUs">
                                Pada tahun 2018, Indonesia merupakan negara terbesar penyumbang pasar 
                                pariwisata di Asia Tenggara dengan kontribusi sebesar USD 8.5 miliyar 
                                dari USD 418 miliar seluruh Asia Tenggara. Fakta mengejutkan lainnya 
                                meskipun Indonesia sebagai penyumbang market terbesar di Asia Tenggara 
                                dan sebesar 60% transaksi dilakukan melalui daring, populasi Online Travel 
                                Agent di Indonesia masih lah sangat sedikit, yang dikarenakan adanya biaya 
                                development yang tinggi dan administrasi perizinan yang sulit. Akhirnya hal 
                                ini mengakibatkan travel agent yang konvensional semakin tergerus.
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
                                Traveli lahir dan hadir
                            </h1>
                            <p className="descAboutUs">
                                Di mulai pada tahun 2020, kami menciptakan sebuah platform yang bernama Traveli, 
                                dimana platform ini dapat menghubungkan seluruh peminat dan pelaku bisnis di industri 
                                kepariwisataan bisa terkoneksi dengan mudah dan tidak perlu banyak biaya.
                                <br/>
                                Dengan Traveli, semua orang bisa menjadi pelaku bisnis pariwisata (supplier, wholesaler, 
                                reseller) dan menjalankan bisnisnya secara digital. Hal ini untuk mendorong transformasi 
                                bisnis travel agent dan jaringannya yang dijalankan secara konvensional menuju Online Travel 
                                Agent (OTA). Traveli percaya dengan membangun relasi sinergis antar para penggunanya mulai 
                                dari pemasok, penjual, dan pembeli dan semuanya terintegrasi dalam sistem maka industry 
                                kepariwisataan di Indonesia akan berkembang dengan cepat dan sehat. 
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='zoomIn'>
                    <div className="row mb-4 mt-7 d-flex justify-content-center">
                        <div className="col-md-8 text-center">
                            <h1>
                                Dengan prinsip tumbuh bersama, Traveli terus bersemangat untuk menciptakan 
                                ekosistem digital di industri pariwisata
                            </h1>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

