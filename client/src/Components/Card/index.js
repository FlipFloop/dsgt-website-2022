//imports
import "./Card.css";

const Card = (params) => {
    return (
        <div className="card">
            {params.img ? (
                <div className="card-img">
                    <img src={params.img} alt="project logo" />
                </div>
            ) : (
                ""
            )}
            {params.heading ? (
                <h1 className="card-heading">{params.heading}</h1>
            ) : (
                ""
            )}
            <p className="card-text">{params.children}</p>
        </div>
    );
};
export default Card;
