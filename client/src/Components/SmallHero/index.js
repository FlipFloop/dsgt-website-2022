//imports
import styles from "./SmallHero.module.scss";

import smallblob from "../../assets/images/blobs/small-header--export.svg";

/**
 * the landind hero in small scale for sub pages, has title (params.title) and a description (params.desc || params.description)
 * @param {*} params
 * @returns
 */
const SmallHero = (params) => {
    return (
        <div {...params} className={styles.SmallHero}>
            <img className={styles.SmallHeroBlob} src={smallblob} alt="blob" />
            <div className={styles.SmallHeroWrapper}>
                <div className={styles.SmallHeroLeft}>
                    <h1 className={styles.major}>{params.title}</h1>
                    <h2 className={styles.minor}>
                        {params.desc || params.description}
                    </h2>
                    <div className={styles.HeroSep}></div>
                </div>
            </div>
        </div>
    );
};
export default SmallHero;
