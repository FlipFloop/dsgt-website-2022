//imports
import "./Mini.css";

/**
 * mini text
 * @param {*} params 
 * @returns 
 */
const Mini = (params) => {
    return <p className="mini-text">{params.children}</p>;
};
export default Mini;
