import { makeStyles } from "@material-ui/core/styles";

export const getComunStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "22.5em",
    height: "40em",
    backgroundColor: "#F8F9FA",
  },
  rootBegin: {
    position: "relative",
    width: "25.5em",
    height: "40em",
    // background:  "linear-gradient(110deg, #F8F9FA, 50%, #E5F5F4, 50%);" ,
    background: "linear-gradient(120deg, #F8F9FA 50%, #E5F5F4 50%)",
    padding: 0,
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
  googleMap: {
    width: "100%",
    borderRadius: "20px",
    padding: "10px",
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
}));
