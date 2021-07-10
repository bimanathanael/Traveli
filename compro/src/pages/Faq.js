import React from "react";

import { useEffect, useState } from "react";
import arrowBlue from "../assets/images/members/arrow_blue.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  conditionHeader: {
    color: "#07AED6",
    marginBottom: "4rem",
    textAlign: "center",
  },
  conditionContent: {
    width: "50%",
    margin: "auto auto",
    [themes.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  cardContainer: {
    margin: "2rem 0",
  },
  displayFlexCenter: {
    display: "flex",
    alignItems: "center",
  },
  cardArrow: {
    padding: ".2rem",
    backgroundColor: "#F9EE6F",
    borderRadius: ".5rem",
    marginRight: "2rem",
  },
  cardText: {
    padding: "1.5rem 1.5rem 1rem 1.5rem",
    borderRadius: ".5rem",
    backgroundColor: "white",
    width: "100%",
  },
}));

export const Faq = ({ url }) => {
  const classes = useStyles();
  const [faq, setFaq] = useState("");
  let allFaq = []

  useEffect(() => {
    fetch(`${url}/FAQ`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setFaq(message);
      })
      .catch((err) => {});
  }, [url]);

  if(faq != ""){
    for (const FAQ in faq) {
      if( faq[FAQ].Question != '') {
        allFaq.push(faq[FAQ])
      }
    }
  }

  const noFaq = () => {
    return (
      <div>
        <hr/>
        <hr/>
        <center className="headingOffer mobile-1">
          Currently no FAQ
        </center>
        <hr/>
        <hr/>
      </div>
    )
  }

  return (
    <>
      <div className="containerNews">
        { allFaq.length == 0 && noFaq() }
        <div className="row m-auto">
          {allFaq.map((oneFaq, idx) => (
              <div
              key={idx}
              className={`col-12 ${classes.cardContainer}`}
              >
                <div className={classes.displayFlexCenter}>
                  <div className={classes.cardArrow}>
                    <img src={arrowBlue} alt="arrow" />
                  </div>
                  <div className={classes.cardText}>
                    <p style={{ color: "black", fontSize: "1rem" }}>
                      <strong> Q </strong> : {oneFaq.Question}
                    </p>
                    <p style={{ color: "black", fontSize: "1rem" }}>
                      <strong> A </strong> : {oneFaq.Answer}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};
