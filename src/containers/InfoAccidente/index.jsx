import React from "react"
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSpaceStyle } from "../../css/spaceStyle";

const InfoAccidente = () => {
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const dispatch = useDispatch();
   const {  addmissionForm, microsoftReducer } = useSelector((state) => state, shallowEqual);

    return (
        <div className={comunClass.root}>
            <div className={comunClass.displayDesk}> 
                <Header
                    userMsal={ microsoftReducer.userMsal }
                />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    dispatch={() => dispatch(handleSetStep("x",10.1))}
                    percentage={addmissionForm.percentage}
                />
            </div>                           

            <div className={comunClass.boxDesk}>
                <div className={comunClass.bottomElement} style={{position:'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>
            
            
                </div>
            </div>

      </div>
    )
}

export default InfoAccidente