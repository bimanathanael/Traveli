import React from "react";
import { makeStyles } from "@material-ui/core";
import processBackground from "../../assets/images/travelikuy/bg_customer.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    minHeight: "110vh",
    backgroundImage: `url(${processBackground})`,
    [theme.breakpoints.down("sm")]: {
      minHeight: "30vh",
    },
  },
}));
const ProcessCustomer = ({ processImg }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ margin: "2rem 0 0 0" }}>
      <img src={processImg} alt="proccess traveli" width="100%" />
    </div>
  );
};

export default ProcessCustomer;
