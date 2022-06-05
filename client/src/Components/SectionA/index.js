//imports
import "./SectionA.css";

import blob from "../../assets/images/blobs/blob2--export.svg";

const SectionA = (params) => {
    return (
        <div {...params} className="section-a">
            <div className="section-a-wrapper">{params.children}</div>
        </div>
    );
};
export default SectionA;
