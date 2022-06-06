import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./Components/Registration";
import Summary from "./Components/Summary";
import Menu from "./Components/Menu";
import Learn from "./Components/Learn";
import NoPage from "./Components/NoPage";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <hr/>
                <Routes>
                    <Route path="/" element={<Registration/>}/>
                    <Route path="summary" element={<Summary/>}/>
                    <Route path="learn" element={<Learn/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}