import React, {Component} from 'react';
import ZipCodeInput from "./ZipCodeInput";
import axios from 'axios';

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
        }
    }

    handleAdd() {
        axios.get("http://127.0.0.1:8000/properties/45140")
            .then(res => {
                const properties = res.data;
                this.setState({properties});
            })
    }
    render() {
        return (
            <div>
                <div className="zipinput">
                    <ZipCodeInput></ZipCodeInput>
                </div>
                <div id="middle" className="urls">
                    <div id="urls" className="links"></div>
                    <ul>
                        {this.state.properties}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Properties;