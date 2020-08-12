import { makeStyles } from "@material-ui/core/styles";

export const getBlackTheme = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "22.5em",
    height: "40em",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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

  textMessage: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1.250em",
    lineHeight: "1.250em",
    alignItems: "center",
    color: "#06D6A0",
    padding: "0em 4em"
  },

  textDetailSimple: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1em",
    lineHeight: "1em",
    alignItems: "center",
    color: "#FFFFFF",
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

  textFinal: {
    textAlign: "center",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontSize: "1.250em",
    lineHeight: "1.250em",
    alignItems: "center",
    color: "#FFFFFF",
  },
  img: {
    width: "11em",
  },

  buttonFooter: {
    width: "100%",
    background: "#FFFFFF",
    borderRadius: "0.25",
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
  },
}));
