import { makeStyles } from '@material-ui/core/styles'


 const useStyles = makeStyles((theme) => ({

    layout: {
      padding:'0.5em',
      margin:'auto',
      width: '25.5em',
      border:'0',
      backgroundColor:'#F8F9FA',
    },
    blackLayout: {
      padding:'0.5em',
      margin:'auto',
      width: '25.5em',
      border:'0',
      backgroundColor:'#373737',
    },
    paper: {
      marginTop: '0 auto',
      padding: '1em',
      backgroundColor: "#F8F9FA"
    },
    paperNoColor: {
      marginTop: '0 auto',
      padding: '0em 1em',
    },

    layoutFix: {
      margin:'auto',
      width: '25.5em',
      border:'0',
      backgroundColor:'#F8F9FA',
    },
    paperFix: {
      marginTop: '0 auto',
      backgroundColor: "#F8F9FA"
    },

  }));

  export default useStyles;