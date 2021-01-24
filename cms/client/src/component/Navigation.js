import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { Container } from "react-bootstrap";
const Navigation = ({ pages, section, language, mainParam }) => {
  const firstUrl = `/cms/${mainParam}`;
  let secondUrl;
  let thirdurl;
  if (pages) {
    secondUrl = `/cms/${mainParam}/update/${pages}`;
  }
  if (section) {
    thirdurl = `/cms/${mainParam}/update/${pages}/${section}`;
  }
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <a href={firstUrl}>{language}</a>
        {pages && (
          <div>
            <RiArrowRightSFill />
            <a href={secondUrl}>{pages}</a>
          </div>
        )}
        {section && (
          <div>
            <RiArrowRightSFill />
            <a href={thirdurl}>{section}</a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navigation;
