import './App.css';
import React from "react"
import NavBar from "./Components/NavBar"
import ZipCodeInput from "./Components/ZipCodeInput"

class onePercent extends React.Component {
  render() {
    return (
        <div id="main">
            <NavBar></NavBar>
            <div class="top">
                <h2>onePercent</h2>
                <ZipCodeInput></ZipCodeInput>
            </div>
            <div class="middle">
                <div id="middle" class="urls"></div>
                <div id="middle" class="map"></div>
                <div id="middle" class="cases">
                    <div id="cases" class="best-case"></div>
                    <div id="cases" className="worst-case"></div>
                </div>
            </div>
            <div class="bottom">
            </div>
        </div>
    )
  }
}

export default onePercent;