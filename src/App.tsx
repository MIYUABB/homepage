import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Career from "./pages/career";
import Hobbys from "./pages/hobbys";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/hobbys" element={<Hobbys/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
