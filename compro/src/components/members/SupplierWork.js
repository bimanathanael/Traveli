import React from "react";
import SupplierWorkTemp from "./SupplierWorkTemp";
import ScrollAnimation from "react-animate-on-scroll";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  supplierContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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

const SupplierWork = ({
  content,
  title,
  workBackground,
  customerPage = false,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.supplierContainer}
      style={{
        backgroundImage: `url(${workBackground})`,
        minHeight: customerPage ? "80vh" : "252vh",
      }}
    >
      <div>
        <div className={`col-12 ${classes.titleContent}`}>
          <ScrollAnimation animateIn="zoomIn">
            <h2>{title}</h2>
          </ScrollAnimation>
        </div>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {content && (
            <>
              {content.one && (
                <SupplierWorkTemp
                  contentSupplier={content.one.image}
                  textTitle={content.one.title}
                  textSub={content.one.desc}
                  supplier={content.one.supplier}
                  left={true}
                />
              )}
              {content.two && (
                <SupplierWorkTemp
                  contentSupplier={content.two.image}
                  textTitle={content.two.title}
                  textSub={content.two.desc}
                  supplier={content.two.supplier}
                  left={false}
                />
              )}
              {content.three && (
                <SupplierWorkTemp
                  contentSupplier={content.three.image}
                  textTitle={content.three.title}
                  textSub={content.three.desc}
                  supplier={content.three.supplier}
                  left={true}
                />
              )}
              {content.four && (
                <SupplierWorkTemp
                  contentSupplier={content.four.image}
                  textTitle={content.four.title}
                  textSub={content.four.desc}
                  supplier={content.four.supplier}
                  left={false}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierWork;
