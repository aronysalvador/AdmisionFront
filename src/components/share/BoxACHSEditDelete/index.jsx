import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    tituloConteiner: {
        height: '2.5em',
        left: '1em',
        right: '1em',
        top: '0.5em',
        background: '#007A33',
        borderRadius: '0.25em 0.25em 0em 0em',
        border : '0px',
        margin : '0px'
    },
    tituloText : {
        fontFamily: 'Catamaran',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.25',
        lineHeight: '1.75',
        display: 'flex',
        alignItems: 'center',
        color: '#F8F9FA',
        padding :'0.25em 0.25em 0.25em 0.8em',
    },
    contentConteiner:{
        left: '21.5em',
        right: '-19.5em',
        top: '9.25em',
        bottom: '-5.75em',
        background: '#FFFFFF',
        borderRadius: '0.25em',
        boxShadow: '0em 0.125em 0.375em rgba(203, 203, 203, 0.4)',
        padding : '0.5em'
    },
    contentText:{
        left: '2em',
        right: '2em',
        top: '3.5em',
        bottom: '1em',
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1em',
        lineHeight: '1.25',
        color: '#373737',
    },
    divEditDelete:{
        width: '100%',
        textAlign: 'right'
    },
    marginDelete: {
        marginRight:'20px'
    }
  });

const BoxACHSEditDelete = (props) => {
    const { titulo, contenido } = props
    const classes = useStyles()
    return (<div>
                <div>
                    <div className={classes.tituloConteiner}>
                        <Typography color="textSecondary" gutterBottom className={classes.tituloText}>
                            {titulo}
                            {/* <div className={classes.divEditDelete}>
                            <DeleteIcon className={classes.marginDelete}></DeleteIcon>   
                            <EditIcon></EditIcon>
                            </div> */}
                        </Typography>
                    </div>
                    <div className={classes.contentConteiner}>
                        <Typography color="textSecondary" gutterBottom className={classes.contentText}>
                            {contenido.map((value) => {
                            return <div>{value}</div>
                            })}
                        </Typography>
                    </div>
                </div>
            </div>
    );
}
export default BoxACHSEditDelete;