import { makeStyles } from '@material-ui/core/styles';

export const getWelcomeStyle = makeStyles((theme) => ({
    avatarContainer: {
        borderColor: '#FF00FF',
        paddingLeft: '8em',
        display: 'inline-flex',
        alignContent: "center",
    },
    avatarContainerRight: {
        borderColor: '#FF00FF',
        float: 'right'
    },
    bienvenido: {
        fontSize: '2em',
        fontWeight: 'bold',
    },
    bienvenidoAchs: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    admisionText: {
        fontSize: '1em',
        fontWeight: 'normal',
    },
    terminos: {
        fontSize: '0.87em',
        textAlign: 'center',
    },
    avatar: {
        width: '5em',
        height: '5em',
        verticalAlign: 'middle',
    },

    button: {
        width: '100%',
        height: '4em',
        background: "#007A33",
        boxShadow: "0.125em 0.125em 0.375em rgba(203, 203, 203, 0.4)",
        borderRadius: "0.25em",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1em",
        lineHeight: "1.125em",
        color: "#FFFFFF",
        textTransform: "capitalize",
        textAlign: "left",
        justifyContent: "flex-start",
        "&:hover": {
            background: "#104F28"
        }
    },
    img: {
        height: "1.5em",
        width: "1.5em",
        color: "#007A33",
        background: "white",
        borderRadius: "50%",
        marginRight: "10px",
        padding: "7px",
        "&:hover": {
            background: "white",
        },
    },
    imgEdit: {
        color: 'white',
        background: '#007A33',
        borderRadius: '50%',
        display: 'inline-flex',
        marginLeft: '-5%',
        "&:hover": {
            background: '#104F28',
        },
    },

    beginContainer:{
        padding: '1.5em',
    },
    TextContainer:{
        padding: '1.5em 1.5em 0 1.5em',
        marginTop:'30px'
    },
    titleContainer:{
        padding: '1em',
        background: '#FFFFFF',
        boxShadow: '2px 2px 10px rgba(203, 203, 203, 0.4)',
        borderRadius: '10px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtBegin:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
        lineHeight: '34px',
        color: '#007A33'
    },
    titleBegin:{
        textAlign: 'center',
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000000',
        marginLeft: '10px'
    }

}))