import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const QuestionButton = (props) => {
  const { titulo, titulo2, titulo3, accionButoonA, accionButoonB, tituloA, tituloB } = props;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div>
      <div className={comunClass.titlePrimaryDesk}>
        <Typography variant="p" component="p" className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          {titulo}
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;{titulo2} 
          </Grid>          
          {titulo3}
        </Typography>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.bottomElement}>
          <div>
            <Button
              className={comunClass.buttonAchs}
              variant="contained"
              type="submit"
              onClick={() => accionButoonA()}
            >
              {tituloA}
            </Button>
          </div>
          <div className={spaceStyle.space1} />
          <div>
            <Button
              className={comunClass.buttonAchs2}
              variant="contained"
              type="submit"
              onClick={() => accionButoonB()}
            >
              {tituloB}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionButton;
