
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export const VisionMission = () => {
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
                                Menjadi jendela dunia untuk kekayaan dan 
                                keindahan destinasi wisata di Indonesia 
                                dengan segala kelengkapannya
                            </p>
                            <br/>
                            <p className="headingVM " >
                                our mission
                            </p>
                            <p className="descVM">
                                Memberdayakan dan mengembangkan komunitas \
                                bisnis pariwisata melalui platform digital 
                                dengan konsep tumbuh bersama
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

