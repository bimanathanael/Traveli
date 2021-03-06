
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export const Login = ({url}) => {
  const [data, setData] = useState();
  let [desc, setDesc] = useState("")

  let texts

  useEffect(() => {
    fetch( url + `/Login`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setData(message.Hero);
      })
      .catch((err) => {});
  }, [url]);

  if ( data != undefined ){
    texts = {
      supplier: data.DescriptionSupplier,
      wholesaler: data.DescriptionWholesaler,
      agency: data.DescriptionAgency,
      corp:  data.DescriptionCorporate,
      petra:  data.DescriptionPetra
    }
  }


  return (
    <>
      {data !== undefined &&
        <div className="loginContainer">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center mt-5">
              <ScrollAnimation animateIn='zoomIn'>
                <p className="headingOffer">
                  { data.Title }
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row  d-flex justify-content-center">
            <div className="col-md-6 text-center mt-3">
              <ScrollAnimation animateIn='zoomIn'>
                  <p className="descJoinUs">
                    {desc}
                  </p>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation animateIn='bounceInLeft'>
            <div className="row d-flex justify-content-center mb-5 pt-2 mobile-bottom-margin">
              <div className="col-md-3 text-center">
                <button className="btnOnLogin" 
                  onMouseEnter={ ()=> { setDesc(texts.supplier) }}
                  onMouseLeave={ ()=> { setDesc("") }}>
                  SUPPLIER
                </button>
              </div>
              <div className="col-md-3 text-center">
                <button className="btnOnLogin"
                onMouseEnter={ ()=> { setDesc(texts.wholesaler) }}
                onMouseLeave={ ()=> { setDesc("") }}>
                  WHOLESALER
                </button>
              </div>
            </div>
            <div className="row pt-3  d-flex justify-content-center borderTop pt-5 mobile-top-padding">
              <div className="col-md-3 text-center">
                <button className="btnOnLogin"
                onMouseEnter={ ()=> { setDesc(texts.agency) }}
                onMouseLeave={ ()=> { setDesc("") }}>
                  AGENCY
                </button>
              </div>
              <div className="col-md-3 text-center">
                <button className="btnOnLogin"
                onMouseEnter={ ()=> { setDesc(texts.corp) }}
                onMouseLeave={ ()=> { setDesc("") }}>
                  CORPORATE
                </button>
              </div>
              <div className="col-md-3 text-center">
                <button className="btnOnLogin"
                onMouseEnter={ ()=> { setDesc(texts.petra) }}
                onMouseLeave={ ()=> { setDesc("") }}>
                  PETRA
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      }

    </>
  )
}

