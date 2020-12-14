import './App.css';
import React from "react"
import NavBar from "./Components/NavBar"
import Map from "./Components/Map"
import Properties from "./Components/Properties";
import logographic from "./Images/logo-alone.png";

class onePercent extends React.Component {

  render() {
    return (
        <div id="main">
            <NavBar></NavBar>
            <div class="top">
                <img class='logo' src={logographic} alt="logo-graphic"/>
                <h1 class='logo'>nePercent</h1>
                {/*<p>Welcome to zee webpage.</p>*/}
                {/*<p>Aren't ya glad your here?</p>*/}
            </div>
            <div class="middle">
                <Properties></Properties>
                <div id="middle" class="map">
                    <Map></Map>
                </div>
                <div id="middle" class="cases">
                    <div id="cases" class="best-case"></div>
                    <div id="cases" class="worst-case"></div>
                </div>
            </div>
            <div class="bottom">
                <div class="buttons">
                    <div class="button">
                        <button type="button" className="btn btn-warning btn-lg">One Percent Rule</button>
                    </div>
                    <div class="button">
                        <button type="button" className="btn btn-primary btn-lg">Two Percent Rule</button>
                    </div>
                    <div class="button">
                        <button type="button" className="btn btn-secondary btn-lg">50  Percent Rule</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default onePercent;