//imports
import "./Background.css";

/**
 * The background for the page (squiggles on gray background)
 * @param {*} params
 * @returns
 */
const Background = (params) => {
    return (
        <div {...params} className="wavy-bg">
            <div className="bg-nav"></div>
            <div className="squiggles"></div>
        </div>
    );
};
export default Background;
