import { makeStyles } from "@material-ui/core/styles";

export const getWelcomeStyle = makeStyles((theme) => ({

    bienvenido: {
        fontSize: "2em",
        fontWeight: "bold",
    },
    boxCentroAlign: {
        display: "flex",
        justifyContent: "center",
        minWidth: "335px", //"265px"
    },
    boxCentroAchs: {
        display: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
        minWidth: "146px",
        height: "116px", //"90px",
        border: "2px solid #007A33",
        borderSpacing: "2px",
        borderRadius: "10px",
        paddingTop: "5px",
        paddingBottom: "10px",
        color: "#007A33",
        fontSize: "20px",
        fontWeight: "normal",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        backgroundColor: "#FFFFFF",
    },
    textBoxAchs: {
        fontSize: "16px !important"
    },
    starIcon: {
        display: "flex",
        borderRadius: "1em",
        color: "#373737",
        fontSize: "1.14em",
        fontWeight: "normal",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        backgroundColor: "#FFFFFF"
    },
    star: {
        color: "#00B2A9 !important",
    },
    button: {
        width: "100%",
        height: "4em",
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
            background: "#104F28",
        },
    },
    beginContainer: {
        padding: "16px 16px 0 16px",
    },
    txtBegin: {
        textAlign: "center",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        // color: "#000000",
        marginLeft: "20px",
        verticalAlign: "super"
    },
    subTitleBegin: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#373737",
        marginBottom: "10px",
    },
    itemText2: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#000000",
        marginLeft: "10px"
    },
    terminos: {
        fontSize: "0.87em",
        textAlign: "center",
    },
    rutSiniestroContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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
    imgCheck: {
        color: "white",
        background: "#007A33",
        borderRadius: "50%",
        display: "inline-flex",
        "&:hover": {
            background: "#104F28",
        },
    },
    imgEdit: {
        color: "white",
        background: "#007A33",
        borderRadius: "50%",
        display: "inline-flex",
        marginLeft: "-5%",
        // marginTop: '-15%',
        "&:hover": {
            background: "#104F28",
        },
    },
    avatar: {
        border: "1px solid #DEDEDE !important",
        backgroundColor: "#FFFFFF !important",
        color: "#DEDEDE !important",
        verticalAlign: "middle",
        padding: "1.92em",
        fontSize: "32px !important",
        boxSizing: "border-box",
        // width: "5em",
        // height: "5em",
    },
    divRowBottomEmail: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
    },
    switchText: {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.075em',
        // lineHeight: '1.786em',
        color: '#787878',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    '@media (max-width: 767px)': {
        /* For mobile phones */
        backPosicion: {
            marginLeft: "0.5em",
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
        },
        avatarContainerRight: {
            display: "flex",
            justifyContent: "center",
            float: "right",
        },
        backgroundBoxAchs: {
            backgroundColor: "#DFF3F2 !important",
            width: "25.715em",
            height: "32em",
            padding: "16px"
        },
        marginStar: {
            display: "table",
            marginLeft: "auto",
            marginRight: "auto",
        },
        titleContainer: {
            padding: "0.5em 1.5em 0.5em 1.5em",
            background: "#FFFFFF",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        titleContainerCards: {
            padding: "1.5em",
            background: "#FFFFFF",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        iconAlignIndicaciones: {
            alignSelf: "flex-start",
            display: "flex",
        },
        divRow: {
            display: "flex",
            alignItems: "center",
        },
        divRow2: {
            display: "flex",
            alignItems: "center",
        },
        divRowBottom: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
        },
        divRowBottom2: {
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
        },
        divRowPantallaFinal: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
        },
        titleBegin: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "32px", //"25px",
            lineHeight: "34px",
            color: "#007A33",
        },
        titleBegin2: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#007A33",
        },
        textContainer: {
            padding: "16px 0",
        },
        itemBegin: {
            marginLeft: "20px",
        },
        pBegin: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "13px",
            lineHeight: "16px",
            color: "#000000",
            maxWidth: "210px",
        },
        itemText: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "18px",
            color: "#000000",
        },
        bienvenidoAchs: {
            fontSize: "25px",
            fontWeight: "bold",
        },
        iconCircular: {
            width: "54px",
            height: "54px",
            verticalAlign: "middle",
        },
        titleContainerCards2: {
            padding: "1.5em 1.5em 0.5em 1.5em",
            background: "#FFFFFF",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        titleContainerCardsEmail: {
            padding: "1.5em 1.5em 0.5em 1.5em",
            background: "#FFFFFF",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        bottomBegin: {
            marginTop: "10px",
        },

    },

    '@media (min-width: 768px)': {
        /* Medium devices (landscape tablets, 768px and up) */
        backPosicion: {
            display: 'none',
        },
        avatarHeader: {
            border: "1px solid #DEDEDE !important",
            backgroundColor: "#FFFFFF !important",
            color: "#DEDEDE !important",
            verticalAlign: "middle",
            padding: "1em",
            fontSize: "14px !important",
            boxSizing: "border-box",
            display: 'flex'
        },
        avatarContainer: {
            display: "inline-flex",
            // justifyContent: "end",
            // margin: 'auto',
            alignItems: 'center',
            color: '#FFFFFF'
        },
        backgroundBoxAchs: {
            backgroundColor: "#016C2E !important",
            padding: "64px 14%", //10%
        },
        backgroundBoxAchsDesk: {
            backgroundColor: "#016C2E !important",
            padding: "10px 64px",
            color: "white !important"
        },
        marginBoxGreen: {
            display: 'grid',
            margin: 'auto 1em'
        },
        contentBlock: {
            display: 'block'
        },
        titleContainerCards: {
            padding: "1.5em",
            background: "#FFFFFF",
            // boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        iconAlignIndicaciones: {
            alignSelf: "flex-start",
            // display: "flex",
            textAlign: "center",
            height: "32px"
        },
        divRow: {
            display: "block",
            alignItems: "center",
            paddingBottom: "10px", //"30px",
        },
        divRow2: {
            display: "block",
            alignItems: "center",
            paddingBottom: "10px", //"30px",
            width: "33%"
        },
        divRowBottom: {
            display: "block",
            alignItems: "center",
            marginBottom: "10px", //"20px",
            width: "33%"
        },
        divRowBottom2: {
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
            justifyContent: "center",
        },
        divRowPantallaFinal: {
            display: "block",
            alignItems: "center",
            paddingBottom: "10px", //"30px",
            width: "150px",
        },
        titleBegin: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "34px",
            // color: "#007A33",
        },
        titleBegin2: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "28px",
            // color: "#007A33",
        },
        textContainer: {
            paddingBottom: "10px",
        },
        itemBegin: {
            marginLeft: "0px",
        },
        boxCentroAlignDesk: {
            position: 'absolute',
            right: '5%'
        },
        bienvenidoAchs: {
            fontSize: "20px",
            fontWeight: "bold",
        },
        iconCircular: {
            width: "37px",
            height: "37px",
            verticalAlign: "middle",
        },
        pBegin: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "16px",
            color: "#000000",
            // maxWidth: "210px",
        },
        itemText: {
            fontFamily: "Catamaran",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px",
            color: "#000000",
        },
        titleContainerCards2: {
            padding: "1.5em 1.5em 0.5em 1.5em",
            background: "#FFFFFF",
            // boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },
        titleContainerCardsEmail: {
            padding: "1.5em 1.5em 0.5em 1.5em",
            background: "#FFFFFF",
            boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
            borderRadius: "10px",
        },

    },

    '@media (min-width: 860px)': {
        bienvenidoAchs: {
            fontSize: "25px",
            fontWeight: "bold",
        },
    },
}));