//imports
import "./Hero.css";

import bg1 from "./hero--export.svg";
import herologo from "../../assets/images/dsgt/square-logo.png"

const Hero = (params) => {
    return (
        <div {...params} id="hero">
            <div className="hero-bg"></div>
            <img className="hero-bg-img" src={bg1} />
            <div className="hero-wrapper">
                <div className="hero-right">
                    <img className="hero-logo" src={herologo} />
                    <h1 className="hero-major">Data Science @ Georgia Tech</h1>
                </div>
            </div>
        </div>
    );
};
export default Hero;
