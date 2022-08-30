//imports
import styles from "./About.module.scss";

import { useState, useEffect } from "react";

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import SmallHero from "../../Components/SmallHero";
import TeamCard from "../../Components/TeamCard";

import Devarsh from "../../assets/images/portraits/Devarsh.jpeg";
import Jessi from "../../assets/images/portraits/Jessi.jpg";
import John from "../../assets/images/portraits/John.jpg";
import Krishi from "../../assets/images/portraits/Krishi.jpg";
import Pranay from "../../assets/images/portraits/Pranay.jpg";
import Pratham from "../../assets/images/portraits/Pratham.jpeg";
import Reshma from "../../assets/images/portraits/Reshma.JPG";
import Shreiyas from "../../assets/images/portraits/Shreiyas.png";

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
            <Section id="teams" makefull="yes">
                <div className={styles.TeamFlex}>
                    <TeamCard
                        name="Shreiyas Saraf"
                        title="President"
                        img={Shreiyas}
                        top="60%"
                    >
                        Description
                    </TeamCard>
                    <TeamCard
                        name="Pratham Mehta"
                        title="Vice President & Director of Hacklytics"
                        img={Pratham}
                        zoom
                        top
                    >
                        The Hacklytics team works to organize and conduct DSGT’s
                        flagship hackathon every Spring. This is a great way to
                        network with sponsors and develop strong communication
                        and management skills. Plus, you get to meet many new
                        people every year!
                    </TeamCard>
                    <TeamCard
                        name="Krishi Manek"
                        title="Director of Projects"
                        img={Krishi}
                        zoom
                        top="40%"
                    >
                        The projects team consists of numerous focus groups
                        working on industry and research oriented data-science
                        projects. Getting involved with projects is a great way
                        to gain hands-on experience with AI/ ML and meet new
                        people while collaborating on a unique idea. Each
                        semester we showcase all projects at the DSGT project
                        expo!
                    </TeamCard>
                    <TeamCard
                        name="John Ramberger"
                        title="Director of Technology"
                        img={John}
                        wide
                    >
                        The Technology Team specializes in frontend
                        web-development as well as backend systems. We work on
                        the many websites used by DSGT and Hacklytics, most
                        notibly being this site and the Membership Portal.
                    </TeamCard>
                    <TeamCard
                        name="Jessi Chen"
                        title="Director of Content"
                        img={Jessi}
                    >
                        The content team manages the Bootcamp and Udemy courses,
                        where we teach our members core data science skills on a
                        start-to-finish journey. We provide workshops on
                        beginner-friendly data science and machine learning
                        topics and help members complete a fully polished and
                        professional data science project by the end of
                        Bootcamp. We are also actively working to improve our
                        course materials, our website, and students' learning
                        experience through an exciting collaboration with
                        Deepnote.
                    </TeamCard>
                    <TeamCard
                        name="Reshma Gudla"
                        title="Director of Marketing"
                        img={Reshma}
                        tall
                        zoom
                        top="-20%"
                    >
                        The marketing team focuses on social media initiatives,
                        graphic design, newsletters, outreach, and more to
                        increase engagement with DSGT both on and off campus.
                        Our work consists of creating digital and in-person
                        marketing strategies for both DSGT and Hacklytics!
                    </TeamCard>
                    <TeamCard
                        name="Devarsh Pandya"
                        title="Director of Internal Affairs"
                        img={Devarsh}
                        zoom
                        top="20%"
                    >
                        The Internal Affairs Team manages membership moderation
                        and develops ideas to improve the membership experience.
                        We also act as an “internal health check” for the club
                        by analyzing club data to see where DSGT is succeeding
                        and where it could do better.
                    </TeamCard>
                    <TeamCard
                        name="Pranay Begwani"
                        title="Director of Finance"
                        img={Pranay}
                    >
                        The Finance Team's focus is to most efficiently utilize
                        DSGT's resources. We focus on fundraising, budgeting,
                        and keeping a check on the club's spending. All of these
                        jobs are essential to develop management skills and are
                        a great way to connect with individuals in all types of
                        industries beyond just data science and technology.
                    </TeamCard>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default About;
