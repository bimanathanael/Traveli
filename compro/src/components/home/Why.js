import cardImage1 from '../../assets/images/cardImage1.png';
import cardImage2 from '../../assets/images/cardImage2.png';
import cardImage3 from '../../assets/images/cardImage3.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';


export const Why = () => {
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
                            <h3> Transformasi Digital</h3>
                            <p>
                                Dengan mendigitalisasi travel agent konvensional menjadi OTA,
                                Traveli mampu menjawab fenomena disrupsi di industri pariwisata,
                                memfasilitasi para penggiat bisnis pariwisata dengan patform digitalyang modern dan 
                                intergrasi
                            </p>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5">
                            <img className="whySectionImg" src={cardImage2}/>
                            <h3> Cross Border Inventory</h3>
                            <p>
                                Dengan konsep cross border inventory, di Traveli para travel agent dapat langsung
                                mengakses dan membeli maupun menjual langsung produk-produk kepariwisataan
                                yang mereka inginkan
                            </p>
                        </div>
                        <div className="col-md-3 text-center card-style m-4 p-5">
                            <img className="whySectionImg" src={cardImage3}/>
                            <h3>Zero Fees and Investment</h3>
                            <p>
                                Bertumbuh bersama menjadi prinsip utama Traveli, sehingga tidak perlu biaya 
                                investasi maupun berbayar untuk bergabung menjadi member Traveli. Cukup daftarkan
                                dan registrasi bisnis anda dengan langkah yang mudah.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

