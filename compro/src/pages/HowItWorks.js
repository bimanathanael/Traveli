import { useEffect, useState } from 'react'
import howItWorks from '../assets/images/howItWorks.png'
import howItWorksMobile from '../assets/images/howItWorksMobile.png'

export const HowItWorks = ({url}) => {
  let image

  const [mobileView, setMobileView] = useState(window.innerWidth)
  useEffect(()=> {
      function handleResize() {
        setMobileView(window.innerWidth)
      }
      
      console.log("useeffect")
      window.addEventListener('resize', handleResize())
    },[])
    
    if(mobileView < 600){
      console.log("masuk atas")
      image = howItWorksMobile
    } else {
      console.log("masuk bawah")
      image = howItWorks
    }
  console.log(mobileView, "<<mobileView", image)

  return (
    <>
      <div class="containerHowItWorks">
        <img className="responsiveImg" src={image}/>
      </div>
    </>
  )
}

