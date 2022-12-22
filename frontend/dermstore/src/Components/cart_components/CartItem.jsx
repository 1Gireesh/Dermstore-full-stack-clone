import React from 'react'

export default function CartItem() {
  return (
    <div>
      <div className="tbody">
          <div className="first">
            <img src="https://static.thcdn.com//productimg/70/70/13890001-1484997222551821.jpg" alt="" />
            <p>BIOEFFECT Firming Favorites Set (Worth $270.00)</p>
          </div>
          <p className="price">$302</p>
          <p className="quantity">
            <button>+</button>
            4
            <button>-</button>
          </p>
          <p className="">$3259</p>
        </div>
    </div>
  )
}
