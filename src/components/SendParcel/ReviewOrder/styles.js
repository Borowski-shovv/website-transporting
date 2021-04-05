import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemSum: {
    width: 165,
    paddingTop: 0,
    paddingBottom: 0,
  },
  total: {
    fontWeight: '700'
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  summaryAddressCard: {
    justifyContent: 'center',
    padding: '30px 0px',
  },
  imgWidth: {
    width: 40,
    margin: '10px 0 0 20px'
  },
  ListSecondaryText: {
    fontSize: '13px'
  },
  CheckBoxRules: {
    width: 'auto',
  },
  columnWidth: {
    minWidth: '221px'
  },
  row: {
    padding: 8,
    [theme.breakpoints.down('sm')] : {
        borderBottom: '1px solid gray',
    }
  },
  cell: {
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')] : {
          flexDirection: 'row'
      }
  },
  titleSummary: {
    fontSize: 13,
},
}));
