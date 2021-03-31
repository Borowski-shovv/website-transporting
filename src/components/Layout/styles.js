import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles,
  } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';



  let theme = createMuiTheme({
    palette: { 
      type: 'light', 
      primary: red, 
      secondary: blue
    },
    typography: {
      h6: {
        fontWeight: 'bold',
        
      }
    },
  });
  theme = responsiveFontSizes(theme);

  theme.overrides = {
    MuiButton: {
      containedPrimary: {
      }
    }
  }

  const useStyle = makeStyles(() => ({
    root: {

      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      // backgroundColor: theme.palette.background.default,
      backgroundColor: '#ebebeb',
      color: theme.palette.text.primary,
    },
    paper: {
      backgroundColor: '#ebebeb',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    addressPaper: {
      justifyContent: 'center',
      padding: '30px 0px',
    }
  }));
  export { theme, useStyle };