import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    navLink: {
        color: 'white',
        padding: 0,
        lineHeight: 1.70,
        fontSize: '14px',
      },
})
)

function AuthOptions() {
    const { userData, setUserData} = useContext(UserContext);
    const history = useHistory(); 
    const classes = useStyles();

    const logout = () => {
        
        setUserData({
            token: undefined,
            user: undefined,
            id: undefined,
        })

        localStorage.setItem('user-email', '')
        localStorage.setItem('user-id', '')
        localStorage.setItem('user-token', '')
        localStorage.setItem('order_id', '')

        handleButtonClick('/')
    }

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    return (
        <>
             {userData.token !== undefined ? (
                <>
                    <li>
                        <NavLink 
                        activeClassName="navigationItemLinkActive"
                        className="navigationItemLink" to="/konto"><span> Moje konto</span></NavLink>
                    </li>
                    <li>
                        <Button
                            className={classes.navLink}
                            onClick={logout}
                        >
                            Wyloguj
                        </Button>
                    </li>
                </>
                ) : (
                    <>  
                    <li>
                        <NavLink 
                            activeClassName="navigationItemLinkActive"
                            className="navigationItemLink" 
                            to="/logowanie">Logowanie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName="navigationItemLinkActive"
                            className="navigationItemLink" 
                            to="/rejestracja">Rejestracja
                        </NavLink>
                    </li>
                    </>
                )
            }
        </>
    )
}

export default AuthOptions
