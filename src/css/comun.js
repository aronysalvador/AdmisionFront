import { makeStyles } from "@material-ui/core/styles";

export const getComunStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "22.5em",
    height: "40em",
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
  },
  pregunta_temp: {
    fontSize: "1.1em !important",
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
    textTransform: "capitalize",
    height: "3.5em",
    "&:hover": {
      background: "#104F28",
    },
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
    textTransform: "capitalize",
    height: "3.5em",
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
    textTransform: "uppercase",
  },
  tituloSelectorFecha: {
    letterSpacing: "2px",
    fontSize: "0.875em",
    fontWeight: "bold",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    color: "#373737",
  },

  botonSeleccionado: {
    background: "#DFF3F2",
    border: "2px solid #007A33",
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
}));
