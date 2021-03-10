import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  total: {
    fontWeight: '700'
  },
  title: {
    marginTop: theme.spacing(2)
  },
  summaryAddressCard: {
    justifyContent: 'center',
    padding: '30px 0px',
  }
}));
