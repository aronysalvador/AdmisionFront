import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";
import editaRelato from '../../../img/editar-relatoPD.svg'
import { getComunStyle } from "../../../css/comun";
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";
import { Grid } from '@material-ui/core';

const BoxACHS = (props) => {
    const { id, titulo, contenido, step } = props
    const comunClass = getComunStyle();
    const classes = cardSiniestroStyles();
    const dispatch = useDispatch();

    return (<div className={classes.containerBox}>
                <Grid container id={id} onClick={() => dispatch(handleSetStep(step))}>
                    <Grid item xs={10}>
                        <div className={classes.cuerpo}>
                            <div>
                                <Typography color='textSecondary' className={classes.itemId}>
                                    {titulo}
                                </Typography>
                            </div>
                            <div>
                                {contenido.map((item, index) => {
                                    return <div key={index} id={index} className={classes.itemFecha}>{item}</div>
                                })}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            id={"BoxACHS-BtnEdit1"}
                            className={comunClass.buttonEditPersonalData}
                            onClick={() => dispatch(handleSetStep(step))}
                        >
                            <img alt='editar relato' src={editaRelato} />
                            Editar
                        </div>
                    </Grid>
                </Grid>
            </div>
    );
}
export default BoxACHS;