import React, { Component } from 'react'
import EmployeeItem from './EmployeeItem';

class Employees extends Component {

    render() {
        return (
            <div>
                {this.props.employees.map(employee => (
                    <EmployeeItem key={employee.indexOf} employee={employee} />
                ))}
            </div>
        )
    }
}

export default Employees;
