import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import BoxACHSEditDelete from "../share/BoxACHSEditDelete/index";
import image from './../../img/relato.svg'

const QuestionTestigoResponsable = (props) => {
  const { titulo, titulo2, titulo3, tituloTestigo, contenidoTestigo, irA } = props;

  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[ comunClass.titleBlack, comunClass.textPrimaryDesk ].join(' ')}>
          {titulo}
          <Grid component='span' className={[ comunClass.titleBlue, comunClass.titleBlue2 ].join(' ')}>
            {titulo2}
          </Grid>
          {titulo3}
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component='span' className={comunClass.imgPrimaryDesk}>
            <img alt='identify' src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.containerTextBox}>
          <div className={comunClass.displayMobile}>
            <div className={spaceStyle.space1} />
          </div>
          <BoxACHSEditDelete
            titulo={tituloTestigo}
            contenido={contenidoTestigo}
            // style={{margin:'15px 0', width: '100%'}}
          />
        </div>

        <div className={comunClass.bottomElement}>
          <Button
            className={comunClass.buttonAchs}
            variant='contained'
            type='submit'
            onClick={() => irA()}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  );
};

export default QuestionTestigoResponsable;
