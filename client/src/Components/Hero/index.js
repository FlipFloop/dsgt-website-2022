//imports
import "./Hero.css";

import spacebg from "./dsgt background 1-2.svg";

const Hero = (params) => {
    return (
        <div {...params} id="hero">
            <img className="hero-bg-img" src={spacebg}/>
            <div className="hero-wrapper">test</div>
        </div>
    );
};
export default Hero;
