import "../assets/css/Nav.css";
import { Link, useLocation, useParams } from "react-router-dom";
import logo3 from "../assets/images/traveli_white2.png";
import wholesalerImg from "../assets/images/wholesalerImg.png";
import suppImg from "../assets/images/supplierImg.png";
import resellerImg from "../assets/images/resellerImg.png";
import customerImg from "../assets/images/customerImg.png";

export const Nav = ({ handleLanguage }) => {
  const location = useLocation();

  let navbarClass = "navbar navbar-expand-lg navbar-light ";
  const locationNow = location.pathname.toLowerCase();

  let aboutUsUnderline = false;
  let memberUnderline = false;
  let blackText = false
  let memberListUnderline = false;

  if (
    locationNow == "/profile" ||
    locationNow == "/news" ||
    locationNow.slice(0, 5) === "/news" ||
    locationNow == "/contactus"
  ) {
    aboutUsUnderline = true;
    navbarClass += "navBlue";
  } else if (
    locationNow == "/member-list/supplier" ||
    locationNow == "/member-list/wholesaler"
  ) {
    memberListUnderline = true;
  } else if (
    locationNow == "/members/supplier" ||
    locationNow == "/members/wholesaler" ||
    locationNow == "/members/reseller" ||
    locationNow == "/members/customer"
  ) {
    blackText = true
    memberUnderline = true;
  } else if (
    locationNow == "/promo" ||
    locationNow == "/login" ||
    locationNow == "/joinus" ||
    locationNow == "/howitworks"
  ) {
    navbarClass += "navBlue";
  } else if (
    locationNow == "/travelikuy"
  ) {
    blackText = true
  }

  const handleLanguageButton = (lang) => {
    handleLanguage(lang);
    window.location.reload();
  };

  return (
    <>
      <nav className={navbarClass} id="mainNavbar">
        <a href="/">
          <img className="logo" src={logo3} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
            <li className="nav-item mobile-center">
              <a
                className={`mobile-center mr-3 nav-link text-white ${
                  locationNow.toLocaleLowerCase() == "/howitworks"
                    ? "yellow-underline"
                    : ""
                } `}
                id="howItWorks" href="/howItWorks"
              >
                How It Works
              </a>
            </li>
            <li className="nav-item dropdown ml-3 members-dropdown supplier-menu no-mobile">
              <a
                className={`nav-link text-white dropdown-toggle ${
                  memberUnderline ? "yellow-underline" : "" 
                } `}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Members
              </a>
              <div
                className="dropdown-menu no-mobile"
                aria-labelledby="navbarDropdown"
              >
                <div className="row">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-8">
                        <a className="dropdown-item menu-heading" href="/members/supplier">
                          SUPPLIER
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={suppImg} />
                      </div>
                      <div className="col-md-7 p-0">
                        <p className="mb-0">
                          Pemilik produk dengan credential khusus. Dapat mengunggah dan menjual
                          produknya ke dalam Traveli Store 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderLeft">
                    <div className="row">
                      <div className="col-md-8">
                        <a href="/members/wholesaler" className="dropdown-item menu-heading">
                          WHOLESALER
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={wholesalerImg} />
                      </div>
                      <div className="col-md-7 p-0">
                        <p className="mb-0">
                          Pembeli, penjual, dan penyuplai produk ke jaringan yang dimiliki dengan
                          credential khusus dan dapat bertransaksi B2B 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderLeft">
                    <div className="row">
                      <div className="col-md-8">
                        <a href="/members/reseller" className="dropdown-item menu-heading">
                          RESELLER
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={resellerImg} />
                      </div>
                      <div className="col-md-7 p-0">
                        <p className="mb-0">
                          Down-line distributor yang memiliki market yang luas dan variatif, dapat langsung 
                          menjual ke End Customer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderLeft">
                    <div className="row">
                      <div className="col-md-8">
                        <a href="/members/customer" className="dropdown-item menu-heading">
                          CUSTOMER
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 p-0">
                        <img className="membersImg" src={customerImg} />
                      </div>
                      <div className="col-md-7 p-0">
                        <p className="mb-0">
                          Down-line distributor yang memiliki market yang luas dan variatif, dapat langsung 
                          menjual ke End Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown ml-3 members-dropdown supplier-menu mobile-only">
              <a
                className={`nav-link text-white dropdown-toggle ${
                  memberUnderline ? "yellow-underline" : ""
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Members
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item mobile-1" href="/members/supplier">
                  Supplier
                </a>
                <a className="dropdown-item mobile-1" href="/members/wholesaler">
                  Wholesaler
                </a>
                <a className="dropdown-item mobile-1" href="/members/reseller">
                  Reseller
                </a>
              </div>
            </li>

            {/* <li className="nav-item dropdown ml-3 member-list-dropdown no-mobile">
              <a
                className={`nav-link text-white dropdown-toggle ${
                  memberListUnderline ? "yellow-underline" : ""
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Member List
              </a>
              <div
                className="dropdown-menu p23 no-mobile"
                aria-labelledby="navbarDropdown"
              >
                <div className="row">
                  <div className="col-md-6">
                    <Link
                      to="/member-list/supplier"
                      className="dropdown-item menu-heading"
                    >
                      SUPPLIER LIST
                    </Link>
                    <p>
                      Pemilik produk dengan credensial khusus. Dapat mengubah
                      dan mental produknya kedalam Traveli store.
                    </p>
                  </div>
                  <div className="col-md-6 borderLeft">
                    <Link
                      to="/member-list/wholesaler"
                      className="dropdown-item menu-heading"
                    >
                      WHOLESALER LIST
                    </Link>
                    <p>
                      Pemilik produk dengan credensial khusus. Dapat mengubah
                      dan mental produknya kedalam Traveli store.
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown ml-3 member-list-dropdown mobile-only">
              <a
                className={`nav-link text-white dropdown-toggle ${
                  memberListUnderline ? "yellow-underline" : ""
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Member List
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/member-list/supplier">
                  <a className="dropdown-item mobile-1">Supplier List</a>
                </Link>
                <Link to="/member-list/wholesaler">
                  <a className="dropdown-item mobile-1">Wholesaler</a>
                </Link>
              </div>
            </li>
            
            <li className="nav-item">
              <Link to="/travelikuy">
                <a
                  className={`nav-link text-white ml-4 ${
                    locationNow == "/travelikuy" ? "yellow-underline" : ""
                  } `}
                >
                  TraveliKuy
                </a>
              </Link>
            </li>
             */}
            {/* <li className="nav-item">
              <Link to="/promo">
                <a
                  className={`nav-link text-white ml-4 ${
                    locationNow == "/promo" ? "yellow-underline" : ""
                  }`}
                >
                  Promo
                </a>
              </Link>
            </li> */}
            <li className="nav-item dropdown ml-2">
              <a
                className={`nav-link dropdown-toggle aboutUs ${
                  aboutUsUnderline ? "yellow-underline" : ""
                } `}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/news">
                  News and Updates
                </a>
                <a className="dropdown-item" href="/contactUs">
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0 pr-5 pt-2">
            <li className="nav-item dropdown space-left text-right">
              <a
                className={`nav-link dropdown-toggle language ${
                  blackText ? "text-black-mobile-white" : "text-white" 
                }`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                {localStorage.getItem("language") === "id" ? "ID" : "EN"}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="javascript:void(0)"
                  // type="button"
                  onClick={() => handleLanguageButton("id")}
                >
                  Bahasa Indonesia
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void(0)"
                  type="button"
                  onClick={() => handleLanguageButton("en")}
                >
                  English
                </a>
              </div>
            </li>
            <div className="mobile-center mobile-only">
              <a href="/login">
                <li className="nav-item text-right">
                  <button type="button" className="btn btn-login">
                    Login
                  </button>
                </li>
              </a>
              <a href="/joinUs">
                <li className="nav-item">
                  <button type="button" className="btn btn-join">
                    Join Us
                  </button>
                </li>
              </a>
            </div>
            <a href="/login">
              <li className="nav-item text-right no-mobile">
                <button type="button" className="btn btn-login">
                  Login
                </button>
              </li>
            </a>
            <a href="/joinUs">
              <li className="nav-item no-mobile">
                <button type="button" className="btn btn-join">
                  Join Us
                </button>
              </li>
            </a>
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
  );
};
