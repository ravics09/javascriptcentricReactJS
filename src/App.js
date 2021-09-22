import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
