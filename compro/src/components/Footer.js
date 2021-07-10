import "../assets/css/Nav.css";
import traveliFooter from "../assets/images/traveliFooter.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import whatsapp from "../assets/images/whatsapp.png";
import email from "../assets/images/email.png";
import callCenter from "../assets/images/callCenter.png";
import appStore from "../assets/images/appStore.png";
import googlePlay from "../assets/images/googlePlay.png";
import { useEffect, useState } from "react";

export const Footer = ({ url, visitor }) => {
  const [data, setData] = useState();
  const [sosmed, setSosmed] = useState();
  const [toggle, toggleSet] = useState(false)

  useEffect(() => {
    fetch(url + `/ContactUs`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setData(message);
      })
      .catch((err) => {});
    fetch(`${url}/SocialMedia`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setSosmed(message);
      })
      .catch((err) => {});
  }, [url]);

  const toggleDetails = () => {
    toggleSet(!toggle)
  }

  return (
    <>
      {data !== undefined && sosmed && (
        <div className="container-footer text-white">
          <div className="row oneRem">
            <div className="col-md-3 no-mobile">
              <img className="w70" src={traveliFooter} />
              <div className="row no-mobile">
                <div className="col-md-3">
                  <img className="w100" src={email} />
                </div>
                <div className="col-md-9">
                  <div className="col-md-12">Email</div>
                  <div className="col-md-12 text-white">
                    <b>{data.ContactInformation.Email}</b>
                  </div>
                </div>
              </div>

              {/* Temporary hide base on client request */}
              <div className="row">
                <div className="col-md-3">
                  <img className="w100" src={whatsapp}/>
                </div>
                <div className="col-md-9">
                  <div className="col-md-12">Whatsapp</div>
                  <div className="col-md-12">
                    <b>{data.ContactInformation.WhatsappNumber}</b>
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
                    <b>{data.ContactInformation.TeleponNumber}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1 no-mobile">
              <div className="row">
                <div className="col-md-4">
                  <b> About </b>
                  <br />
                  <br />
                  <a className="text-white" href="/Profile">
                    {" "}
                    Profile{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/News">
                    {" "}
                    News{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/ContactUs">
                    {" "}
                    Contact Us{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/Promo">
                    {" "}
                    Promo{" "}
                  </a>
                </div>
                <div className="col-md-4">
                  <b> Members </b>
                  <br />
                  <br />
                  <a className="text-white" href="/supplier-members">
                    {" "}
                    Supplier{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/Wholesaler-members">
                    {" "}
                    Wholesaler{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/reseller-members">
                    {" "}
                    Reseller{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/customer-members">
                    {" "}
                    Customer{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/supplier-list">
                    {" "}
                    Supplier List{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/wholesaler-list">
                    {" "}
                    Wholesaler List{" "}
                  </a>
                </div>
                <div className="col-md-4">
                  <b> Privacy Policy </b>
                  <br />
                  <br />
                  <a className="text-white" href="/tnc"> Terms and Conditions </a>
                  <br />
                  <a className="text-white" href="/faq"> FAQ </a>
                </div>
              </div>
              <div className="row d-flex pr-7 mt-4">
                <div className="col-md-12 text-center">
                  <h4 className="oneRem">Follow Us</h4>
                </div>
                <div className="col-md-12 text-center">
                  {
                    sosmed.Facebook.show && (
                      <a href={sosmed.Facebook.link} target="_blank">
                        <img className="socialIcon" src={facebook} />
                      </a>
                    )
                  }
                  {
                    sosmed.Tiktok.show && (
                      <a href={sosmed.Tiktok.show.link} target="_blank">
                        <img className="socialIcon" src={tiktok} />
                      </a>
                    )
                  }
                  {
                    sosmed.Linkedin.show && (
                      <a href={sosmed.Linkedin.link} target="_blank">
                        <img className="socialIcon" src={linkedin} />
                      </a>
                    )
                  }
                  {
                    sosmed.Twitter.show && (
                      <a href={sosmed.Twitter.link} target="_blank">
                        <img className="socialIcon" src={twitter} />
                      </a>
                    )
                  }
                  {
                    sosmed.Youtube.show && (
                      <a href={sosmed.Youtube.link} target="_blank">
                        <img className="socialIcon" src={youtube} />
                      </a>
                    )
                  }
                  {
                    sosmed.Instagram.show && (
                      <a href={sosmed.Instagram.link} target="_blank">
                        <img className="socialIcon" src={instagram} />
                      </a>
                    )
                  }
                </div>
              </div>
            
            </div>
            <div className="col-md-12 mobile-only">
              <img className="w70" src={traveliFooter} />
            </div>
            <div className="col-md-3 text-right mobile-center mobile-top-margin">
              <b className="no-mobile">{data.ContactInformation.CompanyName}</b>
              <p className="text-white">
                {data.ContactInformation.AdressStreet}
                <br />
                {data.ContactInformation.AdressCity}
                <br />
                {data.ContactInformation.AdressProvince}
                <br />
                {/* {data.ContactInformation.TeleponNumber */}
              </p>
              <div className="row mr-0 ml-0">

                <div className="col-md-6 no-mobile">
                  <img className="radius-1 ml-2 mb-2 w100" src={appStore} />
                  <img className="radius-1 ml-2 mb-2 w100" src={googlePlay} />
                </div>
                <div className="col-md-6 mr-0 pr-0 no-mobile">
                  <div className="row mr-0 ml-0">
                    <div className="col-md-12 card-visitor" onClick= { () => toggleDetails() }>
                      <div>
                        <div className="col-md-12 text-center">
                          <p className="number-visitor">
                            { visitor.Day }
                          </p>
                        </div>
                        <div className="col-md-12 text-center">
                          <p className="tag-visitor">
                            VISITORS <b>TODAY</b>
                          </p>
                        </div>
                      </div>
                      { toggle && 
                        <div className="show-details">
                          <div className="col-md-12 text-center">
                            <p className="number-visitor">
                              { visitor.Month }
                            </p>
                          </div>
                          <div className="col-md-12 text-center">
                            <p className="tag-visitor">
                              VISITORS THIS <b>MONTH</b>
                            </p>
                          </div>
                          <div className="col-md-12 text-center">
                            <p className="number-visitor">
                              { visitor.Total }
                            </p>
                          </div>
                          <div className="col-md-12 text-center">
                            <p className="tag-visitor">
                              TOTAL VISITORS
                            </p>
                          </div>
                        </div>
                      }
                      <div className="col-md-12 details-container">
                        <p className="details-visitor">
                          see <b> details </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center bg-blue2 text-default">
            <div className="col-md-12">
              <p className="m-auto p-2">@ 2021 Traveli. All right reserved.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
