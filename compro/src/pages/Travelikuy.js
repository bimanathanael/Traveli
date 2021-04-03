import React, { useState, useEffect } from "react";

// package
import axios from "axios";
import { Button, makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

// component
import HeroMembers from "../components/members/HeroMembers";
import BenefitMembers from "../components/members/BenefitMembers";
import SupplierWork from "../components/members/SupplierWork";
import ProcessMembers from "../components/members/ProcessMembers";
import ProcessCustomer from "../components/members/ProcessCustomers";
import ConditionMembers from "../components/members/ConditionMembers";
import KeyFeatureMembers from "../components/members/KeyFeatureMembers";

// asset
import heroBackground from "../assets/images/travelikuy/hero.png";
import WorkOnePetra from "../assets/images/travelikuy/petra/work-1.png";
import WorkTwoPetra from "../assets/images/travelikuy/petra/work-2.png";
import WorkThreePetra from "../assets/images/travelikuy/petra/work-3.png";
import WorkFourPetra from "../assets/images/travelikuy/petra/work-4.png";
import WorkOneCustomer from "../assets/images/travelikuy/customer/work-1.png";
import WorkTwoCustomer from "../assets/images/travelikuy/customer/work-2.png";
import processImage from "../assets/images/travelikuy/process.png";
import processCustomer from "../assets/images/travelikuy/process-customer.png";
import workBackground from "../assets/images/travelikuy/bg_petra.png";

const useStyles = makeStyles((theme) => ({
  buttonOption: {
    backgroundColor: "white",
    width: "30%",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  optionTitle: {
    textAlign: "center",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2rem auto",
    },
  },
}));

const Supplier = ({ url }) => {
  const [contentPetra, setContentPetra] = useState(null);
  const [featurePetra, setFeaturePetra] = useState(null);
  const [heroContent, setHeroContent] = useState(null);
  const [offerPetra, setOfferPetra] = useState(null);
  const [conditionPetra, setConditionPetra] = useState(null);
  const [titleWork, setTitleWork] = useState(`HOW PETRA WORKS`);

  const [petraPage, setPetraPage] = useState(true);

  const [benefitTitle, setBenefitTitle] = useState("FOR PETRA");

  const [contentCustomer, setContentCustomer] = useState(null);
  const [offerCustomer, setOfferCustomer] = useState(null);

  const [triggerSub, setTriggerSub] = useState(`petra`);
  const [colorButtonOne, setColorButtonOne] = useState("yellow");
  const [colorButtonTwo, setColorButtonTwo] = useState("white");

  const [oneClicked, setOneClicked] = useState(false);
  const [twoClicked, setTwoClicked] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}/TraveliKuy`)
      .then((res) => {
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
            const ordered = Object.entries(dataRaw.BenefitsForPetraTitle)
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});
            const orderedDesc = Object.entries(
              dataRaw.BenefitsForPetraDescription
            )
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});

            for (let key in ordered) {
              whatWeOffer.push({ title: dataRaw.BenefitsForPetraTitle[key] });
            }
            let index = 0;
            for (let key in orderedDesc) {
              whatWeOffer[index].description =
                dataRaw.BenefitsForPetraDescription[key];
              index++;
            }
            setOfferPetra(whatWeOffer);
          }

          // What We Offer Customer
          if (dataRaw.BenefitForCustomerTitle) {
            let whatWeOffer = [];
            const ordered = Object.entries(dataRaw.BenefitForCustomerTitle)
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});
            const orderedDesc = Object.entries(
              dataRaw.BenefitForCustomerDescription
            )
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});

            for (let key in ordered) {
              whatWeOffer.push({ title: dataRaw.BenefitForCustomerTitle[key] });
            }
            let index = 0;
            for (let key in orderedDesc) {
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
                image: WorkOnePetra,
                title: dataRaw.HowPetraWorksTitle.Title1,
                desc: dataRaw.HowPetraWorksDescription.Description1,
              },
              two: {
                image: WorkTwoPetra,
                title: dataRaw.HowPetraWorksTitle.Title2,
                desc: dataRaw.HowPetraWorksDescription.Description2,
              },
              three: {
                image: WorkThreePetra,
                title: dataRaw.HowPetraWorksTitle.Title3,
                desc: dataRaw.HowPetraWorksDescription.Description3,
              },
              four: {
                image: WorkFourPetra,
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
                image: WorkOneCustomer,
                title: dataRaw.HowCostumerWorksTitle.Title1,
                desc: dataRaw.HowCostumerWorksDescription.Description1,
              },
              two: {
                image: WorkTwoCustomer,
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
  }, [url]);

  const handleButtonOne = () => {
    setColorButtonOne("yellow");
    setColorButtonTwo("white");
    setOneClicked(true);
    setTwoClicked(false);
    setTriggerSub("petra");
    setPetraPage(true);
    setBenefitTitle("FOR PETRA");
    setTitleWork("HOW PETRA WORKS");
  };

  const handleButtonTwo = () => {
    setColorButtonOne("white");
    setColorButtonTwo("yellow");
    setOneClicked(false);
    setTwoClicked(true);
    setTriggerSub("customer");
    setPetraPage(false);
    setTitleWork("HOW CUSTOMER WORKS");
    setBenefitTitle("FOR CUSTOMERS");
  };

  const classes = useStyles();

  return (
    <div className="members-page">
      <HeroMembers
        data={heroContent}
        backgroundHero={heroBackground}
        footer={false}
      />
      <div style={{ margin: "4rem auto 0 auto" }}>
        <ScrollAnimation animateIn="fadeIn">
          <div className={classes.optionTitle}>
            <h6>{`DO YOU WANT TO HAVE EXTRA INCOME?`}</h6>
          </div>
          <div className={`button-container ${classes.buttonOption}`}>
            <Button
              style={{
                backgroundColor: colorButtonOne,
                borderRadius: "10rem",
                color: oneClicked ? "#07AED6" : "#707070",
                width: "50%",
              }}
              className="button-temp"
              onClick={handleButtonOne}
            >
              {`PERSONAL TRAVELI (PETRA)`}
            </Button>
            <Button
              style={{
                backgroundColor: colorButtonTwo,
                borderRadius: "10rem",
                color: twoClicked ? "#07AED6" : "#707070",
                width: "50%",
              }}
              className="button-temp"
              onClick={handleButtonTwo}
            >
              {`CUSTOMER`}
            </Button>
          </div>
        </ScrollAnimation>
      </div>
      <BenefitMembers
        textHeader={"BENEFITS"}
        textSubHeader={benefitTitle}
        data={petraPage ? offerPetra : offerCustomer}
      />
      <SupplierWork
        title={titleWork}
        content={petraPage ? contentPetra : contentCustomer}
        workBackground={workBackground}
      />
      {petraPage ? (
        <>
          <ProcessMembers processImg={processImage} />
          <ConditionMembers data={conditionPetra} />
          <KeyFeatureMembers
            content={featurePetra}
            title={"KEY FEATURES FOR PETRA"}
          />
        </>
      ) : (
        <ProcessCustomer processImg={processCustomer} />
      )}
    </div>
  );
};

export default Supplier;
