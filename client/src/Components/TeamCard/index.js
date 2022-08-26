//imports
import styles from "./TeamCard.module.scss";

const TeamCard = (params) => {
    //pass in img, title, and in params.children the content
    return (
        <div className={styles.TeamCard}>
            <h1 className={styles.Major}>{params.title}</h1>
            <p className={styles.Content}>{params.children}</p>
        </div>
    );
};
export default TeamCard;
