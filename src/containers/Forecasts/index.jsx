import { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import Listados from "../../components/AfpList/Listados";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";
import { Format } from "../../helpers/strings";

const Forecasts = () => {
  const {
    addmissionForm: { percentage, afpForm, isapreSeleccionado }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  const [ checkedAfp, setCheckedAfp ] = useState(afpForm?afpForm:"");

  const { isapres: isapreList } = useSelector((state) => state.previsionForm, shallowEqual);
  const [ checkedIsapre, setcheckedIsapre ] = useState(isapreSeleccionado?isapreSeleccionado:"");

  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600]
      }
    },
    checked: {}
  })((props) => <Radio color='default' {...props} />);

  const handeleNextAfp = (txt) => {
    setTimeout(() => {
      if (checkedAfp.codigo && checkedIsapre?.id){
        dispatch(updateForm("afpForm", txt));
        dispatch(updateForm("isapreSeleccionado", checkedIsapre));
        dispatch(handleSetStep("x_next", 18.01))
      }
    }, 500);
  }

  const handeleNextIsapre = (txt) => {
    setTimeout(() => {
      if (checkedAfp.codigo && checkedIsapre?.id){
        dispatch(updateForm("afpForm", checkedAfp));
        dispatch(updateForm("isapreSeleccionado", txt));
        dispatch(handleSetStep("x_next", 18.01))
      }
    }, 500);
  }

  useEffect(() => {
    if (!isapreSeleccionado){
      handeleNextIsapre(checkedIsapre)
    } else {
      if (isapreSeleccionado!==checkedIsapre)
        handeleNextIsapre(checkedIsapre)
    }
   // eslint-disable-next-line
  },[checkedIsapre])

  useEffect(() => {
    if (!afpForm){
      handeleNextAfp(checkedAfp)
    } else {
      if (afpForm!==checkedAfp)
        handeleNextAfp(checkedAfp)
    }
    // eslint-disable-next-line
  },[checkedAfp])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}>
        <Header userMsal={microsoftReducer.userMsal} />
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id='Forecasts-BtnBack'
          dispatch={() => dispatch(handleSetStep("x_back", 18.01))}
          percentage={percentage}
        />
      </div>

      { (afpList.length>0 && isapreList.length>0) && (
      <div className='container'>
        <div className={comunClass.boxCardBtn}>
          <div className='row'>
            {afpList.length>0 && (
            <div className='col-md-6'>
            <div className='col-md-12'>
              <div className={comunClass.backgroundGrey}>
                <div className=''>
                  <Grid className={[ comunClass.subtitleBlack, comunClass.textPrimaryDesk ].join(' ')}>
                    Selecciona la
                    <Grid component='span' className={comunClass.titleBlue}>
                      &nbsp;AFP
                    </Grid>
                    &nbsp;o
                    <Grid component='span' className={comunClass.titleBlue}>
                      &nbsp;Previsión Social
                    </Grid>
                  </Grid>
                </div>
                <div className={[ 'container', comunClass.backgroundWhite ].join(' ')}>
                  <div className='row'>
                  {afpList.length>0 && afpList.slice(0, 6).map((afp, i) => (
                    <div key={i} className='col-md-6' style={{marginBottom: '10px'}}>
                      <div className={checkedAfp.codigo === afp.codigo && checkedAfp.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-3'>
                              <BlueRadio
                                  id={"Forecasts-Check"+i}
                                  // onClick={()=>handeleNext()}
                                  checked={checkedAfp.codigo === afp.codigo && checkedAfp.otro === false}
                                  onChange={() => {
                                    afp.otro=false;
                                    setCheckedAfp(afp);
                                  } }
                                  value={checkedAfp}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-9' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(afp.nombre.split(" - ")[1])}</span>
                        </div>

                      </div>
                    </div>
                    ))}
                  </div>
                </div>

                <div className={spaceStyle.space1} />

                <div className='row'>
                  <Listados id='Forecasts-AFP' title='Otra AFP' checkedAfp={ checkedAfp }
setCheckedAfp={setCheckedAfp} identificador='codigo' description='nombre'
listado={afpList} />
                </div>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>
            </div>
            )}

            {isapreList.length>0 && (
            <div className='col-md-6'>
            <div className='col-md-12'>
              <div className={comunClass.backgroundGrey}>
                <div className=''>
                  <Grid className={[ comunClass.subtitleBlack, comunClass.textPrimaryDesk ].join(' ')}>
                    Selecciona la
                    <Grid component='span' className={comunClass.titleBlue}>
                      &nbsp;Previsión de Salud
                    </Grid>
                  </Grid>
                </div>
                <div className={[ 'container', comunClass.backgroundWhite ].join(' ')}>
                  <div className='row'>

                    <div className='col-md-12' style={{marginBottom: '10px'}}>
                      <div className={checkedIsapre?.id === isapreList[0].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-2'>
                              <BlueRadio
                                  id='Forecasts-Check-Isapre1'
                                  checked={checkedIsapre?.id === isapreList[0].id && checkedIsapre.otro === false}
                                  onChange={() => {
                                    isapreList[0].otro=false;
                                    setcheckedIsapre(isapreList[0]);
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-10' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[0].nombre)}</span>
                        </div>
                      </div>
                    </div>

                  {isapreList[25] && (
                   <div className='col-md-6' style={{marginBottom: '10px'}}>
                      <div className={checkedIsapre?.id === isapreList[25].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-3'>
                              <BlueRadio
                                  id='Forecasts-Check-Isapre2'
                                  checked={checkedIsapre?.id === isapreList[25].id && checkedIsapre.otro === false}
                                  onChange={() => {
                                     isapreList[25].otro=false;
                                     setcheckedIsapre(isapreList[25]);
                                     } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-9' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[25].nombre)}</span>
                        </div>

                      </div>
                   </div>
                   )}

                  {isapreList[12] && (
                   <div className='col-md-6' style={{marginBottom: '10px'}}>
                      <div className={checkedIsapre?.id === isapreList[12].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-3'>
                              <BlueRadio
                                  id='Forecasts-Check-Isapre3'
                                  checked={checkedIsapre?.id === isapreList[12].id && checkedIsapre.otro === false}
                                  onChange={() => {
                                     isapreList[12].otro=false;
                                     setcheckedIsapre(isapreList[12]);
                                    } }
                                    // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-9' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[12].nombre)}</span>
                        </div>
                      </div>
                   </div>
                    )}


                  {isapreList[11] && (
                   <div className='col-md-6' style={{marginBottom: '10px'}}>
                      <div className={checkedIsapre?.id === isapreList[11].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-3'>
                              <BlueRadio
                                  id='Forecasts-Check-Isapre4'
                                  checked={checkedIsapre?.id === isapreList[11].id && checkedIsapre.otro === false}
                                  onChange={() => {
                                    isapreList[11].otro=false;
                                    setcheckedIsapre(isapreList[11]);
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-9' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[11].nombre)}</span>
                        </div>
                      </div>
                   </div>
                  )}

                  {isapreList[9] && (
                   <div className='col-md-6' style={{marginBottom: '10px'}}>
                      <div className={checkedIsapre?.id === isapreList[9].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className='col-md-3'>
                              <BlueRadio
                                  id='Forecasts-Check-Isapre5'
                                  checked={checkedIsapre?.id === isapreList[9].id && checkedIsapre.otro === false}
                                  onChange={() => {
                                    isapreList[9].otro=false;
                                    setcheckedIsapre(isapreList[9]);
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name='radio-button-demo'
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className='col-md-9' style={{textAlign: "left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[9].nombre)}</span>
                        </div>
                      </div>
                   </div>
                    )}

                  </div>
                </div>

                <div className={spaceStyle.space1} />

                <div className='row'>
                  <Listados id='Forecasts-Isapre' title='Otra Isapre' checkedAfp ={ checkedIsapre }
                    setCheckedAfp = {setcheckedIsapre} identificador='id' description='nombre'
                    listado={isapreList}
                  />
                </div>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>
            </div>
            )}

            {/* <div className="col-md-6" style={{backgroundColor: "#F4F4F4"}}>
              <div className="">
                <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk].join(' ')}>
                  Selecciona la
                  <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2].join(' ')}>
                    &nbsp;Previsión de Salud
                  </Grid>
                </Grid>
              </div>
              <div className="row">
                Botones Isapres
              </div>
              <div className={spaceStyle.space1} />
              <div className="row">
                Lista Isapres
              </div>
            </div> */}

          </div>
        </div>
      </div>
      )}

    </div>

  );
};

export default Forecasts;
