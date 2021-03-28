const { jwtVerifyUsername } = require("../helpers/jsonwebtoken");

let _nav = [
  {
    _tag: "CSidebarNavDropdown",
    name: "Indonesia",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Home",
        to: "/cms/id/Home",
      },
      {
        _tag: "CSidebarNavItem",
        name: "How It Works",
        to: "/cms/id/HowItWorks",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Supplier",
        to: "/cms/id/MembersSupplier",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Wholesaler",
        to: "/cms/id/MembersWholesaler",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Reseller",
        to: "/cms/id/MembersReseller",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Member List Supplier",
        to: "/cms/id/MembersListSupplier",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Member List Wholesaler",
        to: "/cms/id/MembersListWholesaler",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Traveli Kuy",
        to: "/cms/id/TraveliKuy",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Profile",
        to: "/cms/id/Profile",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Contact Us",
        to: "/cms/id/ContactUs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "English",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Home",
        to: "/cms/en/Home",
      },
      {
        _tag: "CSidebarNavItem",
        name: "How It Works",
        to: "/cms/en/HowItWorks",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Supplier",
        to: "/cms/en/MembersSupplier",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Wholesaler",
        to: "/cms/en/MembersWholesaler",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Members Reseller",
        to: "/cms/en/MembersReseller",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Member List Supplier",
        to: "/cms/en/MembersListSupplier",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Member List Wholesaler",
        to: "/cms/en/MembersListWholesaler",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Traveli Kuy",
        to: "/cms/en/TraveliKuy",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Profile",
        to: "/cms/en/Profile",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Contact Us",
        to: "/cms/en/ContactUs",
      },
    ],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Promo",
    to: "/promo",
    icon: "cil-tag",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Newsletter",
    to: "/newsletter",
    icon: "cil-newspaper",
  },
  {
    _tag: "CSidebarNavItem",
    name: "History",
    to: "/history",
    icon: "cil-history",
  },
];

if (
  localStorage.getItem("username") &&
  jwtVerifyUsername(localStorage.getItem("username")) === "admin1223"
) {
  _nav.push({
    _tag: "CSidebarNavItem",
    name: "Admin",
    to: "/admin",
    icon: "cil-people",
  });
}

export default _nav;
