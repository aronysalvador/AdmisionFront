import { makeStyles } from "@material-ui/core/styles";

export const getBlackTheme = makeStyles((theme) => ({

    textNoAfiliate: {
        textAlign: "center",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontSize: "1.250em",
        fontWeight: "bold",
        lineHeight: "1.250em",
        alignItems: "center",
        color: "#06D6A0",
        padding: "0em 1em",
        marginBottom: "1.145em"
    },

    textDetailSimple: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontSize: "1em",
        lineHeight: "1em",
        alignItems: "center",
        color: "#FFFFFF",
    },

    textDetailSimpleNoSAP: {
        textAlign: "center",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontSize: "1.2em",
        lineHeight: "1.6875em",
        alignItems: "center",
        color: "#FFFFFF",
        padding: "0em 3em",
    },

    textDetailStrong: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontSize: "1em",
        lineHeight: "1em",
        fontWeight: "bold",
        alignItems: "center",
        color: "#FFFFFF",
    },

    buttonFooter: {
        width: "100%",
        minWidth: "20em",
        background: "#FFFFFF",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.125em",
        lineHeight: "1.125em",
        color: "#007A33",
        textTransform: "inherit",
        borderRadius: "10px",
        height: "3.5em",
        "&:hover": {
            background: "#FFFFFF",
        },
        margin: "8px 0"
    },

    buttonFooter2: {
        // marginTop: "1.145em",
        width: "100%",
        minWidth: "20em",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.125em",
        lineHeight: "1.125em",
        color: "#FFFFFF",
        border: "1px solid white",
        textTransform: "inherit",
        borderRadius: "10px",
        height: "3.5em",
        "&:hover": {
            background: "transparent",
        },
        margin: "8px 0"
    },

    containerRowQuote: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },

    itemDataQuote: {
        color: "#FFFFFF",
        fontSize: "1.125em",
        fontWeight: "bold"
    },

    itemLabelQuote: {
        color: "#FFFFFF",
        fontSize: "1em",
        marginBottom: "15px"
    },

    '@media (max-width: 767px)': {
        /* For mobile phones */
        root: {
            position: "relative",
            width: "22.5em",
            height: "40em", //"43em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        img: {
            width: "11em",
        },
        imgNoAfiliate: {
            width: "7em",
        },
        textWarning: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.563em",
            lineHeight: "1.6875em",
            alignItems: "center",
            color: "#FFFFFF",
        },
        textWarning2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.563em",
            lineHeight: "1.6875em",
            alignItems: "center",
            color: "#081C15",
        },
        textMessage: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "1.250em",
            lineHeight: "1.250em",
            alignItems: "center",
            color: "#06D6A0",
            padding: "0em 4em",
        },
        textMessage2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.250em",
            lineHeight: "1.250em",
            alignItems: "center",
            color: "#007A33",
            padding: "0em 4em",
        },
        textFinal: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontSize: "1.250em",
            lineHeight: "1.250em",
            alignItems: "center",
            color: "#FFFFFF",
        },
        containerQuote: {
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #FFFFFF",
            width: "100%",
            padding: "10px",
            justifyContent: "space-evenly",
        },
        listDetails: {
            width: '100%',
            textAlign: 'center',
        },
    },

    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        root: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        img: {
            width: "14em",
        },
        imgNoAfiliate: {
            width: "14em",
        },
        textWarning: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2.2857em",
            lineHeight: "2.4285em",
            alignItems: "center",
            color: "#FFFFFF",
        },
        textWarning2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2.2857em",
            lineHeight: "2.4285em",
            alignItems: "center",
            color: "#081C15",
        },
        textMessage: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.4285em",
            lineHeight: "2em",
            alignItems: "center",
            color: "#06D6A0",
            // padding: "0em 4em",
        },
        textMessage2: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.4285em",
            // lineHeight: "2em",
            alignItems: "center",
            color: "#007A33",
            padding: "0em 4em",
        },
        textFinal: {
            textAlign: "center",
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.4285em",
            lineHeight: "2em",
            alignItems: "center",
            color: "#FFFFFF",
        },
        containerQuote: {
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #FFFFFF",
            width: "50%",
            maxWidth: "31.746em",
            padding: "10px",
            justifyContent: "space-evenly",
        },
        containerQuoteDesk: {
            display: "flex",
            borderRadius: "10px",
            border: "1px solid #FFFFFF",
            width: "50%",
            maxWidth: "31.746em",
            padding: "10px",
            justifyContent: "space-evenly",
        },
        listDetails: {
            // width: '100%',
            textAlign: 'center',
            flexGrow: '0',
            maxWidth: '49%',
            flexBasis: '50%',
        },

    },

    '@media (min-height: 800px)': { //775px
        root: {
            height: "1420px"
        }
    }
}));