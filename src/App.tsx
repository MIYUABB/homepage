import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Me from "./pages/me";
import Hobbys from "./pages/hobbys";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/me" element={<Me/>}/>
                <Route path="/hobbys" element={<Hobbys/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
