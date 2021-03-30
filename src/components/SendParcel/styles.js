import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 3),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  titleForm: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  infoParagraph: {
    width: '70%',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    
  }
  
}));
