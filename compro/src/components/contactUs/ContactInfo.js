import { useEffect, useState } from "react";
import facebook from "../../assets/images/facebookBlue.png";
import tiktok from "../../assets/images/tiktokBlue.png";
import linkedin from "../../assets/images/linkedinBlue.png";
import twitter from "../../assets/images/twitterBlue.png";
import youtube from "../../assets/images/youtubeBlue.png";
import instagram from "../../assets/images/instagramBlue.png";

export const ContactInfo = ({ url }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${url}/ContactUs`)
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


  return (
    <div>
      {data !== undefined && (
        <div className="container-contact">
          <div className="row">
            <div className="col-md-5 offset-md-1 no-mobile">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=gedung%20victoria&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-3 offset-md-1 contactSection oneRem">
              <p className="headingContact mobile-2">Contact Information</p>
              <p className="mobile-1">
                Give us a call or drop by anytime, we will answer all enquiries
                within 24 hours on business days.
              </p>
              <br />
              <p className="mobile-1">
                <b>{data.ContactInformation.CompanyName}</b>
                <br />
                {data.ContactInformation.AdressStreet}
                <br />
                {data.ContactInformation.AdressCity}
                <br />
                {data.ContactInformation.AdressProvince}
                <br />
                <br />
                <b> Phone : {data.ContactInformation.TeleponNumber}</b>
                <br />
                <b> Email : {data.ContactInformation.Email}</b>
              </p>
              <div className="col-md-12 mt-5 p-0">
                <p className="followUsFont">Follow Us</p>
              </div>
              <div className="col-md-12 p-0">
                <a href="https://www.facebook.com/We-Traveli-107690237944504" target="_blank">
                  <img className="socialIconBlue" src={facebook} />
                </a>
                {/* <a href="#" target="_blank">
                  <img className="socialIconBlue" src={tiktok} />
                </a> */}
                <a href="https://www.linkedin.com/company/72018396" target="_blank">
                  <img className="socialIconBlue" src={linkedin} />
                </a>
                <a href="https://twitter.com/wetraveli" target="_blank">
                  <img className="socialIconBlue" src={twitter} />
                </a>
                <a href="https://www.youtube.com/channel/UCuTqy_SepBmRB0E8FFARYJg" target="_blank">
                  <img className="socialIconBlue" src={youtube} />
                </a>
                <a href="https://instagram.com/wetraveli?igshid=xrr25r70fmfs" target="_blank">
                  <img className="socialIconBlue" src={instagram} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};
