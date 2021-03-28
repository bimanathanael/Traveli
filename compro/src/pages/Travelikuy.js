import React, { useState, useEffect } from "react";

// package
import axios from "axios";

// component
import HeroMembers from "../components/members/HeroMembers";
import BenefitMembers from "../components/members/BenefitMembers";
import SupplierWork from "../components/members/SupplierWork";
import ProcessMembers from "../components/members/ProcessMembers";
import ConditionMembers from "../components/members/ConditionMembers";
import KeyFeatureMembers from "../components/members/KeyFeatureMembers";

// asset
import heroBackground from "../assets/images/travelikuy/hero.png";
import WorkOne from "../assets/images/members/work-1.png";
import WorkTwo from "../assets/images/members/work-2.png";
import WorkThree from "../assets/images/members/work-3.png";
import processImage from "../assets/images/travelikuy/process.png";
import workBackground from "../assets/images/travelikuy/bg_petra.png";

const Supplier = () => {
  const [contentPetra, setContentPetra] = useState(null);
  const [featurePetra, setFeaturePetra] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerPetra, setOfferPetra] = useState(null);
  const [conditionPetra, setConditionPetra] = useState(null);

  const [benefitTitle, setBenefitTitle] = useState("FOR PETRA");

  const [contentCustomer, setContentCustomer] = useState(null);
  const [featureCustomer, setFeatureCustomer] = useState(null);
  const [offerCustomer, setOfferCustomer] = useState(null);
  const [conditionCustomer, setConditionCustomer] = useState(null);
  useEffect(() => {
    axios
      .get(`https://pacific-hamlet-79377.herokuapp.com/id/TraveliKuy`)
      .then((res) => {
        console.log(res.data.message);
        const dataRaw = res.data.message;
        if (dataRaw) {
          // Hero
          const hero = {
            title: dataRaw.Hero.Title,
            description: dataRaw.Hero.Descripiton,
          };
          setHeroContent(hero);

          // What We Offer Petra
          if (dataRaw.BenefitsForPetraTitle) {
            let whatWeOffer = [];
            for (let key in dataRaw.BenefitsForPetraTitle) {
              whatWeOffer.push({ title: dataRaw.BenefitsForPetraTitle[key] });
            }
            let index = 0;
            for (let key in dataRaw.BenefitsForPetraDescription) {
              whatWeOffer[index].description =
                dataRaw.BenefitsForPetraDescription[key];
              index++;
            }
            setOfferPetra(whatWeOffer);
          }

          // What We Offer Customer
          if (dataRaw.BenefitForCustomerTitle) {
            let whatWeOffer = [];
            for (let key in dataRaw.BenefitForCustomerTitle) {
              // console.log(key)
              whatWeOffer.push({ title: dataRaw.BenefitForCustomerTitle[key] });
            }
            let index = 0;
            for (let key in dataRaw.BenefitForCustomerDescription) {
              // console.log(key)
              whatWeOffer[index].description =
                dataRaw.BenefitForCustomerDescription[key];
              index++;
            }
            setOfferCustomer(whatWeOffer);
          }

          // How Petra Works
          if (dataRaw.HowPetraWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOne,
                title: dataRaw.HowPetraWorksTitle.Title1,
                desc: dataRaw.HowPetraWorksDescription.Description1,
              },
              two: {
                image: WorkTwo,
                title: dataRaw.HowPetraWorksTitle.Title2,
                desc: dataRaw.HowPetraWorksDescription.Description2,
              },
              three: {
                image: WorkThree,
                title: dataRaw.HowPetraWorksTitle.Title3,
                desc: dataRaw.HowPetraWorksDescription.Description3,
              },
              four: {
                image: WorkThree,
                title: dataRaw.HowPetraWorksTitle.Title4,
                desc: dataRaw.HowPetraWorksDescription.Description4,
              },
            };
            setContentPetra(supplierWorks);
          }

          // How Customer Works
          if (dataRaw.HowCostumerWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOne,
                title: dataRaw.HowCostumerWorksTitle.Title1,
                desc: dataRaw.HowCostumerWorksDescription.Description1,
              },
              two: {
                image: WorkTwo,
                title: dataRaw.HowCostumerWorksTitle.Title2,
                desc: dataRaw.HowCostumerWorksDescription.Description2,
              },
            };
            setContentCustomer(supplierWorks);
          }

          // Condition Petra
          const conditions = [];
          if (dataRaw.ConditionsPetra) {
            for (let key in dataRaw.ConditionsPetra) {
              conditions.push(dataRaw.ConditionsPetra[key]);
            }
            setConditionPetra(conditions);
          }

          // Key Feature Petra
          if (dataRaw.KeyFeaturesForPetraOnlineReport) {
            const dataOnlineBilling = [];
            for (let key in dataRaw.KeyFeaturesForPetraOnlineReport) {
              dataOnlineBilling.push(
                dataRaw.KeyFeaturesForPetraOnlineReport[key]
              );
            }
            console.log(dataOnlineBilling);
            const dataSupportingTools = [];
            for (let key in dataRaw.KeyFeaturesForPetraOthers) {
              dataSupportingTools.push(dataRaw.KeyFeaturesForPetraOthers[key]);
            }

            const webPortalManagement = [];
            for (let key in dataRaw.KeyFeaturesForPetraWebPortal) {
              webPortalManagement.push(
                dataRaw.KeyFeaturesForPetraWebPortal[key]
              );
            }

            const tempData = {
              one: {
                title: "WEB PORTAL",
                data: webPortalManagement,
              },
              two: {
                title: "ONLINE REPORT",
                data: dataOnlineBilling,
              },
              three: {
                title: "OTHERS",
                data: dataSupportingTools,
              },
            };

            setFeaturePetra(tempData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="members-page">
      <HeroMembers
        data={heroContent}
        backgroundHero={heroBackground}
        footer={false}
      />
      <BenefitMembers
        textHeader={"BENEFITS"}
        textSubHeader={benefitTitle}
        data={offerPetra}
      />
      <SupplierWork
        title={"HOW PETRA WORKS"}
        content={contentPetra}
        workBackground={workBackground}
      />
      <ProcessMembers processImg={processImage} />
      <ConditionMembers data={conditionPetra} />
      <KeyFeatureMembers
        content={featurePetra}
        title={"KEY FEATURES FOR PETRA"}
      />
    </div>
  );
};

export default Supplier;
