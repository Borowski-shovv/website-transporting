import React, { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    navLink: {
        color: 'white',
      },
})
)

function AuthOptions() {
    const { userData, setUserData} = useContext(UserContext);
    // const [anchorProfile, setAnchorProfile] = React.useState(null);
    // const openProfile = Boolean(anchorProfile);
    const history = useHistory(); 
    const classes = useStyles();

    const logout = () => {
        
        localStorage.setItem('user-email', '')
        localStorage.setItem('user-id', '')
        localStorage.setItem('user-token', '')
        localStorage.setItem('order_id', '')

        setUserData({
            token: undefined,
            user: undefined,
            id: undefined,
        })

        // handleButtonClick('/')
        // console.log('click')
    }

    // const handleMenuProfile = event => {
    //     setAnchorProfile(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorProfile(null);
    // };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    return (
        <>
             {userData.token ? (
                // <div>
                //      <Button
                //             // variant="contained"
                //             className={classes.navLink}
                //             onClick={() => handleButtonClick("/konto")}
                //         >
                //             Moje konto
                //         </Button>
                //         <Button
                //             // variant="contained"
                //             className={classes.navLink}
                //             onClick={logout}
                //         >
                //             Wyloguj
                //         </Button>
                // </div>  
                <>
                    <li>
                        <NavLink 
                        activeClassName="navigationItemLinkActive"
                        className="navigationItemLink" to="/konto"><span> Moje konto</span></NavLink>

                        <Button
                            // variant="contained"
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

                        {/* <Button
                            // variant="contained"
                            className={classes.navLink}
                            onClick={() => handleButtonClick("/logowanie")}
                        >
                            Logowanie
                        </Button>
                        <Button
                            // variant="contained"
                            className={classes.navLink}
                            onClick={() => handleButtonClick("/rejestracja")}
                        >
                            Rejestracja
                        </Button> */}
                    </>
                )
            }
        </>
    )
}

export default AuthOptions
