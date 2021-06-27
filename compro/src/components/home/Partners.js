import ScrollAnimation from 'react-animate-on-scroll';

export const Partners = ({ favPartner }) => {
    
    return (
        <>
            <div className="container-partners">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row">
                        <div className="col text-center">
                            <p className="headingPartners mobile-2">
                                OUR PARTNERS
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="row justify-content-center">
                            {favPartner && favPartner.map((item, index) => (
                                <div className="col-md-4 text-center mt-2" key={index}>
                                    <a href={item.link} target="__blank">
                                        <img className="clientLogoHome" src={item.image_url}/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

