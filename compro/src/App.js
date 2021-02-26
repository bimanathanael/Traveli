import './assets/css/SmoothScroll.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import './assets/css/App.css';

import { Home } from './pages/Home';
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
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        {/* </div> */}
    </ParallaxProvider>
  );
}

export default App;
