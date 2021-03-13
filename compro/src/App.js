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
