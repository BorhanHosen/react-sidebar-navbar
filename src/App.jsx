import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path based on your project structure
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
