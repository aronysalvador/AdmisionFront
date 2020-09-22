import { makeStyles } from "@material-ui/core/styles";

export const getWelcomeStyle = makeStyles((theme) => ({
    avatarContainer: {
        display: "flex",
        justifyContent: "center",
    },
    avatar: {
        border: "1px solid #DEDEDE",
        backgroundColor: "#FFFFFF",
        color: "#DEDEDE",
        verticalAlign: "middle",
        padding: "1.92em",
        fontSize: "32px",
        boxSizing: "border-box",
        // width: "5em",
        // height: "5em",
    },
    avatarContainerRight: {
        display: "flex",
        justifyContent: "center",
        float: "right",
    },
    avatarContainer2: {
        borderColor: "#FF00FF",
        paddingLeft: "14em",
        display: "inline-flex",
    },
    bienvenido: {
        fontSize: "2em",
        fontWeight: "bold",
    },
    bienvenidoAchs: {
        fontSize: "25px",
        fontWeight: "bold",
    },
    // admisionText: {
    //     fontSize: "1em",
    //     fontWeight: "normal",
    // },
    boxCentroAlign: {
        display: "flex",
        justifyContent: "space-between",
    },
    boxCentroAchs: {
        display: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: "45%",
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
    backgroundBoxAchs: {
        backgroundColor: "#DFF3F2 !important",
        width: "25.715em",
        height: "32em",
        padding: "16px"
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
    backPosicion: {
        marginLeft: "0.5em",
    },
    marginStar: {
        display: "table",
        marginLeft: "auto",
        marginRight: "auto",
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
    textContainer: {
        padding: "16px 0",
    },
    titleBegin: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "34px",
        color: "#007A33",
    },
    titleContainer: {
        padding: "0.5em 1.5em 0.5em 1.5em",
        background: "#FFFFFF",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        borderRadius: "10px",
    },
    txtBegin: {
        textAlign: "center",
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#000000",
        marginLeft: "20px",
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
    divRow: {
        display: "flex",
        alignItems: "center",
    },
    divRowBottom: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    bottomBegin: {
        marginTop: "10px",
    },
    terminos: {
        fontSize: "0.87em",
        textAlign: "center",
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

    itemBegin: {
        marginLeft: "20px",
    },
    itemText: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#000000",
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
    pBegin: {
        fontFamily: "Catamaran",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#000000",
        maxWidth: "210px",
    },
    titleContainerCards: {
        padding: "1.5em",
        background: "#FFFFFF",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        borderRadius: "10px",
    },
    titleContainerCards2: {
        padding: "1.5em 1.5em 0.5em 3em",
        background: "#FFFFFF",
        boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)",
        borderRadius: "10px",
    },
    divRowBottom2: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
    },

    rutSiniestroContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    iconCircular: {
        width: "54px",
        height: "54px",
        verticalAlign: "middle",
    },
    iconAlignIndicaciones: {
        alignSelf: "flex-start",
        display: "flex",
    },

}));