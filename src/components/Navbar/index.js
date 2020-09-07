import React from 'react';
import "./style.css";

import { Header, Icon } from 'semantic-ui-react'

function Navbar() {
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>
                    Employee Directory
                </Header.Content>
                <span className="sub header" textAlign="center">
                    Click on carrots to filter by name or use the search box to narrow your results.
                </span>   
            </Header>
        </div>
    )
}

export default Navbar;