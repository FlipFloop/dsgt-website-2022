//imports
import "./Minor.css";

/**
 * A minor header -- pass in type (a,b) for different colors
 * @param {*} params 
 * @returns 
 */
const Minor = (params) => {
    if (!params.type || params.type === "a") {
        return (
            <h2 {...params} className="minor-text minor-a">
                {params.children}
            </h2>
        );
    } else if (params.type === "b") {
        return (
            <h2 {...params} className="minor-text minor-b">
                {params.children}
            </h2>
        );
    }
};
export default Minor;
