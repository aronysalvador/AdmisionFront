import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const RelatoFinal = (props) => {
  const { dispatch, addmissionForm } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { relatoAccidente, volverAConcatenar } = addmissionForm;

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
    <div className={classesComun.root}>
      <Cabecera
        dispatch={() => dispatch(handleSetStep(8))}
        percentage={addmissionForm.percentage}
      />
      <div>
        <form onSubmit={() => saveAnswer(localValue)}>
          <div>
            <Typography
              variant="h1"
              component="h1"
              className={classesComun.titleBlack}
            >
              Por favor,
              <div className={classesComun.titleBlue}>
              &nbsp;confirma el relato
              </div>
            </Typography>
          </div>
          <div className={spaceStyle.space1}></div>
          <div
            style={{
              padding: "5px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #FAFAFA",
              borderRadius: "10px",
              minHeight: "350px",
              overFlowY: "auto",
            }}
          >
            {isEdit ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
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
                  rows={13}
                  multiline
                  inputProps={{
                    maxLength: 700,
                    style: { fontFamily: "Catamaran", fontSize: "1em" },
                  }}
                  onChange={onChangeHandler}
                />
                <div style={{ marginBottom: "28px", marginTop: "5px" }}>
                  <label className={classesComun.pullRight}>
                    {localValue.length}/700
                  </label>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className={classesComun.boxRelato}
                >
                  <div style={{ fontWeight: "bold" }}>Relato:</div>
                  <div>
                    <div
                      className={classesComun.buttonEditRelato}
                      onClick={() => setEditable(true)}
                    >
                      Editar
                    </div>
                  </div>
                </div>
                <div
                  className={classesComun.boxRelatoText}
                >
                  {localValue}
                </div>
              </div>
            )}
          </div>
          <div className={spaceStyle.space1}></div>
          <div className={classesComun.bottomElement}>
            <Button
              className={classesComun.buttonAchs}
              variant="contained"
              type="submit"
              disabled={isDisabled()}
            >
              Relato correcto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm: addmissionForm,
  };
};
export default connect(mapStateToProps)(RelatoFinal);
