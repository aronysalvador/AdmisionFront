import Typography from '@material-ui/core/Typography'
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";
import editaRelato from '../../../img/editar-relatoPD.svg'
import { getComunStyle } from "../../../css/comun";
import { cardSiniestroStyles } from '../../../css/cardSiniestroStyle';
import { Grid } from '@material-ui/core';

// import { Format } from '../../../helpers/strings';

const BoxEmpresa = (props) => {
    const { id, titulo, contenidoDireccionEmpresa, contenidoComunaEmpresa, contenidoRazonSocialForm, contenidoRutEmpresa, step } = props
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
                                    {/* <EditIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} /> */}
                                </Typography>
                            </div>
                            <div>
                                {contenidoDireccionEmpresa.map((item, index) => {
                                    return <div key={index} id={index} className={classes.itemFecha}>{item}</div>
                                })}

                               {contenidoComunaEmpresa && (<div className={classes.itemSubtitle}>{contenidoComunaEmpresa}</div>) }

                                {contenidoRazonSocialForm.map((item, index) => {
                                    return <div key={index} id={index} className={classes.itemRazonSocial}>{item}</div>
                                })}
                                {contenidoRutEmpresa.map((item, index) => {
                                    return <div key={index} id={index} className={classes.itemRazonSocial}>{item}</div>
                                })}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div
                            id={"BoxEmpresa-BtnEdit1"}
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
export default BoxEmpresa;