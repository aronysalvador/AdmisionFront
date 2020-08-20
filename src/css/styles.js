import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    layout: {
        padding: '0.5em',
        margin: 'auto',
        width: '25.5em',
        border: '0',
        backgroundColor: '#F8F9FA',
    },
    paper: {
        marginTop: '0 auto',
        padding: '1em',
        backgroundColor: "#F8F9FA"
    },

    blackLayout: {
        padding: '0.5em',
        margin: 'auto',
        width: '24.5em',
        border: '0',
        // backgroundColor: '#373737',
    },
    paperNoColor: {
        marginTop: '0.5em',
        padding: '0.5em 0.5em 1em 0.5em',
        backgroundColor: "#373737"
    },

    layoutFix: {
        margin: 'auto',
        width: "24.5em",
        border: '0',
        backgroundColor: '#F8F9FA',
    },
    paperFix: {
        marginTop: '0.5em',
        backgroundColor: "#F8F9FA"
    },

}));

export default useStyles;