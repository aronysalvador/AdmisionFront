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
import image from './../../img/relato.svg'

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
        <div className={comunClass.boxDeskCardBtn}>
          <div className="row">
            <div className="col-md-6">AFP</div>
            <div className="col-md-6">Isapre</div>
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
