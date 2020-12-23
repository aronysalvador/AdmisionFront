import React, {useState, useEffect} from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";
import Listados from "../../components/AfpList/Listados";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";

const Forecasts = () => {
  const {
    addmissionForm: { percentage, responsable }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  const [checkedAfp, setCheckedAfp] = useState("");

  const { isapres: isapreList } = useSelector((state) => state.previsionForm, shallowEqual);
  const [checkedIsapre, setcheckedIsapre] = useState("");

  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


  useEffect(()=>{
    console.log(checkedAfp)
  },[checkedAfp, checkedIsapre])

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
      
      <div className="container">
        <div className={comunClass.boxCardBtn}>
          <div className="row">
            {afpList.length>0 && (
            <div className="col-md-6">
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
                                  checked={checkedAfp.codigo === afp.codigo && checkedAfp.otro === false}
                                  onChange={()=>{ afp.otro=false; setCheckedAfp(afp); } }
                                  value={checkedAfp}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{afp.nombre}</span>                          
                        </div>
                          
                      </div>
                    </div>
                    ))}
                    </div>
                  </div>

                <div className={spaceStyle.space1} />

                <div className="row">
                  <Listados checkedAfp ={ checkedAfp } setCheckedAfp = {setCheckedAfp}   />
                </div>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>
            )}

            {isapreList.length>0 && (
            <div className="col-md-6">
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
                  {isapreList.length>0 && isapreList.slice(0,6).map((isapre,i) => (
                 
                   <div key={i} className="col-md-6" style={{marginBottom: '10px'}}> 
                      <div className={checkedIsapre.id === isapre.id && checkedIsapre.otro === false ? comunClass.roundedRadioBlue : comunClass.roundedRadioNormal}>
                        <div className="col-md-3">
                              <BlueRadio
                                  checked={checkedIsapre.id === isapre.id && checkedIsapre.otro === false}
                                  onChange={()=>{ isapre.otro=false; setcheckedIsapre(isapre); } }
                                  value={checkedIsapre}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                        </div>
                        <div className="col-md-9" style={{textAlign:"left"}}>
                              <span className={comunClass.txtRadios}>{isapre.nombre}</span>                          
                        </div>
                          
                      </div>
                    </div>
                    ))}
                    </div>
                  </div>

                <div className={spaceStyle.space1} />

                <div className="row">
                  <Listados checkedAfp ={ checkedAfp } setCheckedAfp = {setCheckedAfp} />
                </div>
                <div className={spaceStyle.spaceMin1} />
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
