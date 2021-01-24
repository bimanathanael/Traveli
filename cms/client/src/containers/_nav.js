const { jwtVerifyUsername } = require("../helpers/jsonwebtoken");
let _nav = [
  {
    _tag: "CSidebarNavDropdown",
    name: "Content",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "English",
        to: "/cms/en",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Indonesia",
        to: "/cms/id",
      },
    ],
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
