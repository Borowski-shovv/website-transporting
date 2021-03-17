import React, { useContext} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, Link } from "react-router-dom";
import Logo from '../assets/images/solidfach.svg';
import UserContext from '../context/userContext';
import AuthOptions from "../auth/AuthOptions";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#24292e'
  },
  logo: {
    maxWidth: '150px',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navLink: {
    color: 'white',
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
}));

const Header = props => {
  const { history } = props;
  const { userData, setUserData} = useContext(UserContext)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(userData.token)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Start",
      pageURL: "/"
    },
    // {
    //   menuTitle: "Logowanie",
    //   pageURL: "/logowanie"
    // },
    // {
    //   menuTitle: "Rejestracja",
    //   pageURL: "/rejestracja"
    // }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <div>
                <Link to="/">
                    <img className={classes.logo} src={Logo} alt="logo" />
                </Link>
            </div>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <>
                    <MenuItem key={menuTitle} onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                    </>
                  );
                })}
                <AuthOptions />
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                // variant="contained"
                className={classes.navLink}
                onClick={() => handleButtonClick("/")}
              >
                START
              </Button>
              <Button
              
                // variant="contained"
                className={classes.navLink}
                onClick={() => handleButtonClick("/wycena")}
              >
                Wyceń paczkę
              </Button>            
              <AuthOptions />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
