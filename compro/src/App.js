import "./assets/css/SmoothScroll.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./assets/css/App.css";

import { Home } from "./pages/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import MemberSupplier from "./pages/members/Supplier";
import MembersWholesaler from "./pages/members/Wholesaler";
import MembersReseller from "./pages/members/Reseller";
import Travelikuy from "./pages/Travelikuy";
import SupplierList from "./pages/memberList/SupplierList";
import DistributorList from "./pages/memberList/DistributorList";

function App() {
  const scrollRef = React.createRef();
  // useEffect(()=>{
  // const scroll = new LocomotiveScroll({
  // el: document.querySelector('[data-scroll-container]'),
  // smooth: true
  // });

  // },[])

  return (
    <ParallaxProvider>
      {/* <div  data-scroll-container> */}
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <SupplierList /> */}
            {/* <DistributorList /> */}
            {/* <Travelikuy /> */}
            {/* <MembersReseller /> */}
            {/* <MembersWholesaler /> */}
            <MemberSupplier />
          </Route>
          <Route exact path="/members">
            <Home />
          </Route>
          <Route exact path="/member-list/supplier"></Route>
          <Route exact path="/member-list/distributor"></Route>
        </Switch>
      </Router>
      {/* </div> */}
    </ParallaxProvider>
  );
}

export default App;
