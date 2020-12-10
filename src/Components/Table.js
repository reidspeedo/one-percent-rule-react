import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'

class LeadsTable extends Component {
    render() {
        return (
            <Table responsive striped="True" variant="light">
                <thead>
                <tr>
                    <th>#</th>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default LeadsTable;