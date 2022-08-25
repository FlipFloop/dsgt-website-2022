//imports
import styles from "./Footer.module.scss";

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
        <div className={styles.Footer}>
            {windowWidth >= WIDTH_THRESHOLD ? (
                <img
                    className={styles.FooterBlob}
                    src={footerblob}
                    alt="blob"
                />
            ) : (
                <img
                    className={styles.FooterBlob}
                    src={footerblobmobile}
                    alt="blob"
                />
            )}
            <div className={styles.FooterWrapper}>
                <div className={styles.Major}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <h1>Data Science @ GT</h1>
                </div>
                <div className={styles.FooterSection}>
                    <h2 className={styles.minor}>Company</h2>
                    <Link
                        className={`${styles.mini} ${styles.link}`}
                        to="/about"
                    >
                        About Us
                    </Link>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Contact
                    </Link>
                </div>
                <div className={styles.FooterSection}>
                    <h2 className={styles.minor}>Connect with Us</h2>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Email
                    </Link>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Instagram
                    </Link>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        LinkedIn
                    </Link>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Github
                    </Link>
                </div>
                <div className={styles.FooterSection}>
                    <h2 className={styles.minor}>Join the Community</h2>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Slack
                    </Link>
                    <Link className={`${styles.mini} ${styles.link}`} to="#">
                        Discord
                    </Link>
                </div>

                <div className={styles.FooterSection}>
                    <h2 className={styles.minor}>
                        Made with 💖 by the DSGT Tech Team.
                    </h2>
                </div>
            </div>
        </div>
    );
};
export default Footer;
