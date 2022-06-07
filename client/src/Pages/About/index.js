//imports
import { useState, useEffect  } from "react";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Major from "../../Components/Text/Major";

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
            <Major>About Us</Major>
        </div>
    );
};
export default About;
