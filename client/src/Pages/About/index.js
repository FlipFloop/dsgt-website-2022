//imports
import "./About.css";

import { useState, useEffect } from "react";

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import SmallHero from "../../Components/SmallHero";
import TeamCard from "../../Components/TeamCard";

const About = (params) => {
    //the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
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
                desc="The people that make DSGT what it is"
            />
            <Section id="teams">
                <div className="teams-flex">
                    <TeamCard title="Tech Team">fjdsklfjdsjfkdj lff</TeamCard>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default About;
