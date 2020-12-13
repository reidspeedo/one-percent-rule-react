import React, {Component} from 'react';
import axios from 'axios';

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            value:'',
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleAdd() {
        const url = "http://127.0.0.1:8000/properties/" + this.state.value
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    properties: this.state.properties.concat(response.data)
                });
            })
            .catch(error => {console.log(error)})
    }
    render() {
        return (
            <div>
                <div className="zipinput">
                    <div className="input-group input-group-sm mb-3">
                        <input type="text" className="form-control" placeholder="Zip Code"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.handleAdd}>Retrieve</button>
                        </div>
                    </div>
                </div>
                <div id="middle" className="urls">
                    <div id="urls" className="links">
                        <ul>
                            {this.state.properties.map(property => <li>{property.url}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Properties;