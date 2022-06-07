//imports
import "./SmallHero.css";

const SmallHero = (params) => {
    return (
        <div {...params} className="small-hero">
            {/* have blob */}
            <div className="small-hero-wrapper">
                <h1>{params.title}</h1>
            </div>
        </div>
    );
};
export default SmallHero;
