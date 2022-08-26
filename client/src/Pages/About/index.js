//imports
import styles from "./About.module.scss";

import { useState, useEffect } from "react";

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import SmallHero from "../../Components/SmallHero";
import TeamCard from "../../Components/TeamCard";

import John from "../../assets/images/portraits/john.jpg";

const About = (params) => {
    //the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        //show all page
        document.getElementsByTagName("body")[0].style.overflow = "auto";

        //handle the resizing of the window to render desktop vs mobile elements
        function handleResize(e) {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);
    return (
        <div {...params} id="about-page">
            <Background />
            <Navbar screen_width={windowWidth} />
            <SmallHero
                title="Meet The Team"
                desc="The people who make DSGT what it is"
            />
            <Section id="teams">
                <div className={styles.TeamFlex}>
                    <TeamCard
                        name="John Ramberger"
                        title="Director of Technology"
                        img={John}
                    >
                        The Technology Team specializes in frontend
                        web-development as well as backend systems. We work on
                        the many websites used by DSGT and Hacklytics, most notibly
                        being the site you are on now and the Membership Portal.
                    </TeamCard>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default About;
