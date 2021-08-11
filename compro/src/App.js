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
import { Faq } from "./pages/Faq";
import { Tnc } from "./pages/Tnc";
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
import Customer from "./pages/members/Customer";
import SupplierList from "./pages/memberList/SupplierList";
import DistributorList from "./pages/memberList/DistributorList";
import axios from "axios"
import whatsapp2 from './assets/images/whatsapp2.png'

function App() {
  const mainUrl = 'https://nameless-sea-46356.herokuapp.com'
  const [url, setUrl] = useState();
  const [waNumber, setWaNumber] = useState();
  const [visitor, setVisitor] = useState({});

  useEffect(() => {
    const getItem = localStorage.getItem("language");
    if (getItem) {
      setUrl(`${mainUrl}/${getItem}`);
    } else {
      setUrl(`${mainUrl}/id`);
    }
    
    let Day = Number(new Date().getUTCDate())
    let Month = Number(new Date().getUTCMonth() + 1)
    let Year = Number(new Date().getUTCFullYear())

    axios.post(`${mainUrl}/visitor`,{
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

    axios.post(`${mainUrl}/visitorHistory`,{
      Day,
      Month,
      Year
    })
    .then( ({data}) =>{
    })
    .catch( (err) => {
      console.log(err)
    })

    fetch(url + `/ContactUs`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw resp;
      }
    })
    .then(({ message }) => {
      setWaNumber(message.ContactInformation.WhatsappNumber);
    })
    .catch((err) => {});
  }, [url]);

  const handleLanguage = (lang) => {
    if (lang === "en") {
      localStorage.setItem("language", lang);
      const getItem = localStorage.getItem("language");
      setUrl(`${mainUrl}/${getItem}`);
    }

    if (lang === "id") {
      localStorage.setItem("language", lang);
      const getItem = localStorage.getItem("language");
      setUrl(`${mainUrl}/${getItem}`);
    }
  };
  return (
    <ParallaxProvider>
      { url && ( 
        
      <Router>
        <Nav url={url} handleLanguage={handleLanguage} />
        <Switch>
          <Route exact path="/supplier-members">
            <MemberSupplier url={url} />
          </Route>
          <Route exact path="/wholesaler-members">
            <MembersWholesaler url={url} />
          </Route>
          <Route exact path="/reseller-members">
            <MembersReseller url={url} />
          </Route>
          <Route exact path="/customer-members">
            <Customer url={url} />
          </Route>
          <Route exact path="/supplier-list">
            <SupplierList url={url} mainUrl={mainUrl} />
          </Route>
          <Route exact path="/wholesaler-list">
            <DistributorList url={url} mainUrl={mainUrl} fromWholeSaler={true}/>
          </Route>
          <Route exact path="/reseller-list">
            <DistributorList url={url} mainUrl={mainUrl} fromWholeSaler={false}/>
          </Route>
          <Route path="/howItWorks">
            <HowItWorks url={url} />
          </Route>
          <Route path="/profile">
            <Profile url={url} mainUrl={mainUrl} />
          </Route>
          <Route path="/news/:id">
            <NewsDetails mainUrl={mainUrl} />
          </Route>
          <Route path="/news">
            <News mainUrl={mainUrl} />
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
          <Route path="/faq">
            <Faq url={url} />
          </Route>
          <Route path="/tnc">
            <Tnc url={url} />
          </Route>
          <Route path="/">
            <Home url={url} mainUrl={mainUrl} />
          </Route>
        </Switch>
        <Footer url={url} visitor={visitor}/>
      </Router>
      )}
      <a href={`http://wa.me/${waNumber}?text=Hallo%20Customer%20Care%20Traveli`}  target="_blank">
        <img className="floatingWA" src={whatsapp2}/>
      </a>
      { console.clear() }
    </ParallaxProvider>
  );
}

export default App;
