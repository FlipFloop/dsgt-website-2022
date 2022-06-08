//imports
import "./LearnMore.css";

import { Link } from "react-router-dom";

/**
 * a link to another page with an arrow animation
 * usage: <LearnMore to="page">text to display</LearnMore>
 * @param {*} params
 * @returns
 */
const LearnMore = (params) => {
    if (params.to && params.to.includes("http")) {
        return (
            <a className="learn-more" href={params.to || "#"}>
                {params.children}
                <span className="arrow">→</span>
            </a>
        );
    } else {
        return (
            <Link className="learn-more" to={params.to || "#"}>
                {params.children}
                <span className="arrow">→</span>
            </Link>
        );
    }
};
export default LearnMore;
