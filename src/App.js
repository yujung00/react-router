import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom';
import {About, Home} from "./pages";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

class App extends Component{

    render() {
        return (
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profiles/:username" element={<Profile/>}/>
                </Route>
                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/mypage" element={<MyPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        );
    }
}

export default App;