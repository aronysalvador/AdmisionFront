import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    '@media (max-width: 767px)': {
        /* For mobile phones */
        layout: {
            padding: '0.5em',
            margin: 'auto',
            width: '25.715em',
            border: '0',
            // backgroundColor: '#F8F9FA',
        },
        paper: {
            marginTop: '0 auto',
            padding: '1.145em',
            backgroundColor: "#F8F9FA",
            height: "45.715em",
        },

        blackLayout: {
            padding: '0.5em',
            margin: 'auto',
            width: '25.715em',
            border: '0',
            // backgroundColor: '#373737',
        },
        paperNoColor: {
            marginTop: '0.5em',
            padding: '1.145em', //'0.5em 0.5em 1em 0.5em',
            backgroundColor: "#373737",
            height: "45.715em",
        },

        layoutFix: {
            margin: 'auto',
            width: "25.715em",
            border: '0',
            // backgroundColor: '#F8F9FA',
        },
        paperFix: {
            marginTop: '0.5em',
            backgroundColor: "#F8F9FA",
            height: "45.715em",
        },
    },
    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        paper: {
            width: '100%',
            boxShadow: 'none',
            background: 'linear-gradient(180deg, #EAEAEA 60%, #F4F4F4 40%)',
        },
        paperFix: {
            width: '100%',
            boxShadow: 'none',
            background: '#F4F4F4',
        }
    }



}));

export default useStyles;