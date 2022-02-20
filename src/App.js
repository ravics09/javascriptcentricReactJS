import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundImage from './assets/images/backgroundImg.png'
const {innerHeight: winHight } = window;

const App = () => {
  useEffect(() => { document.body.style.backgroundColor = '#181A1F' }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        // background: "rgb(180,34,195)",
        // background: "linear-gradient(0deg, rgba(180,34,195,1) 0%, rgba(58,45,253,1) 100%)",
        height: "100%",
        minHeight:winHight,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundImage: `url(${BackgroundImage})`
        // marginLeft: 100, 
        // marginRight: 100,
      }}
    >
      <Router>
        <Navbar style={{position: "sticky"}}/>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
