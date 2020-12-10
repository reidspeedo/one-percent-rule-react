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
                <div class="urls"></div>
                <div class="map"></div>
                <div class="cases">
                    <div class="best-case"></div>
                    <div className="worst-case"></div>
                </div>
            </div>
            <div class="bottom">
            </div>
        </div>
    )
  }
}

export default onePercent;