import React from 'react'
import './NavbarFooter.css'
import { FiMenu } from 'react-icons/fi'

const NavbarFooter = () => {
    return (
        <div className="navbar__footer">
            <div className="navbar__footer_all">
                <FiMenu className="navbar__fimenu" />
                <div className="navbar__fimenu_text">All</div>
            </div>
            <div className="navbar__footer_text">Fresh</div>
            <div className="navbar__footer_text">Amazon Pay</div>
            <div className="navbar__footer_text">AmazonBasics</div>
            <div className="navbar__footer_text">Mobiles</div>
            <div className="navbar__footer_text">Fashion</div>
            <div className="navbar__footer_text">
                Health {`&`} Personal Care
            </div>
            <div className="navbar__footer_text">Household</div>
            <div className="navbar__footer_text">Electronic</div>
            <div className="navbar__footer_text">Gift Cards</div>
            <div className="navbar__footer_text">Buy Again</div>
            <div className="navbar__footer_text">Coupons</div>
            <div className="navbar_footer_offer">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/CBCC/Refresh/swm4._CB658029568_.jpg"
                    alt="offers"
                />
            </div>
        </div>
    )
}

export default NavbarFooter
