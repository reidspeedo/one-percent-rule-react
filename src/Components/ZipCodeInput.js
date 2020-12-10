import React, {Component} from 'react';

class ZipCodeInput extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Zip Code"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
            </div>
        );
    }
}

export default ZipCodeInput;