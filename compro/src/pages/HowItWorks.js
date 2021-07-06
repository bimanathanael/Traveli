import { useEffect, useState } from 'react'
import howItWorks from '../assets/images/howItWorks.png'
import howItWorksMobile from '../assets/images/howItWorksMobile.png'
import ScrollAnimation from 'react-animate-on-scroll';
import parse from 'html-react-parser';

export const HowItWorks = ({url}) => {
  const [data, setData] = useState();
  let image

  useEffect(() =>{
    fetch(url + `/HowItWorks`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setData(message)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [url])

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
      {data !== undefined &&(

        <div className="text-center containerHowItWorks">
          <ScrollAnimation animateIn='zoomIn'>
            <p className="headingHowItWorks mobile-2">
                {data.Hero.Title}
            </p>
            <div className="text-center">
              {parse(data.Hero.Description_RT)}
            </div>
            <img className="responsiveImg" src={image}/>
          </ScrollAnimation>
        </div>
      )}
    </>
  )
}

