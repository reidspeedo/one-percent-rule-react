import React, {Component} from 'react';
import axios from 'axios';
import Property from "./Property";

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            value:'',
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.clearProperties = this.clearProperties.bind(this)
        this.saveProperties = this.saveProperties.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    clearProperties() {
        this.setState({properties: []});
    }

    saveProperties() {
        var property;
        for (property of this.state.properties) {
        const url = "http://127.0.0.1:8000/properties"
        axios.post(url,{
            address: property.address,
            postal_code: property.postal_code,
            price: property.price,
            rent_estimate: property.rent_estimate,
            url: property.url
        })
            .then(response => {
                console.log(response.data)
                });
            }
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
                    <div class="accordion-container">

                        <div class="overflow-auto">
                            <div id="urls" className="links">
                                {
                                    this.state.properties.map(
                                    property => <Property url={property.url} address={property.address} postal_code={property.postal_code} price={property.price} rent_estimate={property.rent_estimate}/>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={this.clearProperties} type="button" className="btn btn-secondary">Clear</button>
                        <button onClick={this.saveProperties} type="button" className="btn btn-secondary">Save</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Properties;