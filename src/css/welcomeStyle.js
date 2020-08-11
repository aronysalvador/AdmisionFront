import { makeStyles } from '@material-ui/core/styles';

export const getWelcomeStyle = makeStyles((theme) => ({
    avatarContainer: {
        borderColor: '#FF00FF',
        paddingLeft: '8em',
        display: 'inline-flex',
    },
    avatarContainerRight: {
        borderColor: '#FF00FF',
        float: 'right'
    },
    bienvenido: {
        fontSize: '2em',
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
    avatarBegin: {
        width: '3.5em',
        height: '3.5em',
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
        // marginTop: '-15%',
        "&:hover": {
            background: '#104F28',
        },
    },

    beginContainer:{
        padding: '1em 1em 0 1em',
    },
    beginContainerCard:{
        padding: '0.5em 1em 0 1em',
    },
    TextContainer:{
        padding: '1.5em 1.5em 0 1.5em',
        marginTop:'2px'
    },
    titleContainer:{
        padding: '0.5em 1.5em 0.5em 1.5em',
        background: '#FFFFFF',
        boxShadow: '2px 2px 10px rgba(203, 203, 203, 0.4)',
        borderRadius: '10px',
    },
    titleContainerCards:{
        padding: '1.5em',
        background: '#FFFFFF',
        boxShadow: '2px 2px 10px rgba(203, 203, 203, 0.4)',
        borderRadius: '10px',
    },
    divRow: {        
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    divRowBottom: {        
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },

    txtBegin:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
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
        marginLeft: '20px'
    },
    subTitleBegin:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '18px',
        color: '#373737',
        marginBottom: '10px'
    },
    itemBegin:{
        marginLeft: '20px',
    },
    itemText:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000000',
    },
    pBegin:{
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#000000',
        maxWidth: '210px'
    },
    bottomBegin:{
        marginTop: '20px'
    }

}))