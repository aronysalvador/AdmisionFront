import React from "react";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const CabeceraSinBarra = (props) => {
  const { id, dispatch, color } = props;
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div>

        <div className={spaceStyle.space1} />

      <div className={comunClass.buttonVolverContainerBarra}>
        <div style={{cursor:'pointer'}} onClick={() => dispatch()}>
          <ArrowBackIosIcon style={{ color: color }} id={id}/> 
        </div>
      </div>
    </div>
  );
};
export default CabeceraSinBarra;
