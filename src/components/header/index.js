import React from "react"
import { Container } from 'semantic-ui-react'
import "./header.scss"
import Logo from "../../assets/svgs/mobile-kya-logo.svg"
import Deals from "../../assets/svgs/deals-icon.svg"
import BestPhones from "../../assets/svgs/best-phones-icon.svg"
import LoginSignup from "../../assets/svgs/login-sign-up-icon.svg"
import Hamburger from "../../assets/svgs/hamburger-icon.svg"
import SearchIcon from "../../assets/svgs/search.svg"

const Header = () =>
    <header className="header-container">
        <div className="header-row">
            <img src={Logo} alt="mobilekya-logo" />
            <div className="search">
                <input type="text" name="search" placeholder="Search..." className=" search-input" />
                <img className="search-image" src={SearchIcon} alt="search-icon" />
            </div>
            <div className="deals">
                <img className="deals-icon" src={Deals} alt="deal-icon" />
                <h3 className="deals-text">Deals</h3>
            </div>
            <div className="best-phones">
                <img className="best-phones-icon" src={BestPhones} alt="best-phones-icon" />
                <h3 className="best-phones-text">Best Phones</h3>
            </div>
            <div className="login-signup">
                <img className="login-signup-icon" src={LoginSignup} alt="login-signup-icon" />
                <h3 className="login-signup-text">Login/Sign up </h3>
            </div>
            <img src={Hamburger} alt="hamburger" />
        </div>
        <div>
            {/* helooo */}
        </div>
    </header>


export default Header
