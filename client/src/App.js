//imports
import "./App.css";

import { useState, useEffect } from "react";

import DesktopNavbar from "./Components/DesktopNavbar";
import MobileNavbar from "./Components/MobileNavbar";

import Hero from "./Components/Hero";

function App() {
    //the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        //handle the resizing of the window to render desktop vs mobile elements
        function handleResize(e) {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className="App">
            {/* load the navbar */}
            {windowWidth > WIDTH_THRESHOLD ? <DesktopNavbar /> : <MobileNavbar />}
            <Hero />
        </div>
    );
}

export default App;
