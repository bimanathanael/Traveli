
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export const VisionMission = ({data}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])


    return (
        <>
            <div className="container-vision-mission">
                <ScrollAnimation animateIn='zoomIn'>
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-7 text-center">
                            <p className="headingVM " >
                                our vision
                            </p>
                            <p className="descVM">
                                {data.Visi}
                            </p>
                            <br/>
                            <p className="headingVM " >
                                our mission
                            </p>
                            <p className="descVM">
                                {data.Misi}
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

