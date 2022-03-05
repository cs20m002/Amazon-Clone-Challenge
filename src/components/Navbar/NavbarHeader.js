import React from 'react'
import './NavbarHeader.css'
import Flags from 'country-flag-icons/react/3x2'

const NavbarHeader = () => {
    return (
        <div className="navbar__component">
            {/* Amazon Logo */}
            <div className="navbar__brand">
                <div className="navbar__logo"></div>
                <div className="navbar__countryIN textbold">.in</div>
            </div>

            {/* Address & Pincode */}
            <div className="navabar__locator">
                <div className="navbar__locatorImage"></div>
                <div className="navbar__useraddress">
                    <div className="navbar__deliverto textsmall">
                        Deliver to ANIKET
                    </div>
                    <div className="navbar__location textbold">
                        Chittoor {516677}
                    </div>
                </div>
            </div>

            {/* Search & filter area  */}
            <div className="navbar__searchComponents">
                <div>
                    <select className="navbar__dropdown">
                        <option value="">All</option>
                        <option value="">Alexa Skills</option>
                        <option value="">Amazon Devices</option>
                        <option value="">Amazon Fashion</option>
                        <option value="">Amazon Fresh</option>
                        <option value="">Amazon Pharmacy</option>
                        <option value="">Appliances</option>
                        <option value="">App{`&`}Games</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="navbar__textarea" />
                </div>
                <div className="navbar__searchbox">
                    <div className="navbar__searchicon"></div>
                </div>
            </div>

            {/* Country */}
            <div className="navbar__country">
                <Flags.IN title="IN" className="navbar__flag" />
            </div>
            {/* SignIn */}
            <div className="navbar__signin">
                <div className="textsmall">Hello, Sign In</div>
                <div className="textbold">Account {`&`} Lists</div>
            </div>

            {/* Return & Orders */}
            <div className="navbar__returns">
                <div className="textsmall">Return {`&`}</div>
                <div className="textbold">Orders</div>
            </div>

            {/* Cart */}
            <div className="navbar__carts">
                <div className="navbar__cartimage"></div>
                <div className="navbar__cartitems">0</div>
                <div className="navbar__carttext textbold">Cart</div>
            </div>
        </div>
    )
}

export default NavbarHeader
