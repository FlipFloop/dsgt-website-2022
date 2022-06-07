//imports
import "./Section.css";

const Section = (params) => {
    return (
        <div className="section" {...params}>
            <div className="section-wrapper">{params.children}</div>
        </div>
    );
};
export default Section;
