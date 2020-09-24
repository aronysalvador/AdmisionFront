import { makeStyles } from "@material-ui/core/styles";

export const siniestroStyle = makeStyles((theme) => ({
  // root: {
  //   width: "22.5em",
  //   height: "40em",
  //   margin: "0px",
  //   border: "0px",
  //   padding: "0px",
  // },
  button: {
    width: "100%",
    height: "100%",
    background: "#FFFFFF", //#007A33
    border: "2px solid #787878",
    boxSizing: "border-box",
    boxShadow: "2px 2px 10px rgba(203, 203, 203, 0.4)", //0.125em 0.125em 0.375em
    borderRadius: "10px",
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1.145em",
    lineHeight: "1.285em",
    color: "#787878",
    textTransform: "inherit",
    textAlign: "left",
    justifyContent: "flex-start",
    padding: "10px",
    "&:hover": {
      background: "#DFF3F2",
      border: "2px solid #00B2A9",
    }
  },
  imgButton: {
    // width: "3em",
    // height: "3em",
    margin: "16px",
  },
  imgButtonTrabajo: {
    backgroundImage: `url(${require("./../img/trabajoCard.png")})`,
    backgroundRepeat: "no-repeat",
    margin: "16px",
    "&:hover": {
      backgroundImage: `url(${require("./../img/trabajoCardActive.png")})`
      // url("./static/trabajoCardActive.png")
    }
  },
  textButton: {
    display: "contents",
    fontWeight: "normal",
    lineHeight: "1.785em",
  },
  item1: {
    height: "0.9375em",
    margin: "0px",
    border: "0px",
    padding: "0px",
  },
  item1Text: {
    fontFamily: "sfUiDisplayCufonfonts",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "0.75em",
    lineHeight: "0.875em",
  },
  item2: {
    height: "1.16375em",
    margin: "0px",
    border: "0px",
    padding: "0px",
  },
  item3: {
    width: "20%",
    height: "1,0475em",
    margin: "0px",
    border: "0px",
    float: "left",
  },
  item4: {
    paddingTop: "0.5em",
    padding: "0",
    width: "17.75em",
    height: "1,0475em",
    margin: "0px",
    border: "0px",
    float: "left",
  },
  item5: {
    float: "none",
    clear: "both",
    margin: "0px",
    border: "0px",
  },
  item6: {
    height: "3.75em",
    margin: "0px",
    border: "0px",
    padding: "0px",
    paddingTop: "2em",
  },
  item7: {
    height: "3.5625em",
    margin: "0px",
    border: "0px",
    padding: "0px",
  },
  item8: {
    height: "5em",
    margin: "0px",
    border: "0px",
    padding: "0px",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  item9: {
    height: "2.5625em",
    margin: "0px",
    border: "0px",
    padding: "0px",
  },
  mobileLabel: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#787878",
  },
  mobileCaption: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "16px",
    color: "#787878",
  },
}));
