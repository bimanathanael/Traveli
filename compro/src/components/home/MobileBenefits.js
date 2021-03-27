// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import ScrollMenu from "react-horizontal-scrolling-menu";

// let list = [
//   { name: "item1" },
//   { name: "item2" },
//   { name: "item3" },
// ];

// const MenuItem = ({ text, selected }) => {
//   return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
// };

// export const Menu = (list, selected) =>
//   list.map((el) => {
//     const { name } = el;

//     return <MenuItem text={name} key={name} selected={selected} />;
//   });

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };
// Arrow.propTypes = {
//   text: PropTypes.string,
//   className: PropTypes.string
// };

// export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// class MobileBenefits extends Component {
//   state = {
//     alignCenter: true,
//     clickWhenDrag: false,
//     dragging: true,
//     hideArrows: true,
//     hideSingleArrow: true,
//     itemsCount: list.length,
//     scrollToSelected: false,
//     selected: "item1",
//     translate: 0,
//     transition: 0.3,
//     wheel: true
//   };

//   componentDidMount

//   constructor(props) {
//     super(props);
//     this.dataBenefits = props.dataBenefits;
//     this.menu = null;
//     this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
//   }



//   render() {
//     const {
//       alignCenter,
//       clickWhenDrag,
//       hideArrows,
//       dragging,
//       hideSingleArrow,
//       translate,
//       transition,
//       wheel
//     } = this.state;

//     const menu = this.menuItems;

//     console.log(this.dataBenefits, "<DATA")

//     return (
//       <div className="MobileBenefits">

//         <ScrollMenu
//           alignCenter={alignCenter}
//           arrowLeft={ArrowLeft}
//           arrowRight={ArrowRight}
//           clickWhenDrag={clickWhenDrag}
//           data={menu}
//           dragging={dragging}
//           hideArrows={hideArrows}
//           hideSingleArrow={hideSingleArrow}
//           transition={+transition}
//           translate={translate}
//           wheel={wheel}
//         />
//       </div>
//     );
//   }
// }

// export default MobileBenefits;

// ReactDOM.render(<MobileBenefits />, document.getElementById("root"));



export const MobileBenefits = ({dataBenefits}) => {

  return (
    <>
    </>
  )
}