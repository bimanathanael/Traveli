import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div style={{ textAlign: "left" }}>
        <a href="/cms/en">Traveli CMS</a>
        <span className="ml-1">&copy; 2021</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
