import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

const RelatoFinal = (props) => {
  const { dispatch, addmissionForm, microsoftReducer } = props;
  const { relatoAccidente, volverAConcatenar } = addmissionForm;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const getRelato = () => {
    return (
      "Al momento del accidente estaba " +
      addmissionForm.lugarAccidente +
      ". Lo que ocurrió fue que " +
      addmissionForm.descripcionAccidente +
      ". El accidente ocurrió con " +
      addmissionForm.objetoAccidente + "."
    );
  };

  const [localValue, setLocalValue] = useState(() => {
    return !relatoAccidente || volverAConcatenar ? getRelato() : relatoAccidente;
  });

  const [isEdit, setEditable] = useState((valor)=>{
    if(!valor) { //Confirma el relato
      dispatch(updateForm("relatoAccidenteTemporal", localValue));
    }
  });

  const saveAnswer = (value) => {
    dispatch(updateForm("volverAConcatenar", false));
    dispatch(updateForm("relatoAccidente", value));
    dispatch(handleSetStep(9));
  };

  const onChangeHandler = (event) => {
    setLocalValue(event.target.value);
  };

  const isDisabled = () => {
    return localValue.length < 15;
  };

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header
          userMsal={ microsoftReducer.userMsal }
          // step={1}
        />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(8))}
          percentage={addmissionForm.percentage}
        />
      </div>
      <div>
        <form onSubmit={() => saveAnswer(localValue)}>
          <div className={comunClass.titlePrimaryDesk}>
            <Grid
              className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}
            >
              Por favor,
              <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
                &nbsp;confirma el relato
              </Grid>   
            </Grid>
            <div className={comunClass.displayDeskImg}>
              <Grid component="span" className={comunClass.imgPrimaryDesk}>
                <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth}/>
              </Grid>
            </div>
          </div>
          <div className={comunClass.boxDesk}>
            <div className={comunClass.displayMobile}> 
              <div className={spaceStyle.space1}></div>
            </div>
            <div className={comunClass.boxRootRelato}>
              {isEdit ? (
                <div>
                  <div className={comunClass.boxRelato}>
                    <div style={{ fontWeight: "bold" }}>Relato:</div>
                    {/* <div>
                      <a
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "#DEDEDE",
                        }}
                        onClick={() => setEditable(false)}
                      >
                        Confirmar
                      </a>
                    </div> */}
                    </div>
                    <TextField
                      id="txtRespuesta"
                      label=""
                      value={localValue}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      rows={10}
                      multiline
                      scroll={
                        {width: 8}}
                      inputProps={{
                        maxLength: 700,
                        style: { 
                          fontFamily: "Catamaran", 
                          fontSize: "1em",
                        },
                      }}
                      onChange={onChangeHandler}
                    />
                    <div style={{ marginBottom: "5px", marginTop: "5px", textAlign: "right" }}>
                      <label className={comunClass.pullRight}>
                        {localValue.length}/700
                      </label>
                    </div>
                  </div>
              ) : (
                <div>
                  <div className={comunClass.boxRelato}>
                    <div style={{ fontWeight: "bold" }}>Relato:</div>
                    <div>
                      <div
                        className={comunClass.buttonEditRelato}
                        onClick={() => setEditable(true)}
                      >
                        <img alt="editar relato" src="static/editar-relato.svg" />
                        &nbsp;Editar
                      </div>
                    </div>
                  </div>
                  <div className={comunClass.boxRelatoText}>
                    {localValue}
                  </div>
                </div>
              )}
            </div>
            <div className={comunClass.displayMobile}>
            <div className={spaceStyle.space1} />
          </div>
            <div className={comunClass.bottomElement}>
              <Button
                className={comunClass.buttonAchs}
                variant="contained"
                type="submit"
                disabled={isDisabled()}
              >
                Relato correcto
              </Button>
            </div>
          </div>
          <div className={comunClass.displayDesk}>
            <div className={spaceStyle.space2} />
          </div>
        </form>
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
export default connect(mapStateToProps)(RelatoFinal);
