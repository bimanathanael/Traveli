import { Link, useLocation } from "react-router-dom";
import logo3 from '../assets/images/traveli_white.png'
import '../assets/css/Nav.css';

export const Nav = () => {

  const location = useLocation()

  const navbarClass = "navbar navbar-expand-lg"
  const locationNow = location.pathname

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light"  id="mainNavbar">
        <Link className="nav-link logo-link" to="/">
          <img className="logo" src={logo3}/>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <nav className={navbarClass} id="mainNavbar">
        
        <div>
          <div className="collapse navbar-collapse mr-5" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link to="/solutions">
                  <a className={`nav-link dropdown-toggle ${locationNow == "/solutions" ? "blue-active" : ""} `} 
                  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" 
                  aria-haspopup="true" aria-expanded="false">
                    Solutions
                  </a>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">For Travel Services</a>
                  <a className="dropdown-item" href="#">For Transportation</a>
                  <a className="dropdown-item" href="#">For Lodging and Accommodation</a>
                  <a className="dropdown-item" href="#">For Leisure and Recreation</a>
                  <a className="dropdown-item" href="#">For Food and Beverages</a>
                  <a className="dropdown-item" href="#">For Other Services</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Company
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">News and Updates</a>
                  <a className="dropdown-item" href="#">Career</a>
                  <a className="dropdown-item" href="#">Contact Us</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="navbar-nav my-2 my-lg-0 pr-5 pt-2">
            <li className="nav-item dropdown space-left pt-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ID
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">ID</a>
                <a className="dropdown-item" href="#">EN</a>
              </div>
            </li>
            <li className="nav-item active pt-2 w-100">
              <a className="nav-link" href="#">Login </a>
            </li>
            <li className="nav-item space-top">
              <button type="button" className="btn btn-join">Join Us</button>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}
