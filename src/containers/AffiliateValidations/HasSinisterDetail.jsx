import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import {  Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import Header from "../../components/header/index";
import { logout } from "../../redux/actions/microsoft.action";

const HasSinisterDetail = (props) => {
  const { addmissionForm, dispatch, microsoftReducer } = props;

  const { siniestroDetalle } = addmissionForm;
  useEffect(() => {
    //dispatch(saveRut(addmissionForm.rut));
  });

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <div className={comunClass.displayDesk}> 
        <Header
          dispatch={() => dispatch(logout())}
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <CabeceraSinBarra
        dispatch={() => dispatch(handleSetStep(5.831))}
        color="#FFFFFF"
      />
      <div className={blackStyle.root} style={{height:"37.2em"}}>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          ID Siniestro
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          {siniestroDetalle.id}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          CUN
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          {siniestroDetalle.CUN}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          Cod único nac ext
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          {siniestroDetalle.codigoUnicoNacionalExterno}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          CeSa
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          {siniestroDetalle.cesa}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple} 
        >
          Paciente
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
           {siniestroDetalle.paciente}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          InterL comercial
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          {siniestroDetalle.interLComercial}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          Descripción siniestro
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          {siniestroDetalle.descripcion}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          Descripción Tipo Ley
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailSimple}
        >
          {siniestroDetalle.tipoLey}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          Creado el
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          {siniestroDetalle.fecha}
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          Hora creación
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          {/* {siniestroDetalle.hora} */}
          00:00
        </Typography>
        <div className={spaceStyle.spaceMin1} />

        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          Reposo Activo
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className={blackStyle.textDetailStrong}
        >
          {siniestroDetalle.reposoActivo === "NO" ? "No" : "Sí"}
        </Typography>
        <div className={spaceStyle.spaceMin1} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm: addmissionForm,
    microsoftReducer: microsoftReducer
  };
};
export default connect(mapStateToProps)(HasSinisterDetail);
