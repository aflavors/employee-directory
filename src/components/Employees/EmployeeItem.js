import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image } from 'semantic-ui-react';

const EmployeeItem = (props) => {
    
    //Split dob.date string at the "T" to format DOB
    function dateFormat(date){
        const temp = date.split("T");
        return temp[0];
    }

    //Destructuring this.state for access to props
    const { name, email, picture, phone, dob } = props.employee;
    return (
        <Table.Row>
            {/* Image */}
            <Table.Cell>
                <Image src={picture.thumbnail} alt="Thumbnail portrait of"/>
            </Table.Cell>
            {/* First and Last Name */}
            <Table.Cell>
                <p>{name.first} {name.last}</p>
            </Table.Cell>
            {/* Phone Number */}
            <Table.Cell>
                <p>{phone}</p>
            </Table.Cell>
            {/* Email */}
            <Table.Cell>
                <p>{email}</p>
            </Table.Cell>
            {/* Formatted DOB */}
            <Table.Cell>
                <p>{dateFormat(dob.date)}</p>
            </Table.Cell>
        </Table.Row>
    )
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeItem