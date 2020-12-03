import React from "react";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
// import { getBlackTheme } from "../../css/blackTheme";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../../components/header/index";
import image from './../../img/ImageDocuments.svg'

const SolicitarDocumentos = () => {
  const spaceStyle = getSpaceStyle();
  const comunClass = getComunStyle();
  const dispatch = useDispatch();

  const { microsoftReducer } = useSelector((state) => state, shallowEqual);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={spaceStyle.space3} />
      <center>
        <div>
          <img
            alt="load"
            src={image}
          />
        </div>
        <div className={spaceStyle.space4} />
        <Grid className={comunClass.textErrorP2}>
        Pide al paciente que te entregue los <br/>
          documentos para escanearlos
        </Grid>
        <div className={spaceStyle.space5} />
        <div className={comunClass.bottomElement} style={{padding: '1.145em'}}>
          {/* <div className={comunClass.paddingElement}> */}
            <Button
              className={[comunClass.buttonAchs]} //blackStyle.buttonFooterSpace
              variant="contained"
              onClick={() => dispatch(handleSetStep(19.2))}
            >
              Entendido
            </Button>
          {/* </div>     */}
        </div>
      </center>
    </div>
  );
};

export default SolicitarDocumentos;
