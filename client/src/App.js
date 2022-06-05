//imports
import "./App.css";

import { useState, useEffect } from "react";

import Background from "./Components/Background";

import Navbar from "./Components/Navbar";

import Hero from "./Components/Hero";
import SectionA from "./Components/SectionA";
import Footer from "./Components/Footer";

function App() {
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
        <div className="App">
            <Background />
            {/* load the navbar */}
            <Navbar screen_width={windowWidth} />
            <Hero screen_width={windowWidth} />
            <SectionA>
                <h1 className="major">test difu dlkfjds kfd </h1>
            </SectionA>
            <Footer />
        </div>
    );
}

export default App;
