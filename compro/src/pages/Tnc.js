import React from "react";

import { useEffect, useState } from "react";
import arrowBlue from "../assets/images/members/arrow_blue.png";
import { makeStyles } from "@material-ui/core";
import parse from "html-react-parser";

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

export const Tnc = ({ url }) => {
  const classes = useStyles();
  const [tnc, setTnc] = useState("");
  let allFaq = []

  useEffect(() => {
    fetch(`${url}/TermsCondition`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setTnc(message.TermsCondition.TermsCondition);
      })
      .catch((err) => {});
  }, [url]);

  return (
    <>
      <div className="containerNews">
        <div className="row m-auto">
          <p className="shortDesc">{parse(tnc)}</p>
        </div>
      </div>
    </>
  );
};
