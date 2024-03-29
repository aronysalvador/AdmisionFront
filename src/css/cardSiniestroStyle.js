import { makeStyles } from '@material-ui/core/styles'

export const cardSiniestroStyles = makeStyles(() => ({

    itemId: {
        display: "flex",
        margin: "0 auto",
        fontSize: "16px",
        lineHeight: "16px",
        color: "#787878",
        fontFamily: "Catamaran"
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
        fontSize: "20px", // "22px",
        lineHeight: "24px", // "27px",
        fontWeight: "bold",
        color: "#373737"
    },
    itemSubtitle: {
        margin: "5px auto",
        fontSize: "15px", // "22px",
        lineHeight: "24px", // "27px",
        fontWeight: "bold",
        color: "#373737"
    },
    itemTipo: {
        margin: "0 auto",
        fontSize: "16px",
        lineHeight: "18px",
        fontWeight: "bold",
        color: "#373737",
        fontFamily: "Catamaran"
    },
    cuerpo: {
        flex: "4 auto"
    },

    aside: {
        flex: "1 auto"
    },
    asidePersonalData: {
        margin: "auto"
    },
    itemRazonSocial: {
        margin: "0 auto",
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1em',
        lineHeight: '1.25em',
        color: '#00B2A9'
    },
    '@media (max-width: 767px)': {
        /* For mobile phones */
        container: {
            marginTop: "15px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "stretch",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0px 4px 4px rgba(44, 44, 44, 0.06)",
            boxSizing: "border-box"
        },
        containerBox: {
            marginTop: "15px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "stretch",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0px 4px 4px rgba(44, 44, 44, 0.06)",
            boxSizing: "border-box"
        }
    },
    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        container: {
            margin: "15px 10px",
            display: "inline-flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            // alignItems: "center",
            alignContent: "stretch",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "1px 1px 5px rgba(44, 44, 44, 0.25)",
            boxSizing: "border-box",
            width: "30%", // "247px",
            textAlign: "left"
        },
        containerBox: {
            margin: "15px 10px",
            display: "inline-flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            // alignItems: "center",
            alignContent: "stretch",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "1px 1px 5px rgba(44, 44, 44, 0.25)",
            boxSizing: "border-box",
            // width: "30%", // "247px",
            minWidth: "45%",
            maxWidth: "370px",
            textAlign: "left",
            minHeight: "190px"
        },
        iconRight: {
            float: 'right'
        }
    }

}));