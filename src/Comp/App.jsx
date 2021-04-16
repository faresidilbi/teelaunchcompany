import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import logo from './logo.jpg';

function App() {
    return (
        <div class="all">
            <Header />
            <br />
            <img class="fix" src={logo} alt="Logo" />

            <Note />

            <Footer/>
        </div>
    );
}


export default App;