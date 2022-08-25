//imports
import styles from "./Card.module.scss";

/**
 * a card with an image (params.img), heading (params.heading), and a description (inside the tag <Card>text description</Card>)
 * @param {*} params 
 * @returns 
 */
const Card = (params) => {
    return (
        <div className={styles.Card}>
            {params.img ? (
                <div className={styles.CardImg}>
                    <img src={params.img} alt="project logo" />
                </div>
            ) : (
                ""
            )}
            {params.heading ? (
                <h1 className={styles.CardHeading}>{params.heading}</h1>
            ) : (
                ""
            )}
            <p className={styles.CardText}>{params.children}</p>
        </div>
    );
};
export default Card;
