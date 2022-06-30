import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom';
import {About, Home} from "./pages";
import Profile from "./pages/Profile";

class App extends Component{

    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile/>}/>
            </Routes>
        );
    }
}

export default App;