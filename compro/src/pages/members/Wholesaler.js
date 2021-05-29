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
import heroBackground from "../../assets/images/members/wholesaler/hero.png";
import WorkOne from "../../assets/images/members/wholesaler/work-1.png";
import WorkTwo from "../../assets/images/members/wholesaler/work-2.png";
import WorkThree from "../../assets/images/members/wholesaler/work-3.png";
import WorkFour from "../../assets/images/members/wholesaler/work-4.png";
import processImage from "../../assets/images/members/wholesaler/process.png";
import workBackground from "../../assets/images/members/reseller/bg.png";

const Wholesaler = ({ url }) => {
  const [contentWork, setContentWork] = useState(null);
  const [contentFeature, setContentFeature] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerContent, setOfferContent] = useState(null);
  const [conditionContent, setConditionContent] = useState(null);
  const btnData ={
    title: "Wholesaler List",
    link: "/member-list/wholesaler"
  }

  useEffect(() => {
    axios
      .get(`${url}/MembersWholesaler`)
      .then((res) => {
        const dataRaw = res.data.message;
        if (dataRaw) {
          // Hero
          const hero = {
            title: dataRaw.Hero.Title,
            description: dataRaw.Hero.Description,
            footer:
              "ARE YOU COMPANY LOOKING TO EXPAND SELLING CHANNEL AND NETWORK?",
          };
          setHeroContent(hero);

          // What We Offer
          let whatWeOffer = [];
          if (dataRaw.WhatWeOfferTitle) {
            const ordered = Object.entries(dataRaw.WhatWeOfferTitle)
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});
            const orderedDesc = Object.entries(dataRaw.WhatWeOfferDescription)
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});

            for (let key in ordered) {
              whatWeOffer.push({ title: dataRaw.WhatWeOfferTitle[key] });
            }
            let index = 0;
            for (let key in orderedDesc) {
              whatWeOffer[index].description =
                dataRaw.WhatWeOfferDescription[key];
              index++;
            }
            setOfferContent(whatWeOffer);
          }

          // How Supplier Works
          if (dataRaw.HowWholesalerWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOne,
                title: dataRaw.HowWholesalerWorksTitle.Title1,
                desc: dataRaw.HowWholesalerWorksDescription.Description1,
              },
              two: {
                image: WorkTwo,
                title: dataRaw.HowWholesalerWorksTitle.Title2,
                desc: dataRaw.HowWholesalerWorksDescription.Description2,
              },
              three: {
                image: WorkThree,
                title: dataRaw.HowWholesalerWorksTitle.Title3,
                desc: dataRaw.HowWholesalerWorksDescription.Description3,
              },
              four: {
                image: WorkFour,
                title: dataRaw.HowWholesalerWorksTitle.Title4,
                desc: dataRaw.HowWholesalerWorksDescription.Description4,
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
          if (dataRaw.KeyFeaturesForWholesalerOnlineBillingDocument) {
            const dataOnlineBilling = [];
            for (let key in dataRaw.KeyFeaturesForWholesalerOnlineBillingDocument) {
              dataOnlineBilling.push(
                dataRaw.KeyFeaturesForWholesalerOnlineBillingDocument[key]
              );
            }
            const dataSupportingTools = [];
            for (let key in dataRaw.KeyFeaturesForWholesalerSupportingTools) {
              dataSupportingTools.push(
                dataRaw.KeyFeaturesForWholesalerSupportingTools[key]
              );
            }

            const webPortalManagement = [];
            for (let key in dataRaw.KeyFeaturesForWholesalerWebPortalManagement) {
              webPortalManagement.push(
                dataRaw.KeyFeaturesForWholesalerWebPortalManagement[key]
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
      <HeroMembers 
        data={heroContent} 
        btnData={btnData} 
        backgroundHero={heroBackground}
        btnHero={true} 
      />
      <BenefitMembers
        textHeader={"FOR WHOLESALER"}
        textSubHeader={"WHAT WE OFFER"}
        data={offerContent}
      />
      <SupplierWork
        title={"HOW WHOLESALER WORKS"}
        content={contentWork}
        workBackground={workBackground}
      />
      <ProcessMembers processImg={processImage} />
      <ConditionMembers data={conditionContent} />
      <KeyFeatureMembers
        content={contentFeature}
        title={"KEY FEATURES FOR WHOLESALER"}
      />
    </div>
  );
};

export default Wholesaler;
