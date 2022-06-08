//imports
import "./Footer.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";

import footerblob from "../../assets/images/blobs/footer--export.svg";
import footerblobmobile from "../../assets/images/blobs/footer-mobile2--export.svg";

/**
 * The footer of the web page
 * @param {*} params
 * @returns
 */
const Footer = (params) => {
    const [windowWidth, setWindowWidth] = useState(params.screen_width);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        setWindowWidth(params.screen_width);
    }, [params.screen_width]);

    return (
        <div className="footer">
            {windowWidth >= WIDTH_THRESHOLD ? (
                <img className="footer-blob" src={footerblob} alt="blob" />
            ) : (
                <img
                    className="footer-blob"
                    src={footerblobmobile}
                    alt="blob"
                />
            )}
            <div className="footer-wrapper">
                <div className="major">
                    <img src={logo} className="logo" alt="logo" />
                    <h1>Data Science @ GT</h1>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Company</h2>
                    <Link className="mini link" to="/about">
                        About Us
                    </Link>
                    <Link className="mini link" to="#">
                        Contact
                    </Link>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Connect with Us</h2>
                    <Link className="mini link" to="#">
                        Email
                    </Link>
                    <Link className="mini link" to="#">
                        Instagram
                    </Link>
                    <Link className="mini link" to="#">
                        LinkedIn
                    </Link>
                    <Link className="mini link" to="#">
                        Github
                    </Link>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Join the Community</h2>
                    <Link className="mini link" to="#">
                        Slack
                    </Link>
                    <Link className="mini link" to="#">
                        Discord
                    </Link>
                </div>

                <div className="footer-section">
                    <h2 className="minor">
                        Made with 💖 by the DSGT Tech Team.
                    </h2>
                </div>
            </div>
        </div>
    );
};
export default Footer;
