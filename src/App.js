import './App.css';
import React from "react"
import NavBar from "./Components/NavBar"
import ZipCodeInput from "./Components/ZipCodeInput"
import Map from "./Components/Map"

class onePercent extends React.Component {
  render() {
    return (
        <div id="main">
            <NavBar></NavBar>
            <div class="top">
                <h2>onePercent</h2>
                <div class="zipinput">
                    <ZipCodeInput></ZipCodeInput>
                </div>
            </div>
            <div class="middle">
                <div id="middle" class="urls">
                    <div id="urls" class="links"></div>
                </div>
                <div id="middle" class="map">
                    <Map></Map>
                </div>
                <div id="middle" class="cases">
                    <div id="cases" class="best-case"></div>
                    <div id="cases" className="worst-case"></div>
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