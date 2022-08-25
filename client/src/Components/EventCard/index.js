//imports
import styles from "./EventCard.module.scss";

import { HashLink as Link } from "react-router-hash-link";

/**
 * an event card with an image (params.img), date/time (params.when),  heading (params.heading), and a description (inside the tag <Card>text description</Card>)
 * @param {*} params
 * @returns
 */
const EventCard = (params) => {
    return (
        <div className={styles.EventCard}>
            {params.img ? (
                <div className={styles.CardImg}>
                    <img src={params.img} alt="event" />
                </div>
            ) : (
                ""
            )}
            <div className={styles.CardWrapper}>
                <p className={styles.CardDatetime}>{params.when}</p>
                {params.heading ? (
                    <h1 className={styles.CardHeading}>{params.heading}</h1>
                ) : (
                    ""
                )}
                <p className={styles.CardText}>{params.children}</p>
                {params.button_text && params.button_to ? (
                    <Link
                        className={styles.CardButton}
                        smooth
                        to={params.button_to}
                    >
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
