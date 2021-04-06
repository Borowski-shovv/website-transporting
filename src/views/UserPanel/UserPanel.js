import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';
import './UserPanel.css';
import {Container} from '@material-ui/core';

function UserPanel() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    // useEffect(() => {
    //     if (!userData.token) history.push('/login');
    // });

    return (
        <div className="user-panel--wrapper">
            <Container>
                <h2>Panel klienta</h2>
            </Container>
        </div>
    )
}

export default UserPanel
