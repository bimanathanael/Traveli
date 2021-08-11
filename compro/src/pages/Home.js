import { Hero } from "../components/home/Hero";
import { Benefits } from "../components/home/Benefits";
import { News } from "../components/home/News";
import { Partners } from "../components/home/Partners";
import { Testimonials } from "../components/home/Testimonials";
import { Why } from "../components/home/Why";
import { Provide } from "../components/home/Provide";
import { useEffect, useState } from "react";

export const Home = ({ url, mainUrl }) => {
  const [data, setData] = useState();
  const [favPartner, setFavPartner] = useState();
  // const [news, setNews] = useState();
  // const [promo, setPromo] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  let supplier, wholesaler, agency, corporate, petra, customer;

  useEffect(() => {
    fetch(url + `/Home`)
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

    // fetch(`https://pacific-hamlet-79377.herokuapp.com/lastFourNews`)
    //   .then((resp) => {
    //     if (resp.ok) {
    //       return resp.json();
    //     } else {
    //       throw resp;
    //     }
    //   })
    //   .then(({ message }) => {
    //     setNews(message);
    //   })
    //   .catch((err) => {});

    
    // fetch(`https://pacific-hamlet-79377.herokuapp.com/lastPromo`)
    //   .then((resp) => {
    //     if (resp.ok) {
    //       return resp.json();
    //     } else {
    //       console.log(resp);
    //       throw resp;
    //     }
    //   })
    //   .then(({ message }) => {
    //     setPromo(message);
    //   })
    //   .catch((err) => {});
  }, [url]);

  useEffect(() =>{
    fetch(mainUrl + `/favoritePartner`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setFavPartner(message)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [mainUrl])

  if (data !== undefined) {
    supplier = {
      benefits: data.TraveliMembershipSupplierBenefits,
      conditions: data.TraveliMembershipSupplierCondition,
      header: data.TraveliMembershipSupplierHeader,
    };
    wholesaler = {
      benefits: data.TraveliMembershipWholesalerBenefits,
      conditions: data.TraveliMembershipWholesalerCondition,
      header: data.TraveliMembershipWholesalerHeader,
    };
    agency = {
      benefits: data.TraveliMembershipAgencyBenefits,
      conditions: data.TraveliMembershipAgencyCondition,
      header: data.TraveliMembershipAgencyHeader,
    };
    corporate = {
      benefits: data.TraveliMembershipCorporateBenefits,
      conditions: data.TraveliMembershipCorporateCondition,
      header: data.TraveliMembershipCorporateHeader,
    };
    customer = {
      benefits: data.TraveliMembershipCustomerBenefits,
      header: data.TraveliMembershipCustomerHeader,
    };
    petra = {
      benefits: data.TraveliMembershipPersonalTraveliBenefits,
      conditions: data.TraveliMembershipPersonalTraveliCondition,
      header: data.TraveliMembershipPersonalTraveliHeader,
    };
  }

  return (
    <>
      {data !== undefined && favPartner &&(
        <div>
          {/* <Hero data={ data.Hero } /> */}
          <Hero data={data.Hero}  />
          {/* <Hero data={data.Hero} promo={promo} /> */}
          <Why
            dataDesc={data.WhyChooseTraveliDescription}
            dataTitle={data.WhyChooseTraveliTitle}
          />
          <Provide
            dataProvideTitle={data.WhatWeProvideTitle}
            dataProvideDesc={data.WhatWeProvideDescription}
            supplier={supplier}
            wholesaler={wholesaler}
            agency={agency}
            corporate={corporate}
            petra={petra}
            customer={customer}
          />
          <Benefits
            dataTitle={data.KeyBenefitsTitle}
            dataDesc={data.KeyBenefitsDescription}
          />
          {/* <News news={news} /> */}
          <Partners favPartner={favPartner}/>
          {/* <Testimonials /> */}
        </div>
      )}
    </>
  );
};
