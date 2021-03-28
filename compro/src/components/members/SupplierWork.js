import React from "react";
import SupplierWorkTemp from "./SupplierWorkTemp";
import ScrollAnimation from "react-animate-on-scroll";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  supplierContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "140vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "110vh",
    },
  },
  titleContent: {
    color: "#07AED6",
    margin: "2rem auto",
    textAlign: "center",
    width: "80%",
  },
}));

const SupplierWork = ({ content, title, workBackground }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.supplierContainer}
      style={{ backgroundImage: `url(${workBackground})` }}
    >
      <div>
        <div className={`col-12 ${classes.titleContent}`}>
          <ScrollAnimation animateIn="zoomIn">
            <h2>{title}</h2>
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

export default SupplierWork;
