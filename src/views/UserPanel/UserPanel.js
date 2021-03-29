import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';

function UserPanel() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    // useEffect(() => {
    //     if (!userData.token) history.push('/login');
    // });

    return (
        <div style={{paddingTop: '200px'}}>
            <h1>Panel klienta</h1>
        </div>
    )
}

export default UserPanel
