import React, { useState, useEffect } from "react";

// package
import axios from "axios";

// component
import HeroMembers from "../../components/members/HeroMembers";
import BenefitMembers from "../../components/members/BenefitMembers";
import SupplierWork from "../../components/members/SupplierWork";
import ProcessMembers from "../../components/members/ProcessMembers";
import ConditionMembers from "../../components/members/ConditionMembers";
import KeyFeatureMembers from "../../components/members/KeyFeatureMembers";

// asset
import heroBackground from "../../assets/images/members/reseller/hero.png";
import WorkOne from "../../assets/images/members/work-1.png";
import WorkTwo from "../../assets/images/members/work-2.png";
import WorkThree from "../../assets/images/members/work-3.png";
import processImage from "../../assets/images/members/reseller/process.png";
import workBackground from "../../assets/images/members/reseller/bg.png";

const Reseller = () => {
  const [contentWork, setContentWork] = useState(null);
  const [contentFeature, setContentFeature] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerContent, setOfferContent] = useState(null);
  const [conditionContent, setConditionContent] = useState(null);
  useEffect(() => {
    axios
      .get(`https://pacific-hamlet-79377.herokuapp.com/id/MembersReseller`)
      .then((res) => {
        console.log(res.data.message);
        const dataRaw = res.data.message;
        if (dataRaw) {
          // Hero
          const hero = {
            title: dataRaw.Hero.Title,
            description: dataRaw.Hero.Description,
            footer:
              "ARE YOU AN AGENT OR RESELLER LOOKING TO GAIN COMPETITIVE ADVANTAGE?",
          };
          setHeroContent(hero);

          // What We Offer
          let whatWeOffer = [];
          if (dataRaw.WhatWeOfferTitle) {
            for (let key in dataRaw.WhatWeOfferTitle) {
              whatWeOffer.push({ title: dataRaw.WhatWeOfferTitle[key] });
            }
            let index = 0;
            for (let key in dataRaw.WhatWeOfferDescription) {
              whatWeOffer[index].description =
                dataRaw.WhatWeOfferDescription[key];
              index++;
            }
            setOfferContent(whatWeOffer);
          }

          // How Supplier Works
          if (dataRaw.HowCorporateWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOne,
                title: dataRaw.HowCorporateWorksTitle.Title1,
                desc: dataRaw.HowCorporateWorksDescription.Description1,
              },
              two: {
                image: WorkTwo,
                title: dataRaw.HowCorporateWorksTitle.Title2,
                desc: dataRaw.HowCorporateWorksDescription.Description2,
              },
              three: {
                image: WorkThree,
                title: dataRaw.HowCorporateWorksTitle.Title3,
                desc: dataRaw.HowCorporateWorksDescription.Description3,
              },
            };
            setContentWork(supplierWorks);
          }

          // Condition
          const conditions = [];
          if (dataRaw.Conditions) {
            for (let key in dataRaw.Conditions) {
              conditions.push(dataRaw.Conditions[key]);
            }
            setConditionContent(conditions);
          }

          // Key Feature
          if (dataRaw.KeyFeaturesForResellerOnlineBillingDocument) {
            const dataOnlineBilling = [];
            for (let key in dataRaw.KeyFeaturesForResellerOnlineBillingDocument) {
              dataOnlineBilling.push(
                dataRaw.KeyFeaturesForResellerOnlineBillingDocument[key]
              );
            }
            console.log(dataOnlineBilling);
            const dataSupportingTools = [];
            for (let key in dataRaw.KeyFeaturesForResellerSupportingTools) {
              dataSupportingTools.push(
                dataRaw.KeyFeaturesForResellerSupportingTools[key]
              );
            }

            const webPortalManagement = [];
            for (let key in dataRaw.KeyFeaturesForResellerWebPortalManagement) {
              webPortalManagement.push(
                dataRaw.KeyFeaturesForResellerWebPortalManagement[key]
              );
            }

            const tempData = {
              one: {
                title: "WEB PORTAL MANAGEMENT",
                data: webPortalManagement,
              },
              two: {
                title: "ONLINE BILLING DOCUMENT",
                data: dataOnlineBilling,
              },
              three: {
                title: "SUPPORTING TOOLS",
                data: dataSupportingTools,
              },
            };

            setContentFeature(tempData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="members-page">
      <HeroMembers data={heroContent} backgroundHero={heroBackground} />
      <BenefitMembers
        textHeader={"FOR RESELLER"}
        textSubHeader={"WHAT WE OFFER"}
        data={offerContent}
      />
      <SupplierWork
        title={"HOW RESELLER WORKS"}
        content={contentWork}
        workBackground={workBackground}
      />
      <ProcessMembers processImg={processImage} />
      <ConditionMembers data={conditionContent} />
      <KeyFeatureMembers
        content={contentFeature}
        title={"KEY FEATURES FOR RESELLER"}
      />
    </div>
  );
};

export default Reseller;
