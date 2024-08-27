import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Success from "./Pages/success";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => {
  return <Router>
      <Routes>
        <Route path="/" element={ <Home/> } > </Route>
        <Route path="/NotFound" element={<NotFound/> } > </Route>
        <Route path="/Success" element={<Success/> } > </Route>
      </Routes>
      <Toaster/>
    </Router>;
  
};
export default App;