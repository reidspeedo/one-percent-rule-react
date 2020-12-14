import React, {Component} from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'
import '../App.css'

class Property extends Component {
    render() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle style={{"padding": "0pt", "margin": "0pt"}}as={Button} variant="link" eventKey="0">
                            {this.props.address + ", " + this.props.postal_code}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul style={{"float":"left",}}>
                                <b>Property Details</b>
                                <li>Postal Code: {this.props.postal_code}</li>
                                <li>List Price: {this.props.price}</li>
                                <li>Rent Estimate: {this.props.rent_estimate}</li>
                                <li><a href={this.props.url}>{this.props.url}</a></li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Property;