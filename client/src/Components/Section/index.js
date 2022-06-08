//imports
import "./Section.css";

/**
 * a section that has a max-width to fix wide-monitors
 * @param {*} params 
 * @returns 
 */
const Section = (params) => {
    return (
        <div className="section" {...params}>
            <div className="section-wrapper">{params.children}</div>
        </div>
    );
};
export default Section;
