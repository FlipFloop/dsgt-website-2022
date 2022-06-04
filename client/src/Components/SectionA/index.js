//imports
import "./SectionA.css";

//import blob from "../../assets/images/blobs/blob1--export.svg";

const SectionA = (params) => {
    return (
        <div {...params} className="section-a">
            <div className="section-a-wrapper">
                <div className="blob">
                    {params.children}
                </div>
            </div>
        </div>
    );
};
export default SectionA;
