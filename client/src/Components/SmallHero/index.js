//imports
import "./SmallHero.css";

import smallblob from "../../assets/images/blobs/small-blob--export.svg";

const SmallHero = (params) => {
    return (
        <div {...params} className="small-hero">
            <img className="small-hero-blob" src={smallblob} alt="blob" />
            <div className="small-hero-wrapper">
                <div className="small-hero-left">
                    <h1 className="major">{params.title}</h1>
                    <h2 className="minor">
                        {params.desc || params.description}
                    </h2>
                    <div className="hero-sep"></div>
                </div>
            </div>
        </div>
    );
};
export default SmallHero;
