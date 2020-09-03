import { makeStyles } from "@material-ui/core/styles";
// import img from './../../public/static/Bienvenido.png'

export const getComunStyle = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "22.5em",
        height: "40em",
        backgroundColor: "#F8F9FA",
    },
    rootBegin: {
        position: "relative",
        width: "24.5em",
        height: "42em",
        // background:  "linear-gradient(110deg, #F8F9FA, 50%, #E5F5F4, 50%);" ,
        background: "linear-gradient(120deg, #F8F9FA 50%, #E5F5F4 50%)",
        padding: 0,
    },
    rootWhite: {
        position: "relative",
        width: "24.5em",
        height: "42em",
        padding: 0,
    },

    rootContainer: {
        position: "relative",
        width: "24.5em",
        height: "42em",
        backgroundColor: "#F8F9FA",
    },
    textAchsContent: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#373737",
    },
    tituloACHS: {
        fontFamily: "sfUiDisplayCufonfonts",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "0.75em",
        lineHeight: "0.875em",
    },
    pregunta: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.25em",
        lineHeight: "1.75em",
        display: "flex",
        alignItems: "flex-end",
        flexWrap: "wrap"
    },
    pregunta_temp: {
        fontSize: "1.1em !important",
    },
    googleMap: {
        width: "100%",
        borderRadius: "20px",
        padding: "10px",
    },
    textAchsContentGreen: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#007A33",
    },
    buttonAchs: {
        width: "100%",
        background: "#007A33",
        borderRadius: "0.25",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.125em",
        lineHeight: "1.125em",
        color: "#FFFFFF",
        textTransform: "inherit",
        height: "3.5em",
        "&:hover": {
            background: "#104F28",
        },
        marginTop: "5px",
    },
    buttonAchs2: {
        width: "100%",
        background: "#FFFFFF",
        border: "2px solid #007A33",
        boxSizing: "border-box",
        borderRadius: "4px",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.125em",
        lineHeight: "1.125em",
        color: "#007A33",
        textTransform: "inherit",
        height: "3.5em",

        marginTop: "5px",
    },

    buttonAchsRight: {
        width: "46%",
        background: "#007A33",
        borderRadius: "0.25",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "0.75em",
        // fontSize: '1.125em',
        lineHeight: "1.125em",
        color: "#FFFFFF",
        textTransform: "capitalize",
        height: "4.8em",
        float: "right",
        "&:hover": {
            background: "#104F28",
        },
    },
    buttonAchsLeft: {
        width: "46%",
        background: "#007A33",
        borderRadius: "0.25",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "0.75em",
        // fontSize: '1.125em',
        lineHeight: "1.125em",
        color: "#FFFFFF",
        textTransform: "capitalize",
        height: "4.8em",
        float: "left",
        "&:hover": {
            background: "#104F28",
        },
    },
    buttonVolverContainer: {
        width: "20%",
        float: "left",
    },
    buttonVolverContainerBarra: {
        width: "20%",
        float: "left",
    },
    barraContainer: {
        paddingTop: "0.5em",
        width: "17.75em",
        float: "left",
    },
    buttonVolverColor: {
        color: "#373737",
    },
    cleanFloat: {
        float: "none",
        clear: "both",
    },
    pullRight: {
        float: "right",
    },
    bottomElement: {
        position: "absolute",
        right: "0",
        left: "0",
        bottom: "0",
    },
    tituloTextbox: {
        letterSpacing: "2px",
        fontSize: "0.75em",
        fontWeight: "normal",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#373737",
    },
    tituloSelectorFecha: {
        letterSpacing: "2px",
        fontSize: "0.750em",
        fontWeight: "bold",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#373737",
    },
    botonSeleccionado: {
        background: "#DFF3F2 !important",
        border: "2px solid #007A33 !important",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        borderRadius: "10px",
        color: "#007A33",
    },
    selectorRuedaItemPrincipal: {
        color: "#007A33",
        fontSize: "1.250em",
    },
    selectorRuedaBordesItemPrincipal: {
        margin: "0",
        opacity: "0.2",
    },
    selectorRuedaItemsCostados: {
        fontSize: "1em",
        paddingBottom: "5px",
        opacity: "0.5",
    },
    borderBox: {
        border: "yellow",
        "&:hover": {
            border: "#007A33",
        },
    },
    mediumDivider: {
        width: "47%",
    },
    flexDivider: {
        display: "flex",
        alignItems: "center",
    },
    emMargin: {
        margin: "0.5em",
    },
    pantallaFinalBotones: {
        borderRadius: "10px",
        height: "3em",
    },
    cajaRutSiniestroContainer: {
        width: "48%",
        border: "1px solid #787878",
        borderRadius: "10px",
        padding: "10px",
        height: "60px",
        paddingBottom: "5px",
        backgroundColor: "#FFFFFF",
    },
    cajaRutSiniestroItem: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "left",
        flexDirection: "column",
    },
    cajaRutSiniestroTextoPrimario: {
        color: "#373737",
        fontWeight: "bold",
        fontSize: "15px",
    },
    cajaRutSiniestroTextoSecundario: {
        color: "#787878",
        fontWeight: "bold",
        fontSize: "15px",
    },
    textCenter: {
        textAlign: "center",
    },
    paper: {
        marginTop: '0 auto',
        padding: '1em',
        backgroundColor: "#F8F9FA"
    },
    titleBlack: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '28px',
        color: ' #373737'
    },
    titleBlue: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '28px',
        color: ' #00b2a9',
        display: "contents",
    },
    txtGreen: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#007A33'
    },
    iconLocation: {
        marginRight: '10px',
        maxHeight: "15px",
        verticalAlign: "middle",
    },

    siniesterList: {
        display: 'flow-root',
        overflow: 'auto',
        height: '23.5em',
        '&::-webkit-scrollbar': {
            width: 8,
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.2)',
            outline: '1px solid slategrey',
            borderRadius: 4,
        },
    },
    rootImg: {
        position: "relative",
        width: "24.5em",
        height: "42em",
        // backgroundImage: "url(" + img + ")",
        backgroundImage: `url(${require("./../img/Bienvenido.png")})`,
        padding: 0,
    },

    boxRelato: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
    },

    boxRelatoText: {
        fontFamily: "Catamaran",
        fontSize: "1em",
        lineHeight: "1.563em",
        padding: "10px",
        overflowWrap: "break-word",
        overflow: "auto",
        height: "24em",
    },

    buttonEditRelato: {
        cursor: "pointer",
        textDecoration: "underline",
        color: "#DEDEDE",
    },
}));