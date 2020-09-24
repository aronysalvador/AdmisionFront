import { makeStyles } from '@material-ui/core/styles'

export const cardSiniestroStyles = makeStyles((theme) => ({

    container: {
        marginTop: "20px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "stretch",
        backgroundColor: "#FFFFFF",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
    },

    itemId: {
        display: "flex",
        margin: "0 auto",
        fontSize: "16px",
        lineHeight: "16px",
        color: "#787878",
        fontFamily: "Catamaran",
    },
    itemReposo: {
        backgroundColor: "rgba(255, 230, 0, 0.25)",
        borderRadius: "1.4em",
        display: "flex",
        margin: "0 0 0 .7em",
        fontSize: "16px",
        lineHeight: "16px",
        color: "#373737",
        fontFamily: "Catamaran",
        padding: ".2em .65em"
    },
    itemFecha: {
        margin: "5px auto",
        fontSize: "22px",
        lineHeight: "27px",
        fontWeight: "bold",
        color: "#373737",
    },
    itemTipo: {
        margin: "0 auto",
        fontSize: "16px",
        lineHeight: "18px",
        fontWeight: "bold",
        color: "#373737",
        fontFamily: "Catamaran",
    },
    cuerpo: {
        flex: "4 auto",
    },

    aside: {
        flex: "1 auto",
    },
    asidePersonalData: {
        flex: "0 auto",
    },
    itemRazonSocial: {
        margin: "0 auto",
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1em',
        lineHeight: '1.25em',
        color: '#00B2A9',
    },
}));