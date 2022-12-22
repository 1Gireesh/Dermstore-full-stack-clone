import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id={styles.fooTerdivs}>
      <hr className={styles.hr}/>
      <div id={styles.fooTer}>
        <h1 className={styles.H1}>
          DERMSTORE
        </h1>
        <div className={styles.footerGrid}>
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Help Center/ FAQs</a>
            </p>
            <p>
              <a href="/">Returns</a>
            </p>
            <p>
              <a href="/">Shipping Information</a>
            </p>
            <p>
              <a href="/">Track my Order</a>
            </p>
            <p>
              <a href="/">Cookie Settings</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">Press</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">What is Klarna?</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">facebook</a>
            </p>
            <p>
              <a href="/">Twitter</a>
            </p>
            <p>
              <a href="/">Instagram</a>
            </p>
            <p>
              <a href="/">Youtube</a>
            </p>
            
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className={styles.inpbtnFlex}>
              <input placeholder="Enter Email id" />
              <button className={styles.bTTn}>Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />

        
      </div>
    </div>
  );
};

export default Footer;
