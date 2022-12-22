// import "../../css/Navbar_css/RouterNav.css";
// import { NavLink } from "react-router-dom";

// const links = [
//   {
//     title: "Brands",
//     path: "/brands",
//   },
//   {
//     title: "Holiday Shop",
//     path: "holiday+by",
//   },
//   {
//     title: "Browse By",
//     path: "browse+by",
//   },
//   {
//     title: "Bestsellers",
//     path: "bestsellers",
//   },
//   {
//     title: " Care",
//     path: "skin+care",
//   },
//   {
//     title: "Makeup",
//     path: "makeup",
//   },
//   {
//     title: "Hair Care",
//     path: "hair+care",
//   },
//   {
//     title: "Bath & Body",
//     path: "bath+and+body",
//   },
//   {
//     title: "Fragrance Shop",
//     path: "fragrance+shop",
//   },
//   {
//     title: "Tools & Devices",
//     path: "tools+and+devices",
//   },
//   {
//     title: "Gifts & Sets",
//     path: "gifts+and+sets",
//   },
//   {
//     title: "BeautyFIX",
//     path: "beauty+fix",
//   },
//   {
//     title: "Offers",
//     path: "offers",
//   },
//   {
//     title: "New",
//     path: "new",
//   },
//   {
//     title: "Skin 101",
//     path: "skin+101",
//   },
// ];

// function RouterNav() {
//   return (
//     <div className="router_nav_main">
//       <div className="router_container">
//         {links.map((link) => (
//           <div className="router_link_container">
//             <NavLink className="all_router_link" to={link.path}>
//               {link.title}
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RouterNav;


import React, { useContext, useState } from "react";
import styles from "./style/RouteNav.module.css";
import { NavLink } from "react-router-dom";





const RouterNav = () => {

  // const {userName, isAuth, logoutUser, TotalQty } = useContext();

  // console.log(isAuth)

  const [active, setActive] = useState("/");
  // const [info, setinfo] = useState(false);

  // console.log(userName)

  // const token = localStorage.getItem("jwtoken");

  const activeStyle = {
    color: "black",

    textDecoration: "none",


    borderBottom: "4px solid #fdd835"

  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    BsBorderBottom: "yellow"
  };


  /// LOGOUT 
  // const LogOut_User = () =>{

  //   console.log("LOGOUT IS RUNNUNG")
  //   alert("LogOut User Successfully")
  //   logoutUser()
  // }



  return (


    <div id={styles.fixedNav}>

      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink
              to="/"
              onClick={() => setActive("")}
            >
              Brands
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>0-9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      100% Sure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      111SKIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      3LABS
                    </NavLink>
                  </li>
                </ul>


              </div>
            </div>
          </li>


          {/* Holiday shop link */}

          <li>
            <NavLink
              to="/holiday"
              onClick={() => setActive("")}
            >
              Holiday <br /> Shop
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      <h5>Shop By Price</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Gift Under $50
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Gift Under $100
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Gift Under $200
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Luxury Gift over $100
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      <h5>Shop By Category</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Dermstore Exclusives
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      BeautyFix
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Skin Care Gifts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Hairs Care Gifts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Tools & Devices Gifts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/holiday"
                      onClick={() => setActive("")}
                    >
                      Clearance
                    </NavLink>
                  </li>
                </ul>


              </div>
            </div>
          </li>

          {/*  Browse By */}
          <li>
            <NavLink
              to="/browse"
              onClick={() => setActive("")}
            >
              Browse <br /> By
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>Brands</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      SkinCeuticals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      EltaMD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      SkinMedica
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Obagi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      is Clinical
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Eminence Organic Skin
                      <br />care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Revision SkinCare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Neocutis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oribe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Sunday Riley
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      PCA SKIN
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>Concern </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Acne
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Acne Scare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Agine Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Blackheads
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Dark Circles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Dark Spots
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Rosacea
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oli Controls
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Irritated Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Large Pores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Stketch marks
                    </NavLink>
                  </li>

                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>Skin Type </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Acne-Prone Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Sensitive Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Dry Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Mature Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Combination Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oily Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Normail Skin
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>Ingredient  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Vitamin C
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Hyalurionic Acid
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Retnols
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Mature Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Combination Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oily Skin
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Normail Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oily Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Vitamin A
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Vitamin E
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Vitamin C
                    </NavLink>
                  </li>

                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>New Featured Brands </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      ISDIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Chantecallle
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      ghd
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      MEdikB
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Eminence Organic Skin
                      <br />care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Revision SkinCare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      SENTE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Neocutis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Oribe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Sunday Riley
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Olaplex
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      SENTE
                    </NavLink>
                  </li>

                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      <h5>Collection  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Allure Award Winners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Conscious Beauty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Dermatoligistst Excluive
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Female founded Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      MEdikB
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Save with Auto
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Replenishment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/browse"
                      onClick={() => setActive("")}
                    >
                      Wellness
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Bestsellers  */}

          <li>
            <NavLink to="/" onClick={() => setActive("")}>
              Bestsellers
            </NavLink>
          </li>


          {/*  skin Care */}



          <li>
            <NavLink
              to="/"
              onClick={() => setActive("")}
            >
              Skin <br /> Care
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Cleansers & Exfollators </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Cleaners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Exfoliants,peels scrubs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Toners & mist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      face wash
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      makeup remover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      men's cleansers excfoliators
                    </NavLink>
                  </li>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Cleansers & Exfollators </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Cleansing Devices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Anti-Aging Tools & Devices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Dermstore Exclusives
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Microneeling
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Treatments and Serums </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Face serums
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      face Masks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Neck creams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      wrinkle Ceram
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Acne Treatment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Dark Spot Corrector
                    </NavLink>
                  </li>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>More  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      New Arrivals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      BestSellers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Kits & Sets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Top Rated
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Travel Size
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Sale
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      View All...
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Moisturizers </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Face Moisturizers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      face oils
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Night creams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Tinted Moisturizers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Essences
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Men's Moisturizers <br />
                      Treatments
                    </NavLink>
                  </li>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Build a Rotine</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Combination Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Dry Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Normal Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Oily Skin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Sensitive Skin
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Eye Care </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Eye cream & moinsturizers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Eye Treatments & Serums
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Eye Masks
                    </NavLink>
                  </li>


                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Popular Brands </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Augustinus Bader
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Chantecaille
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      SkinCeuticals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      EltaMD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      SkinMedica
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Obagi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      IS Clinical
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Revision Skincare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Sunday Riley
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Lip Care</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Lip Balms & Treatments
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <hr />
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Face Sunscreen </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      FAce Suncreen
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      self Tanners For Face
                    </NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </li>

{/* makeup */}
          <li>
            <NavLink to="/" onClick={() => setActive("")}>
              Makeup
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Face</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Foundation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      BB & CC Creams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Concealer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Blush  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Highlighters & Contouring </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Primer </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Face Palettes </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Setting Spray & Powders </NavLink>
                  </li>

                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Lips </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Lipstick
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Liquid LipStick
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Lip Gloss & Stains </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Lip Balms & Treatments </NavLink>
                  </li>

                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Eyes </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyes Shadow
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mascara
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyeliner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyebrow Makeup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Lash & Brow Enhancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eye Primer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      False Lashes
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>More </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Tools & Brushes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Makeup Meets Skin Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> New Arrivals </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Bestsellers  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Kits & Sets  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Top Rated  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Sale </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> View All... </NavLink>
                  </li>
                </ul>
                <ul className={styles.typesofMenu}>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="mobile-covers-india"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

{/*-------------------------------------- Hair Care  ------------------------------------------- */}
          <li>
            <NavLink to="/" onClick={() => setActive("")}>
              Hair<br />Care
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Shop By Category </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Shampoo 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Dry Shampoo 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Conditioner 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Hair Loss Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Anti-Dandruff & Scalp </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Care  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Hair Treatments </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Care  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Hair Treatments</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Hair Mask </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Styling Products  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Tools & Bruches </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Natural Hair CAre </NavLink>
                  </li>

                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Shop By Hair Type</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Coarse 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     Frizy 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Color-Treated </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Curly  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Dry Or Damaged   </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Fine</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Oily </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>More</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      New Arrivals 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Bestsellers 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Kits & Sets 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     Top Rated 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     Travels Size 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     Men's Hair Care 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Sale 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      View All... 
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Popular Brands  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      ghd 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Oribe 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Olaplex </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Christophe Robine</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Grow Gorgeous</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">R+Co</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Brigeo </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">VIRTUE  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Living Proof</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">miriam quevedo </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Harry josh pro tools</NavLink>
                  </li>
                </ul>
               
              </div>
            </div>
          </li>

{/*-------------------------------------- bath body ------------------------------------------- */}

          <li>
            <NavLink to="/" onClick={() => setActive("")}>
              Bath &<br />Body
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Face</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Foundation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      BB & CC Creams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Concealer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Blush  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Highlighters & Contouring </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Primer </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Face Palettes </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Setting Spray & Powders </NavLink>
                  </li>

                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Lips </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Lipstick
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Liquid LipStick
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Lip Gloss & Stains </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Lip Balms & Treatments </NavLink>
                  </li>

                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Eyes </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyes Shadow
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mascara
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyeliner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eyebrow Makeup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Lash & Brow Enhancer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Eye Primer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      False Lashes
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>More </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Tools & Brushes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Makeup Meets Skin Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> New Arrivals </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Bestsellers  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Kits & Sets  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Top Rated  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Sale </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> View All... </NavLink>
                  </li>
                </ul>
                <ul className={styles.typesofMenu}>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="mobile-covers-india"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

{/*-------------------------------------- Fragrance Shop ------------------------------------------- */}

          <li>
            <NavLink to="/" onClick={() => setActive("")}>
            Fragrance<br />Shop
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Shop By Category </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Perfume 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Body Spray & mists 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Home Fragrance & <br /> Candles 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Room Diffuser </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Aromatherapy </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Travels Size </NavLink>
                  </li>
                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Frangrace Family </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Citrus 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Floral 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Musk  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Fresh </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Woodsy </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Popular Brands </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     TRUDON  
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Glasshouse 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      memo paris 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     ARQUISTE Parfumeur 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                     Ellis Brooklyn 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                    NEST Fragrances 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                    Hermetica 
                    </NavLink>
                  </li>
                 
                </ul>

                
              </div>
            </div>
          </li>

{/*-------------------------------------- Tools & Devices ------------------------------------------- */}
          <li>
            <NavLink to="/" onClick={() => setActive("")}>
            Tools &<br />Devices
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>

                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Skin Care Tools  </h5>
                    </NavLink>
                 </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Hair Care Tools  </h5>
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Makeup Tools </h5>
                    </NavLink>
                  </li>
                </ul>

                
              </div>
            </div>
          </li>

 {/*-------------------------------------- Gifts  & Sets  ------------------------------------------- */}


        <li>
            <NavLink to="/" onClick={() => setActive("")}>
            Gifts &<br />Sets 
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>All Gits Sets </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Perfume 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Body Spray & mists 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Home Fragrance & <br /> Candles 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Room Diffuser </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Aromatherapy </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Travels Size </NavLink>
                  </li>
                </ul>
                
                 
             

                
              </div>
            </div>
          </li>

{/*-------------------------------------- BeautyFIX ------------------------------------------- */}
          <li>
            <NavLink to="/" onClick={() => setActive("")}>
            BeautyFIX
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>BeautyFIX  </h5>
                    </NavLink>
                 </li>
                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Best of Dermstore  </h5>
                    </NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </li>

{/*-------------------------------------- Offers ------------------------------------------- */}

          <li>
            <NavLink to="/" onClick={() => setActive("")}>
           Offers 
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Last Chance Sale  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Skin Care Sale 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                    Hair Care Sale 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Makeup Sale 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Bath & Body Sale  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Tools & Devices Sale  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Value Sets Sale</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">SPF Sale </NavLink>
                  </li>
                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Shop By % OFF </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                   Save 10%
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                    Save 15%
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Save 20%
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Save 25% </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Save 30%</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Save 40%</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Save 50%</NavLink>
                  </li>
                </ul>
                <ul>
                  <hr />
                  <li>
                    <NavLink to="/">
                      <h5>Other Offers  </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                   Save with Auto <br />
                   Replenishment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                   Refer a friend, Get $15
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    Value sets
                    </NavLink>
                 </li>
                </ul>
                 
             

                
              </div>
            </div>
          </li>


{/*-------------------------------------- New ------------------------------------------- */}
          <li>
            <NavLink to="/" onClick={() => setActive("")}>
            
            New 
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                <hr />
                  <li>
                    <NavLink to="/">
                      <h5>All Gits Sets </h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                     Perfume 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Body Spray & mists 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Home Fragrance & <br /> Candles 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Room Diffuser </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Aromatherapy </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Travels Size </NavLink>
                  </li>
                </ul>
                
                 
             

                
              </div>
            </div>
          </li>


{/*-------------------------------------- Skin 101 ------------------------------------------- */}
<li>
            <NavLink to="/" onClick={() => setActive("")}>
            
            Skin <br />101 
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                <hr />
                  <li>
                    <NavLink to="/">
                  <img className={styles.skin_image} src="https://static.thcdn.com/navigation/208/2021/05/original-blog-1-20210523-20210525.jpg" alt="" />
                  <p>Answer to your Skin care </p>
                    </NavLink>
                  </li>
                </ul>
                <ul>
                <hr />
                  <li>
                    <NavLink to="/">
                  <img className={styles.skin_image} src="https://static.thcdn.com/navigation/208/2021/05/original-blog-2-20210523-20210525.jpg" alt="" />
                  <p>Answer to your Skin care </p>
                    </NavLink>
                  </li>
                </ul>
                 
             

                
              </div>
            </div>
          </li>
        </div>

      </div>
    </div>
  );
};

export default RouterNav;
