import React from "react";
import FeatureMemberTemp from "./FeatureMemberTemp";
import { makeStyles } from "@material-ui/core";
import backgroundKey from "../../assets/images/members/feature-background.png";
import ScrollAnimation from "react-animate-on-scroll";

// Assets
import featureOne from "../../assets/images/members/key_1.png";
import featureTwo from "../../assets/images/members/key_2.png";
import featureThree from "../../assets/images/members/key_3.png";

const useStyles = makeStyles((themes) => ({
  containerKey: {
    backgroundImage: `url(${backgroundKey})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // width: '100%',
    // minHeight: "170rem",
    paddingTop: "3rem",
  },
  stylePaddingOne: {
    paddingTop: "5rem",
    [themes.breakpoints.down("sm")]: {
      paddingTop: "2rem",
    },
  },
  stylePaddingTwo: {
    paddingTop: "15rem",
    [themes.breakpoints.down("sm")]: {
      paddingTop: "2rem",
    },
  },
  stylePaddingThree: {
    paddingTop: "20rem",
    [themes.breakpoints.down("sm")]: {
      paddingTop: "2rem",
    },
  },
  titleContent: {
    margin: "5rem auto 0rem auto",
    textAlign: "center",
    color: "#07AED6",
    maxWidth: "40%",
    [themes.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const KeyFeatureMembers = ({ content, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.containerKey}>
      <div>
        <div className={`col-12 ${classes.titleContent}`}>
          <ScrollAnimation animateIn="zoomIn">
            <h2>{title}</h2>
          </ScrollAnimation>
        </div>
      </div>
      {content && (
        <>
          <div className={classes.stylePaddingOne}>
            <FeatureMemberTemp
              title={content.one.title}
              imageContent={featureOne}
              data={content.one.data}
              left={true}
            />
          </div>
          <div className={classes.stylePaddingTwo}>
            <FeatureMemberTemp
              title={content.two.title}
              imageContent={featureTwo}
              data={content.two.data}
              left={false}
            />
          </div>
          <div className={classes.stylePaddingThree}>
            <FeatureMemberTemp
              title={content.three.title}
              imageContent={featureThree}
              data={content.three.data}
              left={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default KeyFeatureMembers;
