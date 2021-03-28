import { useEffect, useState } from "react";

export const ContactInfo = ({ url }) => {
  // const [mobileView, setMobileView] = useState(window.innerWidth)

  // useEffect(()=> {
  //     function handleResize() {
  //         setMobileView(window.innerWidth)
  //     }

  //     window.addEventListener('resize', handleResize)
  // },[])

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${url}/ContactUs`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          console.log(resp);
          throw resp;
        }
      })
      .then(({ message }) => {
        setData(message);
      })
      .catch((err) => {});
  }, [url]);

  console.log(data, "<<<contactInfo");

  return (
    <div>
      {data !== undefined && (
        <div className="container-contact">
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <div class="mapouter">
                <div class="gmap_canvas">
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
              <p className="headingContact">Contact Information</p>
              <p>
                Give us a call or drop by anytime, we will answer all enquiries
                within 24 hours on business days.
              </p>
              <br />
              <p>
                <b>{data.ContactInformation.CompanyName}</b>
                <br />
                {data.ContactInformation.AdressStreet}
                <br />
                {data.ContactInformation.AdressCity}
                <br />
                {data.ContactInformation.AdressProvince}
                <br />
                <br />
                <b> {data.ContactInformation.TeleponNumber}</b>
                <br />
                <b> Email. : {data.ContactInformation.Email}</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
