import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
// import { getWelcomeStyle } from "../../css/welcomeStyle";
import Cabecera from "../../components/cabecera/index";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
// import Checkbox from '@material-ui/core/Checkbox';
import relato from './../../img/relato.svg'
import editaRelato from './../../img/editar-relato.svg'
import { Format } from "../../helpers/strings";
import ListadoCriterio from "../../components/CriterioGravedad/ListadoCriterio";

const RelatoFinal = () => {

  const {
    addmissionForm: { lugarAccidente, descripcionAccidente, objetoAccidente, relatoAccidente, volverAConcatenar, tipoSiniestro, criteriosForm, percentage },
    microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();
  // const welcomeStyle = getWelcomeStyle();

  const getRelato = () => {
    return (
      lugarAccidente +
      ". " +
      descripcionAccidente +
      ". " +
      objetoAccidente + "."
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
  
  // Listado Criterio de Gravedad
  const { data: criterioList } = useSelector((state) => state.criteriosForm, shallowEqual);
  const [criterioGravedad, setCriterioGravedad] = useState(criteriosForm ? criteriosForm : {key: 49, value: "Otro"}); //criterioList.value[0]

  // const [stateCheckbox, setStateCheckbox] = useState(() => {
  //   return coberturaSoap === "si" ? true : false 
  // });

  // const handleCheckBoxChange = (event) => {
  //   setStateCheckbox( event.target.checked );
  // };

  // var respSoap = stateCheckbox ? "si" : "no" ;

  const saveAnswer = (value) => {
    dispatch(updateForm("volverAConcatenar", false));
    dispatch(updateForm("relatoAccidente", value));
    dispatch(updateForm("criteriosForm", criterioGravedad));
    // dispatch(updateForm("coberturaSoap", respSoap));
    if(tipoSiniestro.Id === 2) {//Accidente de Trayecto
      dispatch(updateForm("desarrollarTrabajoHabitual", "no"))
    }
    dispatch(handleSetStep("x",8.1))
  };

  const onChangeHandler = (event) => {
    setLocalValue(Format.caracteresInvalidos(event.target.value));
  };

  const isDisabled = () => {
    return localValue.length < 15 || !criterioGravedad;
  };

  // const BlueCheckbox = withStyles({
  //   root: {
  //     '&$checked': {
  //       color: '#00B2A9',
  //     },
  //   },
  //   checked: {},
  // })((props) => <Checkbox color="default" {...props} />);

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal } />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"RelatoFinal-BtnBack"}
          dispatch={() => dispatch(handleSetStep(6.06))}
          percentage={percentage}
        />
      </div>
      <div>
        <form onSubmit={() => saveAnswer(localValue)}>
          <div className={comunClass.titlePrimaryDesk}>
            <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
              Por favor,
              <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
                &nbsp;confirma el relato
              </Grid>   
            </Grid>
            <div className={comunClass.displayDeskImg}>
              <Grid component="span" className={comunClass.imgPrimaryDesk}>
                <img alt="identify" src={relato} className={comunClass.imgPrimaryWidth}/>
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
                    </div>
                    <TextField
                      id={"RelatoFinal-Lbl1"}
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
                        id={"RelatoFinal-Btn1"}
                        className={comunClass.buttonEditRelato}
                        onClick={() => setEditable(true)}
                      >
                        <img alt="editar relato" src={editaRelato} />
                        &nbsp;Editar
                      </div>
                    </div>
                  </div>
                  <div className={comunClass.boxRelatoText}>
                    {localValue}
                  </div>
                </div>
              )}
              {/* <Typography className={welcomeStyle.switchText}>
                <Grid component="span">
                  <BlueCheckbox checked={stateCheckbox} onChange={handleCheckBoxChange} />
                </Grid>
                Corresponde a cobertura &nbsp;<b>SOAP</b>
              </Typography> */}
            </div>

            <div className={comunClass.displayMobile}>
              <div className={spaceStyle.space1} />
            </div>
            {!isEdit &&
            <div className="row">
              <ListadoCriterio 
                id="RelatoFinal-ListCriterio"  
                title="Criterio de gravedad" 
                data={criterioGravedad} 
                setData={setCriterioGravedad} 
                listado={criterioList}  
                // options={['id','nombre']}
              />
            </div>}
            
            <div className={comunClass.bottomElement}>
              <Button
                id={"RelatoFinal-Btn2"}
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
