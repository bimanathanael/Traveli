import ScrollAnimation from 'react-animate-on-scroll';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import whatsapp2 from '../../assets/images/whatsapp2.png'
import promo from '../../assets/images/promo.png'

export const Hero = () => {

  let monthsList = ["January", "February", "March", "April","May",
  "June","July","August","September","October","November","December"]
  return (
    <>
      <div className="heroContainer">
        <div className="row ml-3">
          <div className="col-md-7 specialCol">
            <div className="row pl-3">
              <ScrollAnimation animateIn='zoomIn'animateOut='fadeOut'>
                <h1 className="hero-title">
                  hi sobat traveli, yuk kembangkan bisnis pariwisata anda
                  bersama kami
                </h1>
                <h4 className="hero-subtitle">
                  "together, we grow"
                </h4>
              </ScrollAnimation>
            </div>
            <div className="row">
              <div className="col-md-9 pl-3">
                <ScrollAnimation animateIn='zoomIn'animateOut='fadeOut' delay="200">
                  <p className="hero-desc">
                    Traveli adalah platform digital kepariwisataan yang
                    menampilkan, mendistribusikan, dan menjual produk-produk 
                    wisata yang anda miliki dengan membangun relasi sinergis antar 
                    penggunanya mulai dari pemasok, penjual dan pembeli dalam satu 
                    sistem yang terintegrasi
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row mt-2 pl-2">
              <div className="col-3 pl-0 mb-5">
                <ScrollAnimation animateIn='zoomIn'animateOut='fadeOut' delay="400">
                  <button type="button" className="btn btn-traveli btn-v3-hero">
                    <div className="row">
                      <div className="col-3 ml-0 pl-0">
                        <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                      </div>
                      <div className="col btn-font">
                        Try it for Free
                      </div>
                    </div>
                  </button>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">
              <ScrollAnimation animateIn='zoomIn'animateOut='fadeOut' delay="600">
                <div className="modal-body" style={{ "visibility": "hidden"}}>
                  <iframe width="120" height="115"
                  // src="https://www.youtube.com/embed/YuAya0hRjwU?autoplay=1&mute=1"
                  src="https://www.youtube.com/embed/YuAya0hRjwU"
                  >
                  </iframe>
                </div>
              </ScrollAnimation>

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Promo</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModal">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <img className="imagePromo w100" src={promo}/>
                        </div>
                        <div className="col-md-6 text-left">
                          <h2 className="promoModalHead"> 
                            Get 25% Off tax-saving commuter benefits to all Lyft Line cities
                          </h2>
                          <p className="oneRem text-white">
                            Get 25% Off tax-saving commuter benefits to all Lyft Line cities
                            Get 25% Off tax-saving commuter benefits to all Lyft Line cities
                          </p>
                          <button className="btnYellowPromo">
                            see more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1 offset-md-4 d-flex align-items-end pb-5">
            <div className="cardDate text-white">
              { new Date().getDate() + '' }
              <br/>
              { monthsList[ new Date().getMonth() ] }
            </div>
          </div> */}
        </div>
        <a href="http://wa.me/+6285712559445?text=Hallo%20Customer%20Care%20Traveli"  target="_blank">
          <img className="floatingWA" src={whatsapp2}/>
        </a>
      </div>
    </>
  )
}

