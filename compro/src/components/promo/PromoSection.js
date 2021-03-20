import left from '../../assets/images/left.png';
import promo1 from '../../assets/images/promo1.png';
import promo2 from '../../assets/images/promo2.png';
import promo3 from '../../assets/images/promo3.png';
import right from '../../assets/images/right.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';


export const PromoSection = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])

    let [curr, setCurr] = useState(0)

    let promos = [
        {
            img: promo1,
            title: `Numero 1 Traveli expands tax-saving commuter benefits to all its members and users`,
            detail: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum`
        },{
            img: promo2,
            title: `Numero 2 Traveli expands tax-saving commuter benefits to all its members and users`,
            detail: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum`
        },{
            img: promo3,
            title: `Numero 3 Traveli expands tax-saving commuter benefits to all its members and users`,
            detail: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum`
        },
    ]

    console.log(curr)

    const move = (direction) => {
        if( direction == "left" && curr - 1 >= 0){
            setCurr(curr-=1)
            console.log("masuk atas")
        } else if ( direction == "right" && curr + 1 < promos.length){
            setCurr(curr+=1)
            console.log("masuk bawah")
        }
    }


    return (
        <>
            <div className="container-promo">
                <div className="row">
                    <div className="col text-center mt-5">
                        <ScrollAnimation animateIn='zoomIn'>
                            <p className="headingPromo">
                                our offers
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 text-right d-flex align-items-center">
                        <div>
                            <img className="w-55" src={left} onClick={ ()=> move("left") } />
                        </div>
                    </div>
                    <div className="col-md-10 text-center d-flex align-items-center">
                        <div>
                            <img className="promoImage" src={promos[curr].img}/>
                        </div>
                    </div>
                    <div className="col-md-1 text-left d-flex align-items-center">
                        <div>
                            <img className="w-55" src={right} onClick={ ()=> move("right") }/>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <h5 className="col-md-6 blueTraveli text-center titlePromo">
                        {promos[curr].title}
                    </h5>
                    <p className="col-md-9 text-justify mt-3">
                        {promos[curr].detail}
                    </p>
                </div>
            </div>
        </>
    )
}

