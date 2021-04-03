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
      window.addEventListener('resize', handleResize())
    },[])
    
    if(mobileView < 600){
      image = howItWorksMobile
    } else {
      image = howItWorks
    }

  return (
    <>
      <div className="containerHowItWorks">
        <img className="responsiveImg" src={image}/>
      </div>
    </>
  )
}

