import '../assets/css/Nav.css';
import traveliFooter from '../assets/images/traveliFooter.png';
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
            <img src={traveliFooter}/>
            <div className="row">
              <div className="col-md-3">
                <img src={whatsapp}/>
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
                <img src={email}/>
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
                <img src={callCenter}/>
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
            <img className="mt-5 radius-1" src={appStore}/>
            <img className="mt-2 radius-1" src={googlePlay}/>
          </div>
        </div>
        <div className="row text-center bg-blue2 text-default">
          <div className="col-md-12">
            <p className="m-auto">
              @ 2021 Traveli. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
