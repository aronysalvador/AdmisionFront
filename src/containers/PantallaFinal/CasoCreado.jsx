import React from "react";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../../components/header/index";
import warning from './../../img/casoCreado.svg'
import { initSessionDate } from "./../../redux/actions/Log";

const CasoCreado = () => {
  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();

  const dispatch = useDispatch();
  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={spaceStyle.space6} />
      <center>
        <div>
          <img
            alt='load'
            src={warning}
          />
        </div>

        <div className={spaceStyle.space2} />

        <Grid className={comunClass.textErrorP}>
            ¡Admisión exitosa!
        </Grid>

        <div className={spaceStyle.space2} />

        <div className={comunClass.bottomElement}>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Button
                            className={[ comunClass.buttonAchs3 ]}
                            variant='contained'
                            onClick={() => { dispatch(initSessionDate("")); dispatch(handleSetStep(27)) }}
                            style={{float: "right"}}
                        >
                            Ir a Firma Digital Admisión
                        </Button>
                    </div>
                    <div className='col-md-6'>
                        <Button
                            className={comunClass.buttonAchs}
                            variant='contained'
                            onClick={() => { dispatch(initSessionDate("")); dispatch(handleSetStep(1)) }} // 1.1 Empecemos eliminada
                            style={{float: "left"}}
                        >
                            Ir a Firma Digital Egreso en SAP
                        </Button>
                    </div>
                </div>
            </div>

        </div>

      </center>
    </div>
  );
};

export default CasoCreado;
