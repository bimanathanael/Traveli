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

export const Footer = ({ url }) => {
  const [data, setData] = useState();
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
  }, [url]);

  const toggleDetails = () => {
    toggleSet(!toggle)
  }

  return (
    <>
      {data !== undefined && (
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
              {/* <div className="row">
                <div className="col-md-3">
                  <img className="w100" src={whatsapp}/>
                </div>
                <div className="col-md-9">
                  <div className="col-md-12">Whatsapp</div>
                  <div className="col-md-12">
                    <b>0858 1150 0888</b>
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
              </div> */}


              <div className="row">
                <div className="col-md-8 card-visitor no-mobile" onClick= { () => toggleDetails() }>
                  <div>
                    <div className="col-md-12 text-center">
                      <p className="number-visitor">
                        920
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
                          4235
                        </p>
                      </div>
                      <div className="col-md-12 text-center">
                        <p className="tag-visitor">
                          VISITORS THIS <b>MONTH</b>
                        </p>
                      </div>
                      <div className="col-md-12 text-center">
                        <p className="number-visitor">
                          12462
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
                  <a className="text-white" href="/members/supplier">
                    {" "}
                    Supplier{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/members/Wholesaler">
                    {" "}
                    Wholesaler{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/members/reseller">
                    {" "}
                    Reseller{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/TraveliKuy">
                    {" "}
                    TraveliKuy{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/member-list/supplier">
                    {" "}
                    Supplier List{" "}
                  </a>
                  <br />
                  <a className="text-white" href="/member-list/wholesaler">
                    {" "}
                    Wholesaler List{" "}
                  </a>
                </div>
                <div className="col-md-4">
                  <b> Privacy Policy </b>
                  <br />
                  <br />
                  <a> Terms and Conditions </a>
                  <br />
                  <a> FAQ </a>
                </div>
              </div>
              <div className="row d-flex pr-7 mt-4">
                <div className="col-md-12 text-center">
                  <h4 className="oneRem">Follow Us</h4>
                </div>
                <div className="col-md-12 text-center">
                  <img className="socialIcon" src={facebook} />
                  <img className="socialIcon" src={tiktok} />
                  <img className="socialIcon" src={linkedin} />
                  <img className="socialIcon" src={twitter} />
                  <img className="socialIcon" src={youtube} />
                  <img className="socialIcon" src={instagram} />
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
              <div className="col mt-4 pr-0 pt-4 no-mobile">
                <img className="radius-1 ml-2 mb-2 w50" src={appStore} />
                <img className="radius-1 ml-2 mb-2 w50" src={googlePlay} />
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
