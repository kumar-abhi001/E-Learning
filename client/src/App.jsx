import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <SideNavBar />
        <div className=" mt-10 ml-80 pl-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App
