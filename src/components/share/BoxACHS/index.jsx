import React from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { handleSetStep } from "../../../redux/actions/AdmissionAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";

const BoxACHS = (props) => {
    const { titulo, contenido,step } = props
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
                        {contenido.map((item,index) => {
                            return <div id={index} className={classes.itemFecha}>{item}</div>
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
export default BoxACHS;