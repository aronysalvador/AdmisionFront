import { makeStyles } from "@material-ui/core/styles";

export const getTrabajoHabitualCardStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: "#FFF",
        borderRadius: "10px",
        padding: "15px;",
    },
    containerNoQuote: {
        backgroundColor: "#FFF",
        borderRadius: "10px",
        padding: "10px;",
    },
    cardIconContainer: {
        paddingLeft: "15px",
    },
    cardTextContainer: {
        padding: "0px 20px 20px 20px",
    },
    cardTextContainer2: {
        padding: "0px 0px 0px 35px",
    },
    cardTextNoAfilate: {
        padding: "0px 5px 5px 5px",
    },

    cardText: {
        fontFamily: "Catamaran",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
    },
    cardText2: {
        fontFamily: "Catamaran",
        fontSize: "16px",
        fontWeight: "Bold",
    },
    iconVector: {
        float: "left",
    },
}));