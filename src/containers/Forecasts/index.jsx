import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import BotonSeleccionarCustom from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustom";
import BotonSeleccionarCustomItem from "../../components/BotonSeleccionarCustom/BotonSeleccionarCustomItem";
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/index";

import AfpList from "../../components/AfpList/AfpList";
import AfpButtons from "../../components/AfpList/AfpButtons";

import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "../../util/color/specialBlue";

const Forecasts = () => {
  const {
    addmissionForm: { percentage, afpForm, responsable }, microsoftReducer
  } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  const tipoAFP = !afpForm ? "" : afpForm;
  const { data: afpList } = useSelector((state) => state.afpForm, shallowEqual);
  // const [buttonOver, setButtonOver] = useState(false);

  const BlueRadio = withStyles({
    root: {
      color: specialBlue,
      '&$checked': {
        color: specialBlue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

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
            <div className="col-md-6">
              <div style={{backgroundColor: "#F4F4F4"}}>
                <div className="">
                  <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
                    Selecciona la
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
                      &nbsp;AFP
                    </Grid>      
                    &nbsp;o 
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
                      &nbsp;Previsión Social
                    </Grid>      
                  </Grid>
                </div>
                <div className="container" style={{backgroundColor: "white"}}>
                  <div className="row">
                  {afpList.slice(0,6).map((afp) => (
                    // <div className={check.id === 1 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                    <div className="col-md-6">
                      <div className={comunClass.roundedBlue}>
                          <div className={comunClass.containerOpction}>
                              <BlueRadio
                                  checked={true}
                                  onChange={()=> console.log("radio afp")}
                                  value={1}
                                  name="radio-button-demo"
                                  inputProps={{ 'aria-label': 'C' }}
                              />
                              <p className={comunClass.txtRadios}>{afp.nombre}</p>
                          </div>
                      </div>
                    </div>
                    ))}
                    </div>
                  </div>

                  {/* <div className={comunClass.cardsButtonAlign}>
                  {afpList.slice(0,6).map((afp) => (
                  <AfpButtons
                    key={afp.codigo}
                    data={afp}
                    itemForm={"afpForm"}
                    selected={afp.codigo === tipoAFP.codigo}
                    step={19}
                  >
                    <BotonSeleccionarCustomItem {...afp} />
                  </AfpButtons>
                  ))}
                  </div> */}
                <div className={spaceStyle.space1} />
                <div className="row">
                  <AfpList  />
                </div>
                <div className={spaceStyle.spaceMin1} />
              </div>
            </div>

            <div className="col-md-6" style={{backgroundColor: "#F4F4F4"}}>
              <div className="">
                <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
                  Selecciona la
                  <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
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
            </div>
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
