//imports
import styles from "./Home.module.scss";

import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Section from "../../Components/Section";
import Major from "../../Components/Text/Major";
import Mini from "../../Components/Text/Mini";
import Minor from "../../Components/Text/Minor";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

//import chart data
import { ClassData, MajorData } from "../../assets/Data/demographics";

//import images
import storm from "../../assets/images/logos/storm.png";
import mentra from "../../assets/images/logos/Mentra.png";
import birdclef from "../../assets/images/logos/birdclef.png";
import gtaa from "../../assets/images/logos/gtaa.png";

import slide1 from "../../assets/images/slides/slide1.jpg";
import slide6 from "../../assets/images/slides/slide6.jpg";
import slide7 from "../../assets/images/slides/slide7.jpg";
import slide8 from "../../assets/images/slides/slide8.jpg";
import slide0 from "../../assets/images/slides/slide0.jpg";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import LearnMore from "../../Components/LearnMore";
import EventCard from "../../Components/EventCard";
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = (params) => {
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

    let chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let sum = 0;
                        for (var x of context.dataset.data) {
                            sum += x;
                        }
                        let percent =
                            Math.round((context.parsed * 1000) / sum) / 10;
                        if (context.parsed !== percent) {
                            return ` ${context.label}: ${context.parsed} (${percent}%)`;
                        }
                        return ` ${context.label}: ${context.parsed}%`;
                    },
                },
            },
        },
        color: "#fff",
    };

    return (
        <div {...params} id="home-page">
            <Background />
            {/* load the navbar */}
            <Navbar screen_width={windowWidth} page="home" />
            <Hero screen_width={windowWidth} />
            <Section id="about">
                <div
                    className={styles.FlexRow}
                    style={{ flexWrap: "wrap-reverse" }}
                >
                    <div className={styles.SectionHalf}>
                        <Major type="a">About Us</Major>
                        <Mini>
                            As the largest student-run data science organization
                            on campus, we are dedicated to developing technical
                            skills in data science through various activities
                            and events such as club projects, workshops, guest
                            speakers and professors. Our organization serves as
                            a platform for undergraduate and graduate students
                            of all majors at Georgia Tech to learn about and
                            practice data science and analytics. We are a
                            focused club with three main components: projects,
                            bootcamps, and Hacklytics.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="about">Meet the Team</LearnMore>
                        </Mini>
                    </div>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide0}
                            alt="The DSGT Exec Team"
                        />
                    </div>
                </div>
            </Section>
            <Section id="stats">
                <Major type="b">Who We Are</Major>
                <Mini>
                    In the spring 2022 semester, we had 167 dedicated DSGT
                    members. Here's how we look like:
                </Mini>
                <br></br>
                <div className={styles.ChartsFlex}>
                    <div className={styles.ChartCard}>
                        <Minor>CLASS DEMOGRAPHICS</Minor>
                        <div className={styles.PieChart}>
                            <Pie data={ClassData} options={chartOptions} />
                        </div>
                    </div>
                    <div className={styles.ChartCard}>
                        <Minor type="b">MAJOR DEMOGRAPHICS</Minor>
                        <div className={styles.PieChart}>
                            <Pie data={MajorData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="bootcamp">
                <div
                    className={styles.FlexRow}
                    style={{ flexWrap: "wrap-reverse" }}
                >
                    <div className={styles.SectionHalf}>
                        <Major type="a">Bootcamp</Major>
                        <Mini>
                            We teach our members core data science skills
                            through a bootcamp that takes our members on a
                            start-to-finish journey, touching on essentials such
                            as cleaning data to more advanced concepts, such as
                            feature engineering. Workshops are project-based and
                            all members leave bootcamp with a fully polished,
                            professional data science project.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="https://dsgtbootcamp.netlify.app/">
                                Learn more at our Bootcamp site
                            </LearnMore>
                        </Mini>
                    </div>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide8}
                            alt="Hacklytics"
                        />
                    </div>
                </div>
            </Section>
            <Section id="hacklytics">
                <div className={styles.FlexRow}>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide6}
                            alt="Hacklytics"
                        />
                    </div>
                    <div className={styles.SectionHalf}>
                        <Major type="b">Hacklytics</Major>
                        <Mini>
                            Hacklytics is Georgia Tech’s 36 hour datathon
                            brought to you by Data Science at Georgia Tech,
                            Georgia Tech's largest community of student data
                            scientists! Our goal is to give students an
                            opportunity to get hands-on experience with data
                            science, collaborating on projects that make a real
                            impact. As the world is becoming increasingly
                            dependent on data, our theme for Hacklytics 2022 is
                            "Connecting Communities". We look forward to seeing
                            innovative projects inspired by using data as
                            building blocks for a better world. Hacklytics 2022
                            will be held in a hybrid format from February 18 -
                            20th, 2022.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="https://hacklytics.io">
                                Learn more about the upcoming Hacklytics 2023
                            </LearnMore>
                        </Mini>
                    </div>
                </div>
            </Section>
            <Section id="projects">
                <Major type="a">Projects</Major>
                <Mini>
                    Keeping with our motto, “data science with a focus on the
                    community,” projects enable members to give back to the
                    community while gaining hands-on data science experience. We
                    showcase our projects each semester through our project
                    expo. Here are some of the projects we are currently working
                    on:
                </Mini>
                <div className={styles.ProjectCards}>
                    <Card img={storm} heading="Stormalytics">
                        Stormalytics, an intelligent tornado activity prediction
                        system, forecasts tornadoes based on records, rich
                        doppler data, and statistic-based models.
                    </Card>
                    <Card img={mentra} heading="Mentra">
                        Mentra is a startup that uses an NLP classifier to help
                        neurodiverse individuals match with employers. It has
                        won Microsoft AI for Accessibility Challenge and was
                        named the Grand Prize Winner by the Biden
                        Administration.
                    </Card>
                    <Card img={birdclef} heading="Kaggle birdCLEF">
                        A data science competition hosted on Kaggle, birdCLEF
                        focuses on developing machine learning algorithms to
                        identify avian vocalizations in continuous soundscape
                        data to aid conservation efforts.
                    </Card>
                    <Card img={gtaa} heading="GT Athletics">
                        We are analyzing basketball data to help GT Athletics
                        maximize their chances of winning by finding optimal
                        non-conference opponents.
                    </Card>
                </div>
            </Section>
            <Section id="getinvolved">
                <Major type="b">Get Involved</Major>
                <Mini>Check out these opportunities to get involved:</Mini>
                <div className={styles.Cards}>
                    <EventCard
                        img={slide1}
                        heading="Join DSGT"
                        button_text="Learn More"
                        button_to="https://member.datasciencegt.org"
                    >
                        Take part in the largest data science organization at
                        Georgia Tech!
                    </EventCard>
                    <EventCard
                        img={slide7}
                        heading="Apply for Leadership Positions"
                        button_text="Learn More"
                        button_to="https://member.datasciencegt.org/portal/forms"
                    >
                        Join one of the many executive teams that help run DSGT!
                    </EventCard>
                    <EventCard
                        img={slide6}
                        heading="Hacklytics"
                        when="feb 10-12 2023"
                        button_text="Learn More"
                        button_to="#hacklytics"
                    >
                        Hacklytics is Georgia Tech’s 36 hour datathon brought to
                        you by Data Science at Georgia Tech, Georgia Tech's
                        largest community of student data scientists!
                    </EventCard>
                </div>
            </Section>
            <Footer screen_width={windowWidth} />
        </div>
    );
};
export default Home;
