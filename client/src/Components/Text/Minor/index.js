//imports
import styles from "./Minor.module.scss";

/**
 * A minor header -- pass in type (a,b) for different colors
 * @param {*} params
 * @returns
 */
const Minor = (params) => {
    return (
        <h2
            {...params}
            className={`${styles.MinorText} ${
                styles[`Minor${params.type ? params.type.toUpperCase() : "A"}`]
            }`}
        >
            {params.children}
        </h2>
    );
};
export default Minor;
