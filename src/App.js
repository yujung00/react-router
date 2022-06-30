import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom';
import {About, Home} from "./pages";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

class App extends Component{

    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile/>}/>
                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article/>}/>
                </Route>

            </Routes>
        );
    }
}

export default App;