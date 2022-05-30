import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Routes/Navbar";
import Pong from "./Routes/PongPage";
import NotPong1 from "./Routes/NotPongPage1";
import NotPong2 from "./Routes/NotPongPage2";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Pong/>}/>
                    <Route exact path='/notpong1' element={<NotPong1/>}/>
                    <Route exact path='/notpong2' element={<NotPong2/>}/>
                </Routes>
            </Router>
        </div>
    );
}