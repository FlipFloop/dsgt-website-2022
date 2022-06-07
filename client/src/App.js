//imports
import "./App.css";

//import react stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";

function App() {
    // //the width of the window
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     //handle the resizing of the window to render desktop vs mobile elements
    //     function handleResize(e) {
    //         setWindowWidth(window.innerWidth);
    //     }

    //     window.addEventListener("resize", handleResize);
    // }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<h1>test</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
