import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

const Navigation = ({ pages, section, language, mainParam }) => {
  let secondUrl;
  let thirdurl;
  if (pages) {
    secondUrl = `/cms/${mainParam}/${pages}`;
  }
  if (section) {
    thirdurl = `/cms/${mainParam}/${pages}/${section}/update`;
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        {pages && (
          <div>
            <a href={secondUrl}>{pages.split(/(?=[A-Z])/).join(" ")}</a>
          </div>
        )}
        {section && (
          <div>
            <RiArrowRightSFill />
            <a href={thirdurl}>{section.split(/(?=[A-Z])/).join(" ")}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
