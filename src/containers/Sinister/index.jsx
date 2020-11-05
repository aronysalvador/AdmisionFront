import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import {siniestroStyle} from '../../css/siniestroStyle'
import Button from "@material-ui/core/Button"
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import Cabecera from '../../components/cabecera/index'
import Header from "../../components/header/index";

const Identification = (props) => {

  const { dispatch, addmissionForm, microsoftReducer } = props
  const classes = siniestroStyle()
  const comunClass = getComunStyle()
  const spaceStyle = getSpaceStyle()
  const [buttonOver, setButtonOver] = useState(false)

  return (<div className={comunClass.root}>
    <div className={comunClass.displayDesk}> 
      <Header
        userMsal={ microsoftReducer.userMsal }
        // step={1}
      />
    </div>
    <div className={comunClass.beginContainerDesk}>
      <Cabecera dispatch={() => dispatch(handleSetStep(1.1))} percentage={addmissionForm.percentage} color={'#373737 !important'} />
    </div>
    
    <div className={comunClass.displayDesk}>
      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component="span" className={comunClass.textPrimaryDesk}>
          <Typography variant="p" component="p" className={comunClass.titleBlack2}>
            Empecemos completando <br /> algunos datos 
          </Typography>
        </Grid>
        <Grid component="span" className={comunClass.imgPrimaryDesk}>
          <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
        </Grid>
      </div>
    </div>
    <div className={comunClass.boxDesk}>
      <div>
        <Typography variant="p" component="p" className={[comunClass.titleBlack, comunClass.subtitleBlack]}>
          Selecciona la opción que 
          <Grid component="span"  className={comunClass.titleBlue}>
            &nbsp;mejor describa lo que le sucedió
          </Grid>
        </Typography>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button className={classes.button} variant="contained" onClick={()=>{ 
            var tipo = { Id:1, Descripcion: "Accidente Trabajo" }
            dispatch(updateForm("tipoSiniestro", tipo));
            dispatch(handleSetStep(3));   
            }}
            onMouseOver={() =>{
              setButtonOver(true)
            }}
            onMouseOut={() =>{
              setButtonOver(false)
            }}
          >
            <img alt="Accidente de Trabajo" src={!buttonOver ? "./static/trabajo.svg" : "./static/trabajo-active.svg"} className={classes.imgButton} />
            <div>Accidente de trabajo <br/>
                <span className={classes.textButton}>En su lugar de trabajo</span>
            </div>
            {buttonOver && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div  className={spaceStyle.space1} />
        <div className={comunClass.alignBtnSiniesterRight}>
          <Button className={classes.button} variant="contained" disabled={true} style={{border: 0}} >
            <div><img alt="Accidente de Trayecto" src="./static/trayectoCard.png" className={classes.imgButton}/></div>
            <div>Accidente de trayecto <br/>
              <span className={classes.textButton}>Entre el trabajo y su hogar</span>
            </div>
          </Button>
        </div>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button  className={classes.button} variant="contained" disabled={true} style={{border: 0}} >
                <div><img alt="Enfermedad Profesional" src="./static/epCard.png" className={classes.imgButton} /></div>
                <div>Enfermedad Profesional <br/>
                    <span className={classes.textButton}>A causa del ejercicio profesional</span>
                </div>
            </Button>
        </div>  
        <div  className={spaceStyle.space1} />
        <div className={comunClass.alignBtnSiniesterRight}>
          <Button  className={classes.button} variant="contained" disabled={true} style={{border: 0}}>
            <div><img alt="Licencia Rechazada" src="./static/licenciaCard.png" className={classes.imgButton} /></div>
            <div>Licencia Rechazada <br/>
              <span className={classes.textButton}>Por Isapre o Fonasa</span>
            </div>
          </Button>
        </div> 
      </div>
    </div>
    <div className={comunClass.displayDesk}>
      <div className={spaceStyle.space2} />
    </div>
  </div>
  );
}

const mapStateToProps = ({ addmissionForm,  microsoftReducer}) => {
  return {
    addmissionForm : addmissionForm,
    microsoftReducer: microsoftReducer
  }
}
export default connect(mapStateToProps)(Identification);
