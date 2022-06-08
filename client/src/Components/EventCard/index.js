//imports
import "./EventCard.css";

/**
 * a card with an image (params.img), heading (params.heading), and a description (inside the tag <Card>text description</Card>)
 * @param {*} params 
 * @returns 
 */
const EventCard = (params) => {
    return (
        <div className="event-card">
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
export default EventCard;
