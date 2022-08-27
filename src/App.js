import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <>
    <Router>
      

    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
     
    </Router>
      
    </>
  );
}

export default App;
