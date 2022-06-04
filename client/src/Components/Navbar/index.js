//imports
import "./Navbar.css";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";
import { useEffect, useState } from "react";

const Navbar = (params) => {
    const [windowWidth, setWindowWidth] = useState(params.screen_width);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        setWindowWidth(params.screen_width);
    }, [params.screen_width]);

    if (windowWidth >= WIDTH_THRESHOLD) {
        //desktop navbar
        return (
            <div {...params} className="desktop-navbar">
                <div className="nav-wrapper">
                    {/* <img className="logo" src={logo} /> */}
                    {/* <h1 className="logo-text">Data Science at<br />Georgia Tech</h1> */}
                    <a className="nav-menuitem" href="#">
                        About Us
                    </a>
                    <a className="nav-menuitem" href="#">
                        Projects
                    </a>
                    <a className="nav-menuitem" href="#">
                        Hacklytics
                    </a>
                    <a className="nav-menuitem" href="#">
                        Bootcamp
                    </a>
                </div>
            </div>
        );
    } else {
        //mobile navbar
        return (
            <div {...params} className="mobile-navbar">
                mobile
            </div>
        );
    }
};

export default Navbar;
