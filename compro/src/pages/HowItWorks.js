import { useEffect, useState } from 'react'
import howItWorks from '../assets/images/howItWorks.png'
import howItWorksMobile from '../assets/images/howItWorksMobile.png'
import ScrollAnimation from 'react-animate-on-scroll';

export const HowItWorks = ({url}) => {
  let image

  const [mobileView, setMobileView] = useState(window.innerWidth)
  useEffect(()=> {
      function handleResize() {
        setMobileView(window.innerWidth)
      }
      window.addEventListener('resize', handleResize())
    },[])
    
    if(mobileView < 600){
      image = howItWorksMobile
    } else {
      image = howItWorks
    }

  return (
    <>
      <div className="text-center containerHowItWorks">
        <ScrollAnimation animateIn='zoomIn'>
          <p className="headingHowItWorks mobile-2">
              WHY CHOOSE TRAVELI
          </p>
          <p className="text-center">
            Traveli merupakan platform digital kepariwisataan yang menampilkan, mendistribusikan dan 
            menjual 
            <br/>
            produk-produk wisata yang Anda miliki dengan membangun relasi sinergis antar 
            penggunanya mulai dari 
            <br/>
            pemasok, penjual dan pembeli dalam satu sitem yang terintegrasi.
            <br/>
            <br/>
            Traveli membangun kluster-kluster ekosistem digital yang terintegrasi dan terhubung  
            secara sinergis 
            <br/>
            bagi para pemilik produk wisata,  pelaku usaha dan pelanggan.
            <br/>
            <br/>
            T-Store sebagai kluster ekosistem yang pertama  berisi para supplier (pemilik produk) 
            dan wholesalers  
            <br/>
            (pemilik produk sekaligus sebagai distributor utama)  yang dapat 
            mengunggah produknya ke dalam T-Store.
            <br/>
            <br/>
            Ekosistem yang terbangun berikutnya adalah Sobat  Traveli, dalam kluster ini terdiri 
            dari para distributor  
            <br/>
            utama, reseller hingga pelanggan.
          </p>
          <img className="responsiveImg" src={image}/>
        </ScrollAnimation>

      </div>
    </>
  )
}

