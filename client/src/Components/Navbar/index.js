//imports
import styles from "./Navbar.module.scss";

import logo from "../../assets/images/dsgt/apple-touch-icon.png";
import { useEffect, useState } from "react";
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

    //handle clicking on the mobile menu
    const handleClick = (e) => {
        document.getElementById("hamburger-checkbox").click();
    };

    // const handleClickAll = (e) => {
    //     document.getElementsByTagName("body")[0].style.overflow = "auto";
    // };

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
            <div {...params} className={styles.DesktopNavbar}>
                <div className={styles.NavWrapper}>
                    <div className={styles.NavWrapperFlexLeft}>
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="DSGT Logo"
                        />
                        <h1
                            className={`${styles.LogoText} ${
                                params.page === "home" ? styles.color : ""
                            }`}
                        >
                            DSGT
                        </h1>
                    </div>
                    <div className={styles.NavWrapperFlexRight}>
                        <HashLink className={styles.NavMenuitem} smooth to="/">
                            Home
                        </HashLink>
                        <HashLink
                            className={styles.NavMenuitem}
                            smooth
                            to="#about"
                        >
                            About
                        </HashLink>
                        <HashLink
                            className={styles.NavMenuitem}
                            smooth
                            to="/#bootcamp"
                        >
                            Bootcamp
                        </HashLink>
                        <HashLink
                            className={styles.NavMenuitem}
                            smooth
                            to="/#hacklytics"
                        >
                            Hacklytics
                        </HashLink>
                        <HashLink
                            className={styles.NavMenuitem}
                            smooth
                            to="/#projects"
                        >
                            Projects
                        </HashLink>
                        <HashLink
                            className={styles.NavMenuitem}
                            smooth
                            to="/#getinvolved"
                        >
                            Get Involved
                        </HashLink>
                        <a
                            className={styles.NavMenuitem}
                            href="https://member.datasciencegt.org"
                        >
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        //mobile navbar
        //have a hamburger to open the mobile nav menu and close it
        return (
            <div {...params} className={styles.MobileNavbar}>
                <div className={styles.NavWrapper}>
                    <div className={styles.NavWrapperFlexCenter}>
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="DSGT Logo"
                        />
                        <h1 className={styles.LogoText}>DSGT</h1>
                    </div>
                </div>
                <input
                    id="hamburger-checkbox"
                    className={styles.HamburgerCheckbox}
                    type="checkbox"
                    onChange={handleCheck}
                ></input>
                <label
                    htmlFor="hamburger-checkbox"
                    className={styles.NavHamburger}
                >
                    <div
                        className={`${styles.HamburgerLine} ${styles.HamburgerTop}`}
                    ></div>
                    <div
                        className={`${styles.HamburgerLine} ${styles.HamburgerBottom}`}
                    ></div>
                </label>
                <div className={styles.MobileNavbarMenu}>
                    <div className={styles.NavMenuFlex}>
                        <HashLink className={styles.NavMenuitem} smooth to="/">
                            Home
                        </HashLink>
                        <HashLink
                            onClick={handleClick}
                            className={styles.NavMenuitem}
                            smooth
                            to="#about"
                        >
                            About
                        </HashLink>
                        <HashLink
                            onClick={handleClick}
                            className={styles.NavMenuitem}
                            smooth
                            to="/#bootcamp"
                        >
                            Bootcamp
                        </HashLink>
                        <HashLink
                            onClick={handleClick}
                            className={styles.NavMenuitem}
                            smooth
                            to="/#hacklytics"
                        >
                            Hacklytics
                        </HashLink>
                        <HashLink
                            onClick={handleClick}
                            className={styles.NavMenuitem}
                            smooth
                            to="/#projects"
                        >
                            Projects
                        </HashLink>
                        <HashLink
                            onClick={handleClick}
                            className={styles.NavMenuitem}
                            smooth
                            to="/#getinvolved"
                        >
                            Get Involved
                        </HashLink>
                        <a
                            className={styles.NavMenuitem}
                            href="https://member.datasciencegt.org"
                        >
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
