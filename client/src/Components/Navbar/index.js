//imports
import "./Navbar.css";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/**
 * The navbar at the top of the page (desktop version and mobile version)
 * @param {*} params
 * @returns
 */
const Navbar = (params) => {
    const [windowWidth, setWindowWidth] = useState(params.screen_width);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        setWindowWidth(params.screen_width);
    }, [params.screen_width]);

    const handleCheck = (e) => {
        if (e.target.checked) {
            //mobile nav menu is now open
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
            //mobile nav menu is now closed
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    };

    if (windowWidth >= WIDTH_THRESHOLD) {
        //desktop navbar
        //just a navbar with buttons
        return (
            <div {...params} className="desktop-navbar">
                <div className="nav-wrapper">
                    <div className="nav-wrapper-flex-left">
                        <img className="logo" src={logo} alt="DSGT Logo" />
                        <h1 className="logo-text">DSGT</h1>
                    </div>
                    <div className="nav-wrapper-flex-right">
                        <HashLink className="nav-menuitem" smooth to="#about">
                            Meet The Team
                        </HashLink>
                        <Link className="nav-menuitem" to="#bootcamp">
                            Bootcamp
                        </Link>
                        <Link className="nav-menuitem" to="#hacklytics">
                            Hacklytics
                        </Link>
                        <Link className="nav-menuitem" to="#projects">
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        //mobile navbar
        //have a hamburger to open the mobile nav menu and close it
        return (
            <div {...params} className="mobile-navbar">
                <div className="nav-wrapper">
                    <div className="nav-wrapper-flex-center">
                        <img className="logo" src={logo} alt="DSGT Logo" />
                        <h1 className="logo-text">DSGT</h1>
                    </div>
                </div>
                <input
                    id="hamburger-checkbox"
                    type="checkbox"
                    onChange={handleCheck}
                ></input>
                <label htmlFor="hamburger-checkbox" className="nav-hamburger">
                    <div className="hamburger-line hamburger-top"></div>
                    <div className="hamburger-line hamburger-bottom"></div>
                </label>
                <div className="mobile-navbar-menu">
                    <div className="nav-menu-flex">
                        <HashLink className="nav-menuitem" smooth to="#about">
                            Meet The Team
                        </HashLink>
                        <Link className="nav-menuitem" to="#bootcamp">
                            Bootcamp
                        </Link>
                        <Link className="nav-menuitem" to="#hacklytics">
                            Hacklytics
                        </Link>
                        <Link className="nav-menuitem" to="#projects">
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
