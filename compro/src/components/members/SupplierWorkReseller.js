import React, { useState, useEffect } from "react";
import SupplierWorkTemp from "./SupplierWorkTemp";
import ScrollAnimation from "react-animate-on-scroll";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  supplierContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "140vh",
  },
  buttonOptionTitle: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      textAlign: "center",
      margin: "0 auto 1rem auto ",
    },
  },
}));

const SupplierWorkReseller = ({
  contentAgent,
  contentCorporate,
  title,
  workBackground,
}) => {
  const classes = useStyles();

  const [triggerSub, setTriggerSub] = useState(`wholesaler`);
  const [colorButtonOne, setColorButtonOne] = useState("yellow");
  const [colorButtonTwo, setColorButtonTwo] = useState("white");

  const [oneClicked, setOneClicked] = useState(false);
  const [twoClicked, setTwoClicked] = useState(false);

  const [content, setContent] = useState(contentAgent);

  useEffect(() => {
    setContent(contentAgent);
    if (contentAgent && contentCorporate) {
      if (triggerSub === "agent") {
        setContent(contentAgent);
      }

      if (triggerSub === "corporate") {
        setContent(contentCorporate);
      }
    }
  }, [triggerSub, contentCorporate, contentAgent]);

  const handleButtonOne = () => {
    setColorButtonOne("yellow");
    setColorButtonTwo("white");
    setOneClicked(true);
    setTwoClicked(false);
    setTriggerSub("agent");
  };

  const handleButtonTwo = () => {
    setColorButtonOne("white");
    setColorButtonTwo("yellow");
    setOneClicked(false);
    setTwoClicked(true);
    setTriggerSub("corporate");
  };

  return (
    <div
      className={classes.supplierContainer}
      style={{ backgroundImage: `url(${workBackground})` }}
    >
      <div className="row">
        <div
          className="col-12"
          style={{
            color: "#07AED6",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <ScrollAnimation animateIn="zoomIn">
            <h2>{title}</h2>
          </ScrollAnimation>
        </div>
        <div style={{ margin: "2rem auto 0 auto" }}>
          <ScrollAnimation animateIn="fadeIn">
            <div className={classes.buttonOptionTitle}>
              <h6>{`ARE YOU AN AGENT OR RESELLER LOOKING TO GAIN A COMPETITIVE ADVANTAGE?`}</h6>
            </div>
            <div
              className="button-container"
              style={{
                backgroundColor: "white",
                width: "60%",
                margin: "2rem auto",
              }}
            >
              <Button
                style={{
                  backgroundColor: colorButtonOne,
                  borderRadius: "10rem",
                  fontFamily: "Bristone",
                  color:
                    oneClicked || colorButtonOne === "yellow"
                      ? "#07AED6"
                      : "#707070",
                  width: "50%",
                }}
                className="button-temp"
                onClick={handleButtonOne}
              >
                {`AGENCY OR SUB-AGENT`}
              </Button>
              <Button
                style={{
                  fontFamily: "Bristone",
                  backgroundColor: colorButtonTwo,
                  borderRadius: "10rem",
                  color:
                    twoClicked || colorButtonTwo === "yellow"
                      ? "#07AED6"
                      : "#707070",
                  width: "50%",
                }}
                className="button-temp"
                onClick={handleButtonTwo}
              >
                {`CORPORATE`}
              </Button>
            </div>
          </ScrollAnimation>
        </div>
        {content && (
          <>
            {content.one && (
              <SupplierWorkTemp
                contentSupplier={content.one.image}
                textTitle={content.one.title}
                textSub={content.one.desc}
                left={true}
              />
            )}
            {content.two && (
              <SupplierWorkTemp
                contentSupplier={content.two.image}
                textTitle={content.two.title}
                textSub={content.two.desc}
                left={false}
              />
            )}
            {content.three && (
              <SupplierWorkTemp
                contentSupplier={content.three.image}
                textTitle={content.three.title}
                textSub={content.three.desc}
                left={true}
              />
            )}
            {content.four && (
              <SupplierWorkTemp
                contentSupplier={content.four.image}
                textTitle={content.four.title}
                textSub={content.four.desc}
                left={false}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SupplierWorkReseller;
