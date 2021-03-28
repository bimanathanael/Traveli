import "./assets/css/SmoothScroll.css";
import "./assets/css/Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./assets/css/App.css";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ContactUs } from "./pages/ContactUs";
import { Promo } from "./pages/Promo";
import { Login } from "./pages/Login";
import { News } from "./pages/News";
import { NewsDetails } from "./pages/NewsDetails";
import { JoinUs } from "./pages/JoinUs";
import { HowItWorks } from "./pages/HowItWorks";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import MemberSupplier from "./pages/members/Supplier";
import MembersWholesaler from "./pages/members/Wholesaler";
import MembersReseller from "./pages/members/Reseller";
import Travelikuy from "./pages/Travelikuy";
import SupplierList from "./pages/memberList/SupplierList";
import DistributorList from "./pages/memberList/DistributorList";

function App() {
  const url = "https://pacific-hamlet-79377.herokuapp.com/";
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
        <Nav url={url} />
        <Switch>
          <Route exact path="/members/supplier">
            <MemberSupplier />
          </Route>
          <Route exact path="/members/wholesaler">
            <MembersWholesaler />
          </Route>
          <Route exact path="/members/reseller">
            <MembersReseller />
          </Route>
          <Route exact path="/member-list/supplier">
            <SupplierList />
          </Route>
          <Route exact path="/member-list/wholesaler">
            <DistributorList />
          </Route>
          <Route exact path="/travelikuy">
            <Travelikuy />
          </Route>
          <Route path="/howItWorks">
            <HowItWorks url={url} />
          </Route>
          <Route path="/profile">
            <Profile url={url} />
          </Route>
          <Route path="/news/:id">
            <NewsDetails url={url} />
          </Route>
          <Route path="/news">
            <News url={url} />
          </Route>
          <Route path="/contactUs">
            <ContactUs url={url} />
          </Route>
          <Route path="/promo">
            <Promo url={url} />
          </Route>
          <Route path="/login">
            <Login url={url} />
          </Route>
          <Route path="/joinUs">
            <JoinUs url={url} />
          </Route>
          <Route path="/">
            <Home url={url} />
          </Route>
        </Switch>
        <Footer url={url} />
      </Router>

      {/* </div> */}
    </ParallaxProvider>
  );
}

export default App;
