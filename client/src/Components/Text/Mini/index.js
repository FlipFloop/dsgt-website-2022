//imports
import styles from "./Mini.module.scss";

/**
 * mini text
 * @param {*} params 
 * @returns 
 */
const Mini = (params) => {
    return <p className={styles.MiniText}>{params.children}</p>;
};
export default Mini;
