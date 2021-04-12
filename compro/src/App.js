import "./assets/css/SmoothScroll.css";
import "./assets/css/Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import axios from "axios"

function App() {
  const [url, setUrl] = useState(null);
  const [visitor, setVisitor] = useState({});

  useEffect(() => {
    const getItem = localStorage.getItem("language");
    if (getItem) {
      setUrl(`https://be.traveli.co.id/${getItem}`);
    } else setUrl(`https://be.traveli.co.id/id`);
    
    let Day = Number(new Date().getDate())
    let Month = Number(new Date().getMonth() + 1)
    let Year = Number(new Date().getFullYear())

    axios.post('https://be.traveli.co.id/visitor',{
      Day,
      Month,
      Year
    })
    .then( ({data}) =>{
      setVisitor(data.message)
    })
    .catch( (err) => {
      console.log(err)
    })
  }, [url]);

  const handleLanguage = (lang) => {
    if (lang === "en") {
      localStorage.setItem("language", lang);
      const getItem = localStorage.getItem("language");
      setUrl(`https://be.traveli.co.id/${getItem}`);
    }

    if (lang === "id") {
      localStorage.setItem("language", lang);
      const getItem = localStorage.getItem("language");
      setUrl(`https://be.traveli.co.id/${getItem}`);
    }
  };
  return (
    <ParallaxProvider>
      {/* <div  data-scroll-container> */}
      <Router>
        <Nav url={url} handleLanguage={handleLanguage} />
        <Switch>
          <Route exact path="/members/supplier">
            <MemberSupplier url={url} />
          </Route>
          <Route exact path="/members/wholesaler">
            <MembersWholesaler url={url} />
          </Route>
          <Route exact path="/members/reseller">
            <MembersReseller url={url} />
          </Route>
          <Route exact path="/member-list/supplier">
            <SupplierList url={url} />
          </Route>
          <Route exact path="/member-list/wholesaler">
            <DistributorList url={url} />
          </Route>
          <Route exact path="/travelikuy">
            <Travelikuy url={url} />
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
        <Footer url={url} visitor={visitor}/>
      </Router>

      {/* </div> */}
    </ParallaxProvider>
  );
}

export default App;
