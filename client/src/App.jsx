import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
function App() {

  return (
    <>
      <Navbar />
      <SideNavBar />
    </>
  )
}

export default App
