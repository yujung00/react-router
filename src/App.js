import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom';
import {About, Home} from "./pages";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";

class App extends Component{

    render() {
        return (
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profiles/:username" element={<Profile/>}/>
                </Route>
                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article/>}/>
                </Route>

            </Routes>
        );
    }
}

export default App;