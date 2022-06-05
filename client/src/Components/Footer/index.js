//imports
import "./Footer.css";

import { useEffect, useState } from "react";

import footerblob from "../../assets/images/blobs/footer--export.svg";
import footerblobmobile from "../../assets/images/blobs/footer-mobile--export.svg";

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
                <img className="footer-blob" src={footerblob} />
            ) : (
                <img className="footer-blob" src={footerblobmobile} />
            )}
            <div className="footer-wrapper">
                {/* <h1 className="major">Data Science @ GT</h1> */}
                <div className="footer-section">
                    <h2 className="minor">Data Science @ GT</h2>
                    <a className="mini link" href="#">
                        About Us
                    </a>
                    <a className="mini link" href="#">
                        Contact
                    </a>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Connect with Us</h2>
                    <a className="mini link" href="#">
                        Email
                    </a>
                    <a className="mini link" href="#">
                        Instagram
                    </a>
                    <a className="mini link" href="#">
                        LinkedIn
                    </a>
                    <a className="mini link" href="#">
                        Github
                    </a>
                </div>
                <div className="footer-section">
                    <h2 className="minor">Join the Community</h2>
                    <a className="mini link" href="#">
                        Slack
                    </a>
                    <a className="mini link" href="#">
                        Discord
                    </a>
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
