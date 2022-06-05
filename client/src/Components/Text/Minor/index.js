//imports
import "./Minor.css";

const Minor = (params) => {
    if (!params.type || params.type == "a") {
        return <h2 className="minor-text minor-a">{params.children}</h2>;
    } else if (params.type == "b") {
        return <h2 className="minor-text minor-b">{params.children}</h2>;
    }
};
export default Minor;
