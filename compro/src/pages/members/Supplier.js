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
import heroBackground from "../../assets/images/members/supplier/hero.png";
import WorkOne from "../../assets/images/members/work-1.png";
import WorkTwo from "../../assets/images/members/work-2.png";
import WorkThree from "../../assets/images/members/work-3.png";
import processImage from "../../assets/images/members/supplier/process.png";
import workBackground from "../../assets/images/members/supplier/work-background.png";

const Supplier = ({ url }) => {
  const [contentWork, setContentWork] = useState(null);
  const [contentFeature, setContentFeature] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerContent, setOfferContent] = useState(null);
  const [conditionContent, setConditionContent] = useState(null);
  useEffect(() => {
    axios
      .get(`${url}/MembersSupplier`)
      .then((res) => {
        console.log(res.data.message);
        const dataRaw = res.data.message;
        if (dataRaw) {
          // Hero
          const hero = {
            title: dataRaw.Hero.Title,
            description: dataRaw.Hero.Description,
            footer: "ARE YOU PRODUCT OWNERS LOOKING EXPAND SELLING CHANNEL?",
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
          if (dataRaw.HowSupplierWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOne,
                title: dataRaw.HowSupplierWorksTitle.Title1,
                desc: dataRaw.HowSupplierWorksDescription.Description1,
              },
              two: {
                image: WorkTwo,
                title: dataRaw.HowSupplierWorksTitle.Title2,
                desc: dataRaw.HowSupplierWorksDescription.Description2,
              },
              three: {
                image: WorkThree,
                title: dataRaw.HowSupplierWorksTitle.Title3,
                desc: dataRaw.HowSupplierWorksDescription.Description3,
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
          if (dataRaw.KeyFeaturesForSupplierOnlineBillingDocument) {
            const dataOnlineBilling = [];
            for (let key in dataRaw.KeyFeaturesForSupplierOnlineBillingDocument) {
              dataOnlineBilling.push(
                dataRaw.KeyFeaturesForSupplierOnlineBillingDocument[key]
              );
            }
            console.log(dataOnlineBilling);
            const dataSupportingTools = [];
            for (let key in dataRaw.KeyFeaturesForSupplierSupportingTools) {
              dataSupportingTools.push(
                dataRaw.KeyFeaturesForSupplierSupportingTools[key]
              );
            }

            const webPortalManagement = [];
            for (let key in dataRaw.KeyFeaturesForSupplierWebPortalManagement) {
              webPortalManagement.push(
                dataRaw.KeyFeaturesForSupplierWebPortalManagement[key]
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
  }, [url]);

  return (
    <div className="members-page">
      <HeroMembers data={heroContent} backgroundHero={heroBackground} />
      <BenefitMembers
        textHeader={"FOR SUPPLIER"}
        textSubHeader={"WHAT WE OFFER"}
        data={offerContent}
      />
      <SupplierWork
        title={"HOW SUPPLIER WORKS"}
        content={contentWork}
        workBackground={workBackground}
      />
      <ProcessMembers processImg={processImage} />
      <ConditionMembers data={conditionContent} />
      <KeyFeatureMembers
        content={contentFeature}
        title={"KEY FEATURES FOR SUPPLIER"}
      />
    </div>
  );
};

export default Supplier;
