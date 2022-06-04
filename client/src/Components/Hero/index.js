//imports
import "./Hero.css";

import { useState, useEffect } from "react";

import hero2 from "../../assets/images/blobs/hero--export.svg";
import hero2mobile from "../../assets/images/blobs/hero2-mobile--export.svg";
//import herologo from "../../assets/images/dsgt/square-logo.png";

/**
 * The hero (landing view) of the page
 * @param {*} params
 * @returns
 */
const Hero = (params) => {
    const [windowWidth, setWindowWidth] = useState(params.screen_width);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        setWindowWidth(params.screen_width);
    }, [params.screen_width]);

    //take into account the page width
    return (
        <div {...params} id="hero">
            {windowWidth >= WIDTH_THRESHOLD ? (
                <img className="hero-blob" src={hero2} />
            ) : (
                <img className="hero-blob" src={hero2mobile} />
            )}
            <div className="hero-wrapper">
                <div className="hero-right">
                    {/* <img className="hero-logo" src={herologo} /> */}
                    <h1 className="hero-major">Data Science<br/>@ Georgia Tech</h1>
                    <h1 className="hero-minor">Georgia Tech's largest data science organization</h1>
                    <a className="apply-button">Apply</a>
                </div>
            </div>
        </div>
    );
};
export default Hero;
