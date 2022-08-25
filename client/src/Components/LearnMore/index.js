//imports
import styles from "./LearnMore.module.scss";

import { Link } from "react-router-dom";

/**
 * a link to another page with an arrow animation
 * usage: <LearnMore to="page">text to display</LearnMore>
 * @param {*} params
 * @returns
 */
const LearnMore = (params) => {
    if (params.to && params.to.includes("http")) {
        return (
            <a className={styles.LearnMore} href={params.to || "#"}>
                {params.children}
                <span className={styles.arrow}>→</span>
            </a>
        );
    } else {
        return (
            <Link className={styles.LearnMore} to={params.to || "#"}>
                {params.children}
                <span className={styles.arrow}>→</span>
            </Link>
        );
    }
};
export default LearnMore;
