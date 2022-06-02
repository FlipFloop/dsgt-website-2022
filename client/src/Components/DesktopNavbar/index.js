//imports
import "./DesktopNavbar.css";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";

const DesktopNavbar = (params) => {
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
};

export default DesktopNavbar;
