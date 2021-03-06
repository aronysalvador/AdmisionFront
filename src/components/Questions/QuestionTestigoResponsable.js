import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

const QuestionButton = (props) => {
  const { titulo, titulo2, titulo3, accionButoonA, accionButoonB, tituloA, tituloB } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div>
      <div>
        <Typography variant="p" component="p" className={classesComun.titleBlack}>
          {titulo}
          <Grid component="span"  className={classesComun.titleBlue}>
              &nbsp;{titulo2} 
          </Grid>          
          {titulo3}
        </Typography>
      </div>

      <div className={classesComun.bottomElement}>
        <div>
          <Button
            className={classesComun.buttonAchs}
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
            className={classesComun.buttonAchs2}
            variant="contained"
            type="submit"
            onClick={() => accionButoonB()}
          >
            {tituloB}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionButton;
