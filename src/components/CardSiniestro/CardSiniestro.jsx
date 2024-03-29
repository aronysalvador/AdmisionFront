import { useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import { cardSiniestroStyles } from "../../css/cardSiniestroStyle";
import { getComunStyle } from "../../css/comun"
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

const CardSiniestro = (props) => {
  const dispatch = useDispatch();

  const { siniestro } = props;
  const { id, fecha, hora, descripcion, reposoActivo } = siniestro;
  const styles = cardSiniestroStyles();
  const comunClass = getComunStyle();

  return (
    <div
      id={"CardSiniestro-Btn"+id}
      className={styles.container}
      onClick={() => {
        dispatch(updateForm("siniestroDetalle", siniestro));
        dispatch(handleSetStep(5.832));
      }}
    >
      <div className={styles.cuerpo}>
        <div className={styles.itemId}>ID: {id}
          <div
            className={styles.itemReposo}
            style={reposoActivo === "NO" ? {display: "none"} : {display: "flex"}}
          >
            <ReportProblemOutlinedIcon style={{ fontSize: 14 }} />  Reposo activo
          </div>
        </div>
        <div className={styles.itemFecha}>
          {fecha} - {hora}
        </div>
        <div className={styles.itemTipo}>{descripcion}</div>
      </div>
      <div className={comunClass.displayMobile}>
        <div className={styles.aside}>
          {" "}
          <ChevronRightIcon className={styles.iconRight} />
        </div>
      </div>
    </div>
  );
};

export default CardSiniestro;
