import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/Main Page/MainPage";
import AboutMe from "./components/AboutMe Page/AboutMe";
import Contact from "./components/Contact Page/Contact";
import Projects from "./components/Projects Page/Projects";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path={"/aboutMe"} exact element={<AboutMe />} />
                <Route path={"/contact"} exact element={<Contact />} />
                <Route path={"/projects"} exact element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;
