import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
const {innerHeight: winHight } = window;

const App = () => {
  useEffect(() => { document.body.style.backgroundColor = '#181A1F' }, []);

  return (
    <div
      style={{
        backgroundColor: "#181A1F",
        height: "100%",
        minHeight:winHight,
        marginLeft: 100, 
        marginRight: 100,
      }}
    >
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
