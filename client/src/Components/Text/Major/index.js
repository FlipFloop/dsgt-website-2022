//imports
import "./Major.css";

import majorA from "../../../assets/images/blobs/major--export.svg";

/**
 * A major header -- pass in type (a,b,c) for different types
 * @param {*} params
 * @returns
 */
const Major = (params) => {
    if (!params.type || params.type === "a") {
        return (
            <div className="major-text major-a">
                <img className="line-left" src={majorA} alt="line" />
                <h1>{params.children}</h1>
                <img className="line-right" src={majorA} alt="line" />
            </div>
        );
    } else if (params.type === "b") {
        return (
            <div className="major-text major-b">
                <img className="line-left" src={majorA} alt="line" />
                <h1>{params.children}</h1>
                <img className="line-right" src={majorA} alt="line" />
            </div>
        );
    } else if (params.type === "c") {
        return (
            <div className="major-text major-c">
                <img className="line-left" src={majorA} alt="line" />
                <h1>{params.children}</h1>
                <img className="line-right" src={majorA} alt="line" />
            </div>
        );
    }
};
export default Major;
