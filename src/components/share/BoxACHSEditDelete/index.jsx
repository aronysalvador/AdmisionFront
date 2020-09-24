import React from 'react';
import Typography from '@material-ui/core/Typography';
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";

const BoxACHSEditDelete = (props) => {
    const { titulo, contenido } = props
    const classes = cardSiniestroStyles();
    return (<div className={classes.container}>
                <div className={classes.cuerpo}>
                    <div>
                        <Typography color="textSecondary" gutterBottom className={classes.itemId}>
                            {titulo}
                        </Typography>
                    </div>
                    <div>
                        <Typography color="textSecondary" gutterBottom className={classes.itemFecha}>
                            {contenido.map((value) => {
                            return <div className={classes.itemTipo}>{value}</div>
                            })}
                        </Typography>
                    </div>
                </div>
            </div>
    );
}
export default BoxACHSEditDelete;