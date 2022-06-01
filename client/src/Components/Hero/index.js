//imports
import "./Hero.css";

import bg from "./background-design-1.svg";

const Hero = (params) => {
    return (
        <div {...params} id="hero">
            <div className="hero-bg-img"></div>
            <div className="hero-wrapper">test</div>
        </div>
    );
};
export default Hero;
