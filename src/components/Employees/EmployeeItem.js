import React from 'react';
import PropTypes from 'prop-types';

const EmployeeItem = (props) => {
    
    //Destructuring this.state for access to props
    const { id, name, email, picture } = props.employee;

        return (
            <div>
                <h3>Name: {name.first} {name.last}</h3>
                <img src={picture.thumbnail} alt="Thumbnail portrait"/>
                <p>ID: {id.value}</p>
                <p>Email: {email} </p>
            </div>
        )
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeItem