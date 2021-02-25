import { connect } from "react-redux";
import { handleSetStep } from "../../redux/actions/AdmissionAction";
import Typography from "@material-ui/core/Typography";
import { conditionsStyle } from "../../css/conditionsStyle";
import Button from "@material-ui/core/Button";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";
import Cabecera from "../../components/cabecera/index";

const Conditions = (props) => {
  const { dispatch } = props;
  const classes = conditionsStyle();
  const comunClass = getComunStyle();
  const spaceStyle = getSpaceStyle();

  return (
    <div className={comunClass.root}>
      <Cabecera dispatch={() => dispatch(handleSetStep(1))} percentage={-1} />
      <div>
        <Typography className={comunClass.pregunta}>
          Términos y condiciones
        </Typography>
      </div>
      <div className={spaceStyle.space3} />
      <div>
        <Typography
          className={classes.condiciones1}
        >
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          <br />
          - Cras turpis amet lorem lorem. In id nisl, vulputate lacus, libero
          hendrerit.
          <br />
          <br />
          - Diam elementum ut magna donec viverra cras sed elementum odio.
          <br />
          <br />- Tristique tristique non tincidunt sit ultrices vel libero, nam
          placerat.
        </Typography>
      </div>
      <div className={spaceStyle.space3} />
      <div className={classes.condiciones2Container}>
        <Typography className={classes.condiciones2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis
          amet lorem lorem. In id nisl, vulputate lacus, libero hendrerit. In
          sed sed est, egestas ultrices sed egestas. Diam elementum ut magna
          donec viverra cras sed elementum odio. Tristique tristique non
          tincidunt sit ultrices vel libero, nam placerat. Ut adipiscing felis
          nec pretium turpis orci et morbi ut. Eleifend amet nunc amet mi
          curabitur nam faucibus. Odio nunc commodo in enim tempus. Enim etiam
          vehicula nisl urna suspendisse. Aliquam nulla egestas tincidunt id
          gravida. Nisl tempor pretium elementum, eget sodales auctor turpis
          gravida. Sit lectus sit risus adipiscing nunc arcu sit. Aenean
          consectetur egestas ac turpis leo commodo, est, eros imperdiet.
          Sapien, aliquet lacus, nulla iaculis elementum odio a in. Ornare lorem
          at mauris, venenatis aliquet. Posuere leo purus dictumst eget. Nulla
          curabitur tincidunt nunc, nulla aliquam maecenas. Volutpat vitae
          posuere pulvinar nulla nunc a amet tellus. Amet varius proin ut in vel
          senectus nunc pretium. Tortor pharetra blandit ultrices enim et donec
          condimentum. Id pellentesque mauris et enim vitae. Egestas diam sit
          integer dis sit felis felis et. Tellus lorem a integer vitae tellus
          euismod. Ut enim quis quam sit. Egestas enim eu ipsum ipsum cursus
          nunc. Vitae elementum commodo id magna sed malesuada luctus vel.
        </Typography>
      </div>
      <div className={comunClass.bottomElement}>
        <Button
          className={comunClass.buttonAchs}
          variant='contained'
          onClick={() => dispatch(handleSetStep(2))}
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ addmissionForm }) => {
  return {
    addmissionForm
  };
};
export default connect(mapStateToProps)(Conditions);
