//imports
import "./Home.css";

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

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = (params) => {
    //the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
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
            <Navbar screen_width={windowWidth} />
            <Hero screen_width={windowWidth} />
            <Section id="about">
                <Major type="a">About Us</Major>
                <Mini>
                    As the largest student-run data science organization on
                    campus, we are dedicated to developing technical skills in
                    data science through various activities and events such as
                    club projects, workshops, guest speakers and professors. Our
                    organization serves as a platform for undergraduate and
                    graduate students of all majors at Georgia Tech to learn
                    about and practice data science and analytics. We are a
                    focused club with three main components: projects,
                    bootcamps, and Hacklytics.
                </Mini>
            </Section>
            <Section id="stats">
                <Major type="b">Who We Are</Major>
                <Mini>
                    In the spring 2022 semester, we had 167 dedicated DSGT
                    members. Here's how we look like:
                </Mini>
                <div className="charts-flex">
                    <div className="chart-card">
                        <Minor>CLASS DEMOGRAPHICS</Minor>
                        <div className="pie-chart">
                            <Pie data={ClassData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="chart-card">
                        <Minor type="b">MAJOR DEMOGRAPHICS</Minor>
                        <div className="pie-chart">
                            <Pie data={MajorData} options={chartOptions} />
                        </div>
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
                <div className="cards">
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
            <Footer screen_width={windowWidth} />
        </div>
    );
};
export default Home;
