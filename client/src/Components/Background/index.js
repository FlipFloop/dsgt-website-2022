//imports
import styles from "./Background.module.scss";

/**
 * The background for the page (squiggles on gray background)
 * @param {*} params
 * @returns
 */
const Background = (params) => {
    return (
        <div {...params} className={styles.WavyBg}>
            <div className={styles.BgNav}></div>
            <div className={styles.Squiggles}></div>
        </div>
    );
};
export default Background;
