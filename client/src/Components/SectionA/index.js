//imports
import "./SectionA.css";

const SectionA = (params) => {
    return (
        <div {...params} className="section-a">
            <div className="section-a-wrapper">{params.children}</div>
        </div>
    );
};
export default SectionA;
