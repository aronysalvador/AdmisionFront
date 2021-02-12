import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { cardSiniestroStyles } from '../../../css/cardSiniestroStyle';
import { Grid } from '@material-ui/core';

//import { Format } from '../../../helpers/strings';


const BoxEmpresa = (props) => {
    const { id, titulo, contenidoDireccionEmpresa, contenidoRazonSocialForm, contenidoRutEmpresa, step } = props
    const classes = cardSiniestroStyles();
    const dispatch = useDispatch();
    return (<div className={classes.containerBox}>
                <Grid container id={id} onClick={() => dispatch(handleSetStep(step))}>
                    <Grid item xs={11} >
                        <div className={classes.cuerpo}>
                            <div>
                                <Typography color="textSecondary" className={classes.itemId}>
                                    {titulo}
                                    {/* <EditIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} /> */}
                                </Typography>
                            </div>
                            <div>
                                {contenidoDireccionEmpresa.map((item,index) => {
                                    return <div  key={index}  id={index} className={classes.itemFecha}>{item}</div>
                                })}
                                {contenidoRazonSocialForm.map((item,index) => {
                                    return <div  key={index}  id={index} className={classes.itemRazonSocial}>{item}</div>
                                })}
                                {contenidoRutEmpresa.map((item,index) => {
                                    return <div  key={index}  id={index} className={classes.itemRazonSocial}>{item}</div>
                                })}
                            </div>                        
                        </div>
                    </Grid>
                    <Grid item xs={1} className={classes.asidePersonalData} >
                        <div>
                            {" "}
                            <ChevronRightIcon style={{cursor : "pointer"}} onClick={() => dispatch(handleSetStep(step))} />
                        </div>
                    </Grid>
                </Grid>
            </div>
    );
}
export default BoxEmpresa;