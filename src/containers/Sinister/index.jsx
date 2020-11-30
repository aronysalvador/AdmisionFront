import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
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
  const [buttonOverTrabajo, setButtonOverTrabajo] = useState(false)
  const [buttonOverTrayecto, setButtonOverTrayecto] = useState(false)
  const [buttonOverEP, setButtonOverEP] = useState(false)

  return (<div className={comunClass.root}>
    <div className={comunClass.displayDesk}> 
      <Header userMsal={ microsoftReducer.userMsal }/>
    </div>
    <div className={comunClass.beginContainerDesk}>
      <Cabecera dispatch={() => dispatch(handleSetStep(1.1))} percentage={addmissionForm.percentage} color={'#373737 !important'} />
    </div>
    
    <div className={comunClass.displayDesk}>
      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component="span" className={[comunClass.textPrimaryDesk, comunClass.titleBlack]}>
          Empecemos completando algunos datos 
        </Grid>
        <Grid component="span" className={comunClass.imgPrimaryDesk}>
          <img alt="identify" src="static/identify.svg" className={comunClass.imgPrimaryWidth} />
        </Grid>
      </div>
    </div>
    <div className={comunClass.boxDesk}>
      <div>
        <Grid className={[comunClass.titleBlack, comunClass.subtitleBlack]}>
          Selecciona la opción que 
          <Grid component="span"  className={comunClass.titleBlue}>
            &nbsp;mejor describa lo que le sucedió
          </Grid>
        </Grid>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button className={classes.button} variant="contained" onClick={()=>{ 
            var tipo = { Id:1, Descripcion: "Accidente Trabajo" }
            dispatch(updateForm("tipoSiniestro", tipo));
            dispatch(handleSetStep(3));   
            }}
            onMouseOver={() =>{ setButtonOverTrabajo(true) }}
            onMouseOut={() =>{ setButtonOverTrabajo(false) }}
          >
            <img alt="Accidente de Trabajo" src={!buttonOverTrabajo ? "./static/trabajo.svg" : "./static/trabajo-active.svg"} className={classes.imgButton} />
            <div>Accidente de trabajo <br/>
              <span className={classes.textButton}>En su lugar de trabajo</span>
            </div>
            {buttonOverTrabajo && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div  className={spaceStyle.space1} />
        <div className={comunClass.alignBtnSiniesterRight}>
          <Button className={classes.button} variant="contained" onClick={()=>{ 
            var tipo = { Id:2, Descripcion: "Accidente Trayecto" }
            dispatch(updateForm("tipoSiniestro", tipo));
            dispatch(handleSetStep(3));   
            }}
            onMouseOver={() =>{ setButtonOverTrayecto(true) }}
            onMouseOut={() =>{ setButtonOverTrayecto(false) }}
          >
            <img alt="Accidente de Trayecto" src={!buttonOverTrayecto ? "./static/trayecto.svg" : "./static/trayecto-active.svg"} className={classes.imgButton} />
            <div>Accidente de Trayecto <br/>
              <span className={classes.textButton}>Entre el trabajo y su hogar</span>
            </div>
            {buttonOverTrayecto && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button className={classes.button} variant="contained" onClick={()=>{ 
            var tipo = { Id:3, Descripcion: "Enfermedad Profesional" }
            dispatch(updateForm("tipoSiniestro", tipo));
            dispatch(handleSetStep(3));   
            }}
            onMouseOver={() =>{ setButtonOverEP(true) }}
            onMouseOut={() =>{ setButtonOverEP(false) }}
          >
            <img alt="Enfermedad Profesional" src={!buttonOverEP ? "./static/enfermedad-profesional.svg" : "./static/enfermedad-profesional-active.svg"} className={classes.imgButton} style={{marginRight: '10px'}} />
            <div>Enfermedad Profesional <br/>
              <span className={classes.textButton}>A causa del ejercicio profesional</span>
            </div>
            {buttonOverEP && <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} /> }
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
