import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    const [anchorProfile, setAnchorProfile] = React.useState(null);
    const openProfile = Boolean(anchorProfile);
    const history = useHistory(); 
    const classes = useStyles();

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })

        localStorage.setItem('user-email', '')
        localStorage.setItem('user-id', '')
        localStorage.setItem('user-token', '')
        localStorage.setItem('order_id', '')
    }

    const handleMenuProfile = event => {
        setAnchorProfile(event.currentTarget);
      };

    const handleClose = () => {

        setAnchorProfile(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
      };

    return (
        <div>
             {userData.token ? (
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuProfile}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorProfile}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={openProfile}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Moje konto</MenuItem>
                        <MenuItem onClick={logout}>Wyloguj</MenuItem>
                    </Menu>
                </div>  
                ) : (
                    <>
                        <Button
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
                        </Button>
                    </>
                )
            }
        </div>
    )
}

export default AuthOptions
