import { makeStyles } from '@material-ui/core/styles'


 const useStyles = makeStyles((theme) => ({

    layout: {
      padding:'0.5em',
      margin:'auto',
      width: '25.5em',
      border:'0px',
      backgroundColor:'#FAFAFA',
      /*[theme.breakpoints.up(360)]: {
        width: 360,
        height: '40em',
      },*/
    },
    paper: {
      marginTop: '0px',
      marginBottom: '0px',
      paddingLeft: '1em',
      paddingRight: '2em',
      paddingTop: '0.1875em',
      height: 'auto',
      /*[theme.breakpoints.up(360)]: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },*/
    },
  }));

  export default useStyles;