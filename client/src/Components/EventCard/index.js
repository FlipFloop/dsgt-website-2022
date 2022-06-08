//imports
import "./EventCard.css";

import { HashLink as Link } from "react-router-hash-link";

/**
 * an event card with an image (params.img), date/time (params.when),  heading (params.heading), and a description (inside the tag <Card>text description</Card>)
 * @param {*} params
 * @returns
 */
const EventCard = (params) => {
    return (
        <div className="event-card">
            {params.img ? (
                <div className="card-img">
                    <img src={params.img} alt="event image" />
                </div>
            ) : (
                ""
            )}
            <div className="card-wrapper">
                <p className="card-datetime">{params.when}</p>
                {params.heading ? (
                    <h1 className="card-heading">{params.heading}</h1>
                ) : (
                    ""
                )}
                <p className="card-text">{params.children}</p>
                {params.button_text && params.button_to ? (
                    <Link className="card-button" smooth to={params.button_to}>
                        {params.button_text}
                    </Link>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
export default EventCard;
