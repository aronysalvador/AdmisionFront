import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { cardSiniestroStyles } from '../../../css/cardSiniestroStyle';

const BoxEmpresa = (props) => {
    const { titulo, contenidoDireccionEmpresa, contenidoRazonSocialForm, contenidoRutEmpresa, step } = props
    const classes = cardSiniestroStyles();
    const dispatch = useDispatch();
    return (<div className={classes.container}>
                <div className={classes.cuerpo}>
                    <div>
                        <Typography color="textSecondary" gutterBottom className={classes.itemId}>
                            {titulo}
                            {/* <EditIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} /> */}
                        </Typography>
                    </div>
                    <div>
                        {contenidoDireccionEmpresa.map((item,index) => {
                            return <div id={index} className={classes.itemFecha}>{item}</div>
                        })}
                        {contenidoRazonSocialForm.map((item,index) => {
                            return <div id={index} className={classes.itemRazonSocial}>{item}</div>
                        })}
                        {contenidoRutEmpresa.map((item,index) => {
                            return <div id={index} className={classes.itemRazonSocial}>{item}</div>
                        })}
                    </div>
                    
                </div>
                <div className={classes.asidePersonalData}>
                    {" "}
                    <ChevronRightIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} />
                </div>
            </div>
    );
}
export default BoxEmpresa;