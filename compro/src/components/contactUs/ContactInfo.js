import { useEffect, useState } from "react";
import facebook from "../../assets/images/facebookBlue.png";
import tiktok from "../../assets/images/tiktokBlue.png";
import linkedin from "../../assets/images/linkedinBlue.png";
import twitter from "../../assets/images/twitterBlue.png";
import youtube from "../../assets/images/youtubeBlue.png";
import instagram from "../../assets/images/instagramBlue.png";

export const ContactInfo = ({ url }) => {
  const [data, setData] = useState("");
  const [sosmed, setSosmed] = useState("");

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

  return (
    <div>
      {data !== "" && sosmed !== "" && (
        <div className="container-contact">
          <div className="row">
            <div className="col-md-5 offset-md-1 no-mobile">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
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
                {
                  sosmed.Facebook.show && (
                    <a href={sosmed.Facebook.link} target="_blank">
                      <img className="socialIconBlue" src={facebook} />
                    </a>
                  )
                }
                {
                  sosmed.Tiktok.show && (
                    <a href={sosmed.Tiktok.show.link} target="_blank">
                      <img className="socialIconBlue" src={tiktok} />
                    </a>
                  )
                }
                {
                  sosmed.Linkedin.show && (
                    <a href={sosmed.Linkedin.link} target="_blank">
                      <img className="socialIconBlue" src={linkedin} />
                    </a>
                  )
                }
                {
                  sosmed.Twitter.show && (
                    <a href={sosmed.Twitter.link} target="_blank">
                      <img className="socialIconBlue" src={twitter} />
                    </a>
                  )
                }
                {
                  sosmed.Youtube.show && (
                    <a href={sosmed.Youtube.link} target="_blank">
                      <img className="socialIconBlue" src={youtube} />
                    </a>
                  )
                }
                {
                  sosmed.Instagram.show && (
                    <a href={sosmed.Instagram.link} target="_blank">
                      <img className="socialIconBlue" src={instagram} />
                    </a>
                  )
                }
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};
