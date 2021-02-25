import React from 'react';
import Typography from '@material-ui/core/Typography';
import { cardSiniestroStyles } from "../../../css/cardSiniestroStyle";

const BoxACHSEditDelete = (props) => {
    const { titulo, contenido } = props
    const classes = cardSiniestroStyles();

    return (<div className={classes.container} style={{margin: '15px 0', width: '100%'}}>
                <div className={classes.cuerpo}>
                    <div>
                        <Typography className={classes.itemId}>
                            {titulo}
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            {contenido.map((value, i) => {
                            return <div key={i} className={classes.itemTipo}>{value}</div>
                            })}
                        </Typography>
                    </div>
                </div>
            </div>
    );
}
export default BoxACHSEditDelete;
