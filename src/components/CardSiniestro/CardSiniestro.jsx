import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

const getUseStyles = makeStyles({
  container: {
    marginTop: "20px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
    backgroundColor: "#FFFFFF",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  itemId: {
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#787878",
    fontFamily: "Catamaran",
  },
  itemFecha: {
    margin: "5px auto",
    fontSize: "22px",
    lineHeight: "27px",
    fontWeight: "bold",
    color: "#373737",
  },
  itemTipo: {
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: "bold",
    color: "#373737",
    fontFamily: "Catamaran",
  },
  cuerpo: {
    flex: "4 auto",
  },

  aside: {
    flex: "1 auto",
  },
});

const CardSiniestro = (props) => {
  const dispatch = useDispatch();

  const { siniestro } = props;
  const { Id, Fecha, Hora, TipoSiniestro } = siniestro;
  const styles = getUseStyles();
  return (
    <div
      className={styles.container}
      onClick={() => {
        dispatch(updateForm("siniestroDetalle", siniestro));
        dispatch(handleSetStep(5.832));
      }}
    >
      <div className={styles.cuerpo}>
        <div className={styles.itemId}>ID: {Id}</div>
        <div className={styles.itemFecha}>
          {Fecha} {Hora}
        </div>
        <div className={styles.itemTipo}>{TipoSiniestro}</div>
      </div>
      <div className={styles.aside}>
        {" "}
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default CardSiniestro;
