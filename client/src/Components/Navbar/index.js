//imports
import "./Navbar.css";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";
import { useEffect, useState } from "react";

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

    if (windowWidth >= WIDTH_THRESHOLD) {
        //desktop navbar
        //just a navbar with buttons
        return (
            <div {...params} className="desktop-navbar">
                <div className="nav-wrapper">
                    <div className="nav-wrapper-flex-left">
                        <img className="logo" src={logo} />
                        <h1 className="logo-text">
                            Data Science
                            <br />
                            @ Georgia Tech
                        </h1>
                    </div>
                    <div className="nav-wrapper-flex-right">
                        <a className="nav-menuitem" href="#projects">
                            Projects
                        </a>
                        <a className="nav-menuitem" href="#hacklytics">
                            Hacklytics
                        </a>
                        <a className="nav-menuitem" href="#bootcamp">
                            Bootcamp
                        </a>
                        <a className="nav-menuitem" href="#about">
                            Meet The Team
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        //mobile navbar
        //have a hamburger to open the mobile nav menu and close it
        return (
            <div {...params} className="mobile-navbar">
                mobile
            </div>
        );
    }
};

export default Navbar;
