
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const JoinUs = ({url}) => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch( url + `id/Home`)
  //     .then((resp) => {
  //       if (resp.ok) {
  //         return resp.json();
  //       } else {
  //         console.log(resp)
  //         throw resp;
  //       }
  //     })
  //     .then(({ message }) => {
  //       console.log(message,"<<< home")
  //       setData(message);
  //     })
  //     .catch((err) => {});
  // }, []);

  const texts = {
    supplier: `Supplier adalah penyedia produk kepariwisataan, dimana produk mereka 
    akan di distribusi oleh distributor. Siapapun bisa menjadi supplier, cukup daftar 
    dan unggah produk kepariwisataan yang dimiliki sesuai dengan T&C Traveli.`,
    
    wholesaler: `Travel agent yang memiliki credential produk kepariwisataan dan 
    melakukan kegiatan jual beli secara digitial (lisensi dan otoritas) Distributor/Wholesaler 
    dapat menjadi penyedia produk bagi Agency, Korporasi, dan PeTra`,

    agency: `Sub-agent yang tidak memiliki credential product namun memiliki
    network dan market yang luas.`,

    corp: `Perusahaan yang tidak memiliki credential namun berminat untuk mengembangkan 
    bisnis di industry pariwisata`,

    petra: `Salah satu unit Travel Agent yang ditujukan khusus untuk pribadi/ perseorangan yang 
    memiliki minat untuk bergabung dan menjalankan bisnis kepariwisataan `
  }

  let [desc, setDesc] = useState("")

  return (
    <>
      <div className="loginContainer">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center mt-5">
            <ScrollAnimation animateIn='zoomIn'>
              <p className="headingOffer">
                choose your membership
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
              <a href="http://tstore.traveli.co.id/" target ="__">
                <button className="btnOnLogin" 
                  onMouseEnter={ ()=> { setDesc(texts.supplier) }}
                  onMouseLeave={ ()=> { setDesc("") }}>
                  SUPPLIER 
                </button>
              </a>
            </div>
            <div className="col-md-3 text-center">
              <a href="https://portal.traveli.co.id/signup" target="__">
                <button className="btnOnLogin"
                onMouseEnter={ ()=> { setDesc(texts.wholesaler) }}
                onMouseLeave={ ()=> { setDesc("") }}>
                  WHOLESALER
                </button>
              </a>
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
    </>
  )
}

