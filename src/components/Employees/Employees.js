import React, { Component } from 'react'
import EmployeeItem from './EmployeeItem';
import { Icon, Table } from 'semantic-ui-react';

class Employees extends Component {

    render() {
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>
                                Name
                                <Icon link name="caret down" />
                            </Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>DOB</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.employees.map(employee => (
                            <EmployeeItem key={employee.email} employee={employee} />
                        ))}
                    </Table.Body>
                </Table>  
            </div>
        )
    }
}

export default Employees;
