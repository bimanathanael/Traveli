
import ScrollAnimation from 'react-animate-on-scroll';


export const JoinUs = () => {

  return (
    <>
      <div className="loginContainer">
        <div className="row  pb-3">
          <div className="col text-center mt-5">
              <ScrollAnimation animateIn='zoomIn'>
                  <p className="headingOffer">
                    choose your membership
                  </p>
              </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn='bounceInLeft'>
          <div className="row mt-7  d-flex justify-content-center mb-5">
            <div className="col-3 text-center mt-5">
              <button className="btnOnLogin">
                SUPPLIER
              </button>
            </div>
            <div className="col-3 text-center mt-5">
              <button className="btnOnLogin">
                WHOLESALER
              </button>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInRight'>
          <div className="row pt-3  d-flex justify-content-center border-top pt-5">
            <div className="col-3 text-center">
              <button className="btnOnLogin">
                AGENCY
              </button>
            </div>
            <div className="col-3 text-center">
              <button className="btnOnLogin">
                CORPORATE
              </button>
            </div>
            <div className="col-3 text-center">
              <button className="btnOnLogin">
                PETRA
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

