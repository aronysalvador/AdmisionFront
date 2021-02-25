import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { Grid, Typography } from "@material-ui/core";
import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import CabeceraSinBarra from "../../components/cabecera/cabeceraSinBarra";
import Header from "../../components/header/index";

const HasSinisterDetail = (props) => {
  const { addmissionForm, dispatch, microsoftReducer } = props;
  const { siniestroDetalle } = addmissionForm;
  useEffect(() => {
    // dispatch(saveRut(addmissionForm.rut));
  });

  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const blackStyle = getBlackTheme();

  return (
    <div>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
        <div style={{position: 'absolute', width: '100%', height: '92%', backgroundColor: '#373737'}} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <CabeceraSinBarra
          id={"HasSinisterDetail-BtnBack"}
          dispatch={() => dispatch(handleSetStep(5.831))}
          color='#FFFFFF'
        />
        <div className={comunClass.displayDesk}>
          <Typography
            color='textSecondary'
            className={blackStyle.textWarning}
          >
            Detalle de siniestro
          </Typography>
          <div className={spaceStyle.space1} />
        </div>
      </div>
      <div className={blackStyle.root}>
        <div className={blackStyle.containerQuoteDesk}>
          <Grid container>
            <Grid item className={blackStyle.listDetails}>
              <div className={comunClass.displayDesk}>
                <div className={spaceStyle.space2} />
              </div>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                ID Siniestro
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                {siniestroDetalle.id}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                CUN
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.CUN}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                Cod único nac ext
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.codigoUnicoNacionalExterno}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                CeSa
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.cesa}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                Paciente
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.paciente}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                InterL comercial
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.interLComercial}
              </Typography>
              <div className={spaceStyle.spaceMin1} />
            </Grid>
            <Grid item className={comunClass.displayDesk}>
              <hr style={{color: "#FFFFFF", margin: "30px 0", minHeight: "80%"}} />
            </Grid>
            <Grid item className={blackStyle.listDetails}>
              <div className={comunClass.displayDesk}>
                <div className={spaceStyle.space2} />
              </div>
              <Typography
              color='textSecondary'
              className={blackStyle.textDetailStrong}
              >
                Descripción siniestro
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                {siniestroDetalle.descripcion}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                Descripción Tipo Ley
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailSimple}
              >
                {siniestroDetalle.tipoLey}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                Creado el
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                {siniestroDetalle.fecha}
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                Hora creación
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                {/* {siniestroDetalle.hora} */}
                00:00
              </Typography>
              <div className={spaceStyle.spaceMin1} />

              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                Reposo Activo
              </Typography>
              <Typography
                color='textSecondary'
                className={blackStyle.textDetailStrong}
              >
                {siniestroDetalle.reposoActivo === "NO" ? "No" : "Sí"}
              </Typography>
              <div className={spaceStyle.spaceMin1} />
              <div className={comunClass.displayDesk}>
                <div className={spaceStyle.space2} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space5} />
        <div className={spaceStyle.space5} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm, microsoftReducer }) => {
  return {
    addmissionForm,
    microsoftReducer
  };
};
export default connect(mapStateToProps)(HasSinisterDetail);
