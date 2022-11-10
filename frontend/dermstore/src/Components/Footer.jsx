import React from 'react'
import './footer.css'
import { IoMdHelp } from 'react-icons/io'
import { GiReturnArrow, } from 'react-icons/gi'
import { FaShippingFast, FaCookie } from 'react-icons/fa'
import { CgTrack } from 'react-icons/cg'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsPinterest } from 'react-icons/bs'
function Footer() {
  return (
    <div >
      <hr />
      <div className='footercard'>
        <div className='bg-service'>
          <div className='bg-cont'>
            <div>Sign up to our newsletters and receive the latest exclusive discounts and deals</div>
            <button>SIGN ME UP</button>
          </div>

          <div className='bg-cont'>
            <div className='bg-social'> Connect with us</div>
            <span><BsFacebook className='social-icon' /></span>
            <span><BsTwitter className='social-icon' /></span>
            <span><BsInstagram className='social-icon' /></span>
            <span><BsYoutube className='social-icon' /></span>
            <span><BsPinterest className='social-icon' /></span>
          </div>
        </div>
        <div className='footer'>

          {/* first customer service div here */}
          <div className='firstcontiner'>
            <hr  className='divunderhr'/>
            <p>Customer Service</p>
            <ul>
              <li><span><IoMdHelp className='icon' /></span>  Help Center/FAQs</li>
              <li><span><GiReturnArrow className='icon' /></span>  Returns</li>
              <li><span><FaShippingFast className='icon' /></span>  Shipping Information</li>
              <li><span><CgTrack className='icon' /></span>  Track my order</li>
              <li><span><FaCookie className='icon' /></span>  Cookie Settings</li>
            </ul>

          </div>

          {/* secound table service div here */}
          <div className='secoundcontiner'>
            <div>
              <hr className='divunderhr' />
              <p>My Account</p>
              <ul>
                <li>Manage My Auto-Replenishments</li>
                <li>My Rewards</li>
                <li>My Favorites</li>
                <li>Refer a Friend</li>
                <li>Order History</li>
              </ul>
            </div>
            <div>
              <hr className='divunderhr' />
              <a href="">
                 <p>Company</p>
              <ul>
                <li>About Us</li>
                <li>Press</li>
                <li>What is Klarna?</li>

              </ul>
              </a>
            </div>
            <div>
              <hr className='divunderhr' />
              <p>Legal</p>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Modern Slavery Statement</li>
                <li>Product Recall</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className='footercard'>

        <div className='bg-service'>
          <div className='bg-cont'>
            <div><h1>THG</h1></div>
            <p>2022 © The Hut.com Ltd.</p>
          </div>

          <div className='bg-cont'>
            <div className='bg-social'>Pay securely with</div>
            <img id="img1" src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" alt="" />
            <img id="img1" src="https://logowik.com/content/uploads/images/897_paypal.jpg" alt="" />
            <img id="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/450px-MasterCard_Logo.svg.png" alt="" />
            <img id="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/189px-Maestro_logo.svg.png?20171129173514" alt="" />
            <img id="img1" src="https://logodix.com/logo/61114.jpg" alt="American express" />
            <img id="img1" src="https://www.svgrepo.com/show/328132/discover.svg" alt="discover" />
            <img id="img1" src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" alt="apple" />
            <img id="img1" src="https://logowik.com/content/uploads/images/afterpay-new-20215837.jpg" alt="apple" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer