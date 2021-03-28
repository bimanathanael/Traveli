import React, { useState, useEffect } from "react";

// package
import axios from "axios";

// component
import HeroMembers from "../../components/members/HeroMembers";
import BenefitMembers from "../../components/members/BenefitMembers";
import SupplierWorkReseller from "../../components/members/SupplierWorkReseller";
import ProcessMembers from "../../components/members/ProcessMembers";
import ConditionMembers from "../../components/members/ConditionMembers";
import KeyFeatureMembers from "../../components/members/KeyFeatureMembers";

// asset
import heroBackground from "../../assets/images/members/reseller/hero.png";
import WorkOneAgency from "../../assets/images/members/reseller/agency/work-1.png";
import WorkTwoAgency from "../../assets/images/members/reseller/agency/work-2.png";
import WorkThreeAgency from "../../assets/images/members/reseller/agency/work-3.png";
import WorkFourAgency from "../../assets/images/members/reseller/agency/work-4.png";
import WorkOneCorporate from "../../assets/images/members/reseller/corporate/work-1.png";
import WorkTwoCorporate from "../../assets/images/members/reseller/corporate/work-2.png";
import WorkThreeCorporate from "../../assets/images/members/reseller/corporate/work-3.png";
import WorkFourCorporate from "../../assets/images/members/reseller/corporate/work-4.png";
import processImage from "../../assets/images/members/reseller/process.png";
import workBackground from "../../assets/images/members/reseller/bg.png";

const Reseller = ({ url }) => {
  const [contentWorkAgent, setContentWorkAgent] = useState(null);
  const [contentWorkCorporate, setContentWorkCorporate] = useState(null);
  const [contentFeature, setContentFeature] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerContent, setOfferContent] = useState(null);
  const [conditionContent, setConditionContent] = useState(null);
  useEffect(() => {
    axios
      .get(`${url}/MembersReseller`)
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

          // How Corporate Works
          if (dataRaw.HowCorporateWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOneCorporate,
                title: dataRaw.HowCorporateWorksTitle.Title1,
                desc: dataRaw.HowCorporateWorksDescription.Description1,
              },
              two: {
                image: WorkTwoCorporate,
                title: dataRaw.HowCorporateWorksTitle.Title2,
                desc: dataRaw.HowCorporateWorksDescription.Description2,
              },
              three: {
                image: WorkThreeCorporate,
                title: dataRaw.HowCorporateWorksTitle.Title3,
                desc: dataRaw.HowCorporateWorksDescription.Description3,
              },
              four: {
                image: WorkFourCorporate,
                title: dataRaw.HowCorporateWorksTitle.Title4,
                desc: dataRaw.HowCorporateWorksDescription.Description4,
              },
            };
            setContentWorkCorporate(supplierWorks);
          }

          if (dataRaw.HowAgencyOrSubAgentWorksTitle) {
            const supplierWorks = {
              one: {
                image: WorkOneAgency,
                title: dataRaw.HowAgencyOrSubAgentWorksTitle.Title1,
                desc: dataRaw.HowAgencyOrSubAgentWorksDescription.Description1,
              },
              two: {
                image: WorkTwoAgency,
                title: dataRaw.HowAgencyOrSubAgentWorksTitle.Title2,
                desc: dataRaw.HowAgencyOrSubAgentWorksDescription.Description2,
              },
              three: {
                image: WorkThreeAgency,
                title: dataRaw.HowAgencyOrSubAgentWorksTitle.Title3,
                desc: dataRaw.HowAgencyOrSubAgentWorksDescription.Description3,
              },
              four: {
                image: WorkFourAgency,
                title: dataRaw.HowAgencyOrSubAgentWorksTitle.Title4,
                desc: dataRaw.HowAgencyOrSubAgentWorksDescription.Description4,
              },
            };
            setContentWorkAgent(supplierWorks);
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
  }, [url]);

  return (
    <div className="members-page">
      <HeroMembers data={heroContent} backgroundHero={heroBackground} />
      <BenefitMembers
        textHeader={"FOR RESELLER"}
        textSubHeader={"WHAT WE OFFER"}
        data={offerContent}
      />
      <SupplierWorkReseller
        title={"HOW RESELLER WORKS"}
        contentAgent={contentWorkAgent}
        contentCorporate={contentWorkCorporate}
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
