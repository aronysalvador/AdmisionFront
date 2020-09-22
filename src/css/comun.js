import { makeStyles } from "@material-ui/core/styles";

export const getComunStyle = makeStyles((theme) => ({
    rootContainer: {
        position: "relative",
        width: "25.715em",
        height: "45.715em",
        backgroundColor: "#F8F9FA",
    },
    //era igual a rootContainer
    root: {
        position: "relative",
        // width: "25.715em",
        height: "44em",
        backgroundColor: "#F8F9FA",
    },
    rootBegin: {
        position: "relative",
        width: "25.715em",
        height: "45.715em",
        background: "linear-gradient(120deg, #F8F9FA 50%, #E5F5F4 50%)",
        padding: 0,
    },
    rootWhite: {
        position: "relative",
        width: "25.715em",
        height: "45.715em",
        padding: 0,
    },
    rootImg: {
        position: "relative",
        width: "25.715em",
        height: "45.715em",
        backgroundImage: `url(${require("./../img/Bienvenido.png")})`,
        padding: 0,
    },
    textAchsContent: {
        fontFamily: "Catamaran",
        fontSize: "16px",
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
    bottomElement: {
        padding: "1.145em 0", //"1.145em 1.145em 2.4em 1.145em",
        position: "absolute",
        right: "0",
        left: "0",
        bottom: "0",
    },
    buttonAchs: {
        width: "100%",
        background: "#007A33",
        borderRadius: "0.71em",
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
        borderRadius: "0.71em",
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
    tituloTextbox: {
        letterSpacing: ".03em",
        fontSize: "1em",
        fontWeight: "normal",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#787878",
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
    cardsButtonAlign: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    cardsButton: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "90px",
        background: "#FFF",
        border: "2px solid #787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        paddingTop: "15px",
        paddingBottom: "10px",
    },
    botonSeleccionado: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        height: "90px",
        background: "#DFF3F2 !important",
        border: "2px solid #00B2A9 !important",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        paddingTop: "15px",
        paddingBottom: "10px",
        color: "#373737",
    },
    cardsButtonOther: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "90px",
        background: "#FFF",
        border: "2px solid #787878",
        borderSpacing: "2px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        paddingTop: "15px",
        paddingBottom: "10px",
        fontWeight: "bold",
        "&:hover": {
            background: "#DFF3F2",
            border: "2px solid #00B2A9",
        }
    },
    textCenter: {
        textAlign: "center !important",
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
    
    buttonAchsRight: {
        width: "46%",
        background: "#007A33",
        borderRadius: "0.25",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "0.75em",
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
    // pregunta_temp: {
    //     fontSize: "1.1em !important",
    // },
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
    
    
    tituloSelectorFecha: {
        letterSpacing: "2px",
        fontSize: "0.750em",
        fontWeight: "bold",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        color: "#373737",
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
    
    //repetida en styles.js
    // paper: {
    //     marginTop: '0 auto',
    //     padding: '1em',
    //     backgroundColor: "#F8F9FA"
    // },
    
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
        height: '24.5em',
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
    

    boxRootRelato: {
        padding: "5px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #FAFAFA",
        borderRadius: "10px",
        minHeight: "350px",
        overFlowY: "auto",
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

    buttonEditRelato: {
        cursor: "pointer",
        textDecoration: "underline",
        color: "#DEDEDE",
    },
    scrollText: {
        fontFamily: "Catamaran",
        fontSize: "1em",
        overflow: 'auto',
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
    }

}));