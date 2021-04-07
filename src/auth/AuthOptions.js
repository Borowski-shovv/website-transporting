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

function AuthOptions({open, setOpen}) {
    const { userData, setUserData} = useContext(UserContext);
    const history = useHistory(); 
    const classes = useStyles();

    useEffect(() => {
        
    }, [])

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

       
        history.push('/');
      

        setOpen(!open)
    }

    return (
        <>
             {userData.token !== undefined ? (
                <>
                    <li>
                        <NavLink 
                        activeClassName="navigationItemLinkActive"
                        className="navigationItemLink" 
                        to="/konto"
                        onClick={open => setOpen(!open)}
                        ><span> Moje konto</span></NavLink>
                    </li>
                    <li>
                         <NavLink 
                            className="navigationItemLink" 
                            onClick={logout}
                            to="/"
                        >
                            <span>Wyloguj</span>
                        </NavLink>
                    </li>
                </>
                ) : (
                    <>  
                    <li>
                        <NavLink 
                            activeClassName="navigationItemLinkActive"
                            className="navigationItemLink" 
                            to="/logowanie"
                            onClick={open => setOpen(!open)}
                            >Logowanie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeClassName="navigationItemLinkActive"
                            className="navigationItemLink" 
                            to="/rejestracja"
                            onClick={open => setOpen(!open)}
                            >Rejestracja
                        </NavLink>
                    </li>
                    </>
                )
            }
        </>
    )
}

export default AuthOptions
