import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BoxACHSEditDelete from "../../components/share/BoxACHSEditDelete/index";

const QuestionWitness = (props) => {
  const { dispatch, addmissionForm } = props;

  //State
  const dispatch1 = useDispatch();
  const getTestigos = useSelector((state) => state.addmissionForm.testigos);

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tituloTestigo = "Testigo";
  const contenidoTestigo = [
    addmissionForm.testigos.nombre,
    <br />,
    addmissionForm.testigos.cargo,
  ];

  return (
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(15))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <Typography variant="p" component="p" className={classesComun.pregunta}>
          Entendido ¿Alguien fue testigo de lo que sucedió?
        </Typography>
      </div>

      {getTestigos.length === 0 ? (
        <div className={spaceStyle.space12} />
      ) : (
        <>
          <div>
            <div className={spaceStyle.space1} />
            <BoxACHSEditDelete
              titulo={tituloTestigo}
              contenido={contenidoTestigo}
            />
          </div>
        </>
      )}

      {getTestigos.length === 0 ? (
        <>
          <div className={classesComun.bottomElement}>
            <div>
              <Button
                className={classesComun.buttonAchs}
                variant="contained"
                type="submit"
                onClick={() => dispatch(handleSetStep(16))}
              >
                Agregar Testigo
              </Button>
            </div>

            <div className={spaceStyle.space1} />

            <div>
              <Button
                className={classesComun.buttonAchs2}
                variant="contained"
                type="submit"
                onClick={() => dispatch(handleSetStep(17))}
              >
                No hubo Testigos
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={spaceStyle.space12} />
          <div className={classesComun.bottomElement}>
            <Button
              className={classesComun.buttonAchs}
              variant="contained"
              type="submit"
              onClick={() => dispatch(handleSetStep(17))}
            >
              Siguiente
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}

export default connect(mapStateToProps)(QuestionWitness);
