import { Link, useLocation } from "react-router-dom";
import logo3 from '../assets/images/traveli_white.png'
import distributorImg from '../assets/images/distributorImg.png'
import supplierImg from '../assets/images/supplierImg.png'
import resellerImg from '../assets/images/resellerImg.png'
import '../assets/css/Nav.css';

export const Nav = () => {

  const location = useLocation()

  const navbarClass = "navbar navbar-expand-lg navbar-light"
  const locationNow = location.pathname

  return (
    <>
      <nav className={navbarClass}  id="mainNavbar">
        <Link className="nav-link logo-link" to="/">
          <img className="logo" src={logo3}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-4">
            <li className="nav-item">
              <Link to="/howitworks">
                <a className={`nav-link text-white ${locationNow == "/howitworks" ? "yellow-underline" : ""} `} >
                  How It Works
                </a>
              </Link>
              {/* <a className="nav-link text-white" href="#">How It Works <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item dropdown ml-3 members-dropdown supplier-menu">
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Members
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-8">
                        <a className="dropdown-item" href="#">SUPPLIER</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={supplierImg}/>
                      </div>
                      <div className="col-md-7 p-0">
                        <p>
                          Pemilik produk dengan credensial khusus. Dapat mengubah dan mental produknya
                          kedalam Traveli store.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 borderLeft">
                    <div className="row">
                      <div className="col-md-8">
                        <a className="dropdown-item menu-heading" href="#">WHOLESELLER</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={distributorImg}/>
                      </div>
                      <div className="col-md-7 p-0">
                        <p>
                          Pemilik produk dengan credensial khusus. Dapat mengubah dan mental produknya
                          kedalam Traveli store.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 borderLeft">
                    <div className="row">
                      <div className="col-md-8">
                        <a className="dropdown-item menu-heading" href="#">RESELLER</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={resellerImg}/>
                      </div>
                      <div className="col-md-7 p-0">
                        <p>
                          Pemilik produk dengan credensial khusus. Dapat mengubah dan mental produknya
                          kedalam Traveli store.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown ml-3 member-list-dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Member List
              </a>
              <div className="dropdown-menu p23" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-md-6">
                      <a className="dropdown-item menu-heading" href="#">SUPPLIER LIST</a>
                      <p>
                        Pemilik produk dengan credensial khusus. Dapat mengubah dan mental produknya
                        kedalam Traveli store.
                      </p>
                  </div>
                  <div className="col-md-6 borderLeft">
                      <a className="dropdown-item menu-heading" href="#">WHOLESALER</a>
                      <p>
                        Pemilik produk dengan credensial khusus. Dapat mengubah dan mental produknya
                        kedalam Traveli store.
                      </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/travelikuy">
                <a className={`nav-link text-white ml-4 ${locationNow == "/travelikuy" ? "yellow-underline" : ""} `} >
                  TraveliKuy
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/promo">
                <a className={`nav-link text-white ml-4 ${locationNow == "/promo" ? "yellow-underline" : ""} `} >
                  Promo
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown ml-2">
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">News and Updates</a>
                <a className="dropdown-item" href="#">Contact Us</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0 pr-5 pt-2">
            <li className="nav-item dropdown space-left">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ID
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">ID</a>
                <a className="dropdown-item" href="#">EN</a>
              </div>
            </li>
            <li className="nav-item w-100">
              <button type="button" className="btn btn-login">Login</button>
            </li>
            <li className="nav-item w-100">
              <button type="button" className="btn btn-join">Join Us</button>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* <nav className={navbarClass} id="mainNavbars">
        
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
            <li className="nav-item dropdown space-left">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ID
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">ID</a>
                <a className="dropdown-item" href="#">EN</a>
              </div>
            </li>
            <li className="nav-item active w-100">
              <a className="nav-link" href="#">Login </a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-join">Join Us</button>
            </li>
          </ul>
        </div>

      </nav> */}
    </>
  )
}
