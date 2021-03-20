import './assets/css/SmoothScroll.css';
import './assets/css/Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import './assets/css/App.css';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ContactUs } from './pages/ContactUs';
import { Promo } from './pages/Promo';
import { Login } from './pages/Login';
import { News } from './pages/News';
import { JoinUs } from './pages/JoinUs';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer'
import { ParallaxProvider } from "react-scroll-parallax";

function App() {

  const scrollRef = React.createRef();
  // useEffect(()=>{
    // const scroll = new LocomotiveScroll({
      // el: document.querySelector('[data-scroll-container]'),
      // smooth: true
    // });

  // },[])

  return (
    <ParallaxProvider >
      {/* <div  data-scroll-container> */}
      <Router>
        <Nav/>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/promo">
            <Promo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/joinUs">
            <JoinUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>

      {/* </div> */}
    </ParallaxProvider>
  );
}

export default App;
