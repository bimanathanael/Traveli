import { useEffect, useState } from "react";

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
                    src="https://maps.google.com/maps?q=melawai&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
