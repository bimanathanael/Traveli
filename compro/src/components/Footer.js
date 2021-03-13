import '../assets/css/Nav.css';
import traveliFooter from '../assets/images/traveliFooter.png';
import facebook from '../assets/images/facebook.png';
import tiktok from '../assets/images/tiktok.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
import email from '../assets/images/email.png';
import callCenter from '../assets/images/callCenter.png';
import appStore from '../assets/images/appStore.png';
import googlePlay from '../assets/images/googlePlay.png';


export const Footer = () => {
  return (
    <>
      <div className="container-footer text-white">
        <div className="row">
          <div className="col-md-3">
            <img className="w70" src={traveliFooter}/>
            <div className="row">
              <div className="col-md-3">
                <img className="w100" src={whatsapp}/>
              </div>
              <div className="col-md-9">
                <div className="col-md-12">
                  Whatsapp
                </div>
                <div className="col-md-12">
                  <b>
                    0858 1150 0888
                  </b>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img className="w100" src={email}/>
              </div>
              <div className="col-md-9">
                <div className="col-md-12">
                  Email
                </div>
                <div className="col-md-12 text-white">
                  <b>
                    info@traveli.co.id
                  </b>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img className="w100" src={callCenter}/>
              </div>
              <div className="col-md-9">
                <div className="col-md-12 text-white">
                  Call Center
                </div>
                <div className="col-md-12 text-white">
                  <b>
                    021-71793669
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row">
              <div className="col-md-4">
                <b> About </b>
                <br/>
                <br/>
                <a> Profile </a>
                <br/>
                <a> News </a>
                <br/>
                <a> Contact Us </a>
                <br/>
                <a> Promo </a>
              </div>
              <div className="col-md-4">
                <b> Members </b>
                <br/>
                <br/>
                <a> Supplier </a>
                <br/>
                <a> Wholesaler </a>
                <br/>
                <a> Reseller </a>
                <br/>
                <a> TraveliKuy </a>
                <br/>
                <a> Supplier List </a>
                <br/>
                <a> Distributor List </a>
              </div>
              <div className="col-md-4">
                <b> Privacy Policy </b>
                <br/>
                <br/>
                <a> Terms and Conditions </a>
                <br/>
                <a> FAQ </a>
              </div>
            </div>
            <div className="row d-flex pr-7 mt-4">
              <div className="col-md-12 text-center">
                <h4>
                  Follow Us
                </h4>
              </div>
              <div className="col-md-12 text-center">
                <img className="socialIcon" src={facebook}/>
                <img className="socialIcon" src={tiktok}/>
                <img className="socialIcon" src={linkedin}/>
                <img className="socialIcon" src={twitter}/>
                <img className="socialIcon" src={youtube}/>
                <img className="socialIcon" src={instagram}/>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-right">
            <b> PT. Traveli Caraka Nuswantara</b>
            <p className="text-white">
              Jl. Adityawarman I No.2, RT 6 / RW 2 Melawaii,
              <br/>
              Kebayoran Baru, Jakarta Selatan,
              <br/>
              DKI Jakarta 12160
              <br/>
              Tel. 021-71793669
            </p>
            <div className="col mt-4 pr-0 pt-4">
              <img className="radius-1 ml-2 mb-2 w50" src={appStore}/>
              <img className="radius-1 ml-2 mb-2 w50" src={googlePlay}/>
            </div>
          </div>
        </div>
        <div className="row text-center bg-blue2 text-default">
          <div className="col-md-12">
            <p className="m-auto p-2">
              @ 2021 Traveli. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
