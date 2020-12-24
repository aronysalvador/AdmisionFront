import React, {useState, useEffect} from "react";
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
    addmissionForm: { percentage, responsable, afpForm, isapreSeleccionado }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  const [checkedAfp, setCheckedAfp] = useState(afpForm?afpForm:"");

  const { isapres: isapreList } = useSelector((state) => state.previsionForm, shallowEqual);
  const [checkedIsapre, setcheckedIsapre] = useState(isapreSeleccionado?isapreSeleccionado:"");

  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);



  const handeleNextAfp = (txt) => {
    console.log("in afp")
    setTimeout(() => {    
      console.log(checkedAfp)
      console.log(checkedIsapre)
      if(checkedAfp.codigo && checkedIsapre.id){  
        console.log("next")
        dispatch(updateForm("afpForm", txt));
        dispatch(updateForm("isapreSeleccionado", checkedIsapre));
        dispatch(handleSetStep(19.2))
      }
    }, 500);
  }

  const handeleNextIsapre = (txt) => {
    console.log("in isapre")
    setTimeout(() => {    
      console.log(checkedAfp)
      console.log(checkedIsapre)
      if(checkedAfp.codigo && checkedIsapre.id){  
        console.log("next")
        dispatch(updateForm("afpForm", checkedAfp));
        dispatch(updateForm("isapreSeleccionado", txt));
        dispatch(handleSetStep(19.2))
      }
    }, 500);
  }

  useEffect(()=>{
    if(!isapreSeleccionado){
      console.log("checkedIsapre1")
      console.log(checkedIsapre)
      handeleNextIsapre(checkedIsapre)
    }else{
      if(isapreSeleccionado!==checkedIsapre){
        console.log("checkedIsapre2")
        console.log(checkedIsapre)
        handeleNextIsapre(checkedIsapre)
      }
    }
   // eslint-disable-next-line
  },[checkedIsapre])

  useEffect(()=>{
    if(!afpForm){
      console.log("checkedAfp1")
      console.log(checkedAfp)
      handeleNextAfp(checkedAfp)
    }else{
      if(afpForm!==checkedAfp){
        console.log("checkedAfp2")
        console.log(checkedAfp)
        handeleNextAfp(checkedAfp)
      }
    }
    // eslint-disable-next-line
  },[checkedAfp])

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={microsoftReducer.userMsal}/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          dispatch={() => dispatch(handleSetStep(responsable?.nombre?.length > 0 ?  17.1 : 15 ))}
          percentage={percentage}
        />
      </div>
      
      { (afpList.length>0 && isapreList.length>0) && (
      <div className="container">
        <div className={comunClass.boxCardBtn}>
          <div className="row">
            {afpList.length>0 && (
            <div className="col-md-6">
            <div className="col-md-12">
              <div className={comunClass.backgroundGrey}>
                <div className="">
                  <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk].join(' ')}>
                    Selecciona la
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2].join(' ')}>
                      &nbsp;AFP
                    </Grid>      
                    &nbsp;o 
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2].join(' ')}>
                      &nbsp;Previsión Social
                    </Grid>      
                  </Grid>
                </div>
                <div className={['container', comunClass.backgroundWhite].join(' ')}>
                  <div className="row">
                  {afpList.length>0 && afpList.slice(0,6).map((afp,i) => (
                   <div key={i} className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedAfp.codigo === afp.codigo && checkedAfp.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  // onClick={()=>handeleNext()}
                                  checked={checkedAfp.codigo === afp.codigo && checkedAfp.otro === false}
                                  onChange={()=>{ 
                                    afp.otro=false; 
                                    setCheckedAfp(afp);;                                                                         
                                  } }
                                  value={checkedAfp}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(afp.nombre.split(" - ")[1])}</span>                          
                        </div>
                          
                      </div>
                    </div>
                    ))}
                    </div>
                  </div>

                <div className={spaceStyle.space1} />

                <div className="row">
                  <Listados title="Otra AFP" checkedAfp ={ checkedAfp } setCheckedAfp = {setCheckedAfp}  identificador="codigo" description="nombre" listado={afpList}   />
                </div>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>
            </div>
            )}

            {isapreList.length>0 && (
            <div className="col-md-6">
            <div className="col-md-12">
              <div className={comunClass.backgroundGrey}>
                <div className="">
                  <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk].join(' ')}>
                    Selecciona la
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2].join(' ')}>
                      &nbsp;Previsión de Salud
                    </Grid>      
                  </Grid>
                </div>
                <div className={['container', comunClass.backgroundWhite].join(' ')}>
                  <div className="row">
                 
                   <div className="col-md-12" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapreList[0].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-2">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapreList[0].id && checkedIsapre.otro === false}
                                  onChange={()=>{ 
                                    isapreList[0].otro=false; 
                                    setcheckedIsapre(isapreList[0]);
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-10" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[0].nombre)}</span>                          
                        </div>
                          
                      </div>
                    </div>
                    
                 
                   <div className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapreList[25].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapreList[25].id && checkedIsapre.otro === false}
                                  onChange={()=>{
                                     isapreList[25].otro=false; 
                                     setcheckedIsapre(isapreList[25]);
                                     } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[25].nombre)}</span>                          
                        </div>
                          
                      </div>
                    </div>
                 
                   <div className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapreList[12].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapreList[12].id && checkedIsapre.otro === false}
                                  onChange={()=>{
                                     isapreList[12].otro=false; 
                                     setcheckedIsapre(isapreList[12]); 
                                    } }
                                    // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[12].nombre)}</span>                          
                        </div>
                          
                      </div>
                    </div>
                 
                   <div className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapreList[11].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapreList[11].id && checkedIsapre.otro === false}
                                  onChange={()=>{ 
                                    isapreList[11].otro=false; 
                                    setcheckedIsapre(isapreList[11]);
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[11].nombre)}</span>                          
                        </div>
                          
                      </div>
                    </div>
                 
                   <div className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapreList[9].id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapreList[9].id && checkedIsapre.otro === false}
                                  onChange={()=>{ 
                                    isapreList[9].otro=false; 
                                    setcheckedIsapre(isapreList[9]); 
                                  } }
                                  // onClick={()=>handeleNext()}
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{Format.formatizar(isapreList[9].nombre)}</span>                          
                        </div>
                          
                      </div>
                    </div>
                    
                    </div>
                  </div>

                <div className={spaceStyle.space1} />

                <div className="row">
                  <Listados title="Otra Isapre" checkedAfp ={ checkedIsapre } setCheckedAfp = {setcheckedIsapre} identificador="id" description="nombre" listado={isapreList}  />
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
    
    


    // <div className={comunClass.root}>
    //   <div className={comunClass.displayDesk}> 
    //     <Header userMsal={ microsoftReducer.userMsal }/>
    //   </div>
    //   <div className={comunClass.beginContainerDesk}>
    //     <Cabecera
    //       dispatch={() => dispatch(handleSetStep(responsable?.nombre?.length > 0 ?  17.1 : 15 ,18.01))}
    //       percentage={percentage}
    //     />
    //   </div>
      
    // </div>
  );
};

export default Forecasts;
