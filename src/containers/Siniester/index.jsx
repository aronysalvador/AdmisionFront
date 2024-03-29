import { useState } from 'react';
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
import Grid from '@material-ui/core/Grid';
import {siniestroStyle} from '../../css/siniestroStyle'
import Button from "@material-ui/core/Button"
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import Cabecera from '../../components/cabecera/index'
import Header from "../../components/header/index";
import identify from './../../img/identify.svg'
import trabajoimg from './../../img/trabajo.svg'
import trabajoActive from './../../img/trabajo-active.svg'
import checks from './../../img/check.svg'
import trayectoimg from './../../img/trayecto.svg'
import trayectoActive from './../../img/trayecto-active.svg'
import enfermedad from './../../img/enfermedad-profesional.svg'
import enfermedadActive from './../../img/enfermedad-profesional-active.svg'
import licenciaCard from './../../img/licenciaCard.png'

const Siniester = (props) => {
  const { dispatch, addmissionForm, addmissionForm: { tipoSiniestro }, microsoftReducer } = props
  const classes = siniestroStyle()
  const comunClass = getComunStyle()
  const spaceStyle = getSpaceStyle()
  const [ buttonOverTrabajo, setButtonOverTrabajo ] = useState(tipoSiniestro.Id===1)
  const [ buttonOverTrayecto, setButtonOverTrayecto ] = useState(tipoSiniestro.Id===2)
  const [ buttonOverEP, setButtonOverEP ] = useState(tipoSiniestro.Id===3)

  const handlenext = (data) => {
    dispatch(updateForm("tipoSiniestro", data));
    if (data.Id === 2) { // Accidente de Trayecto
      dispatch(updateForm("AccidenteEnSucursal", "no"))
    }
    dispatch(handleSetStep(3));
  }

  return (<div className={comunClass.root}>
    <div className={comunClass.displayDesk}>
      <Header userMsal={ microsoftReducer.userMsal } />
    </div>
    <div className={comunClass.beginContainerDesk}>
      <Cabecera id={"Siniester-BtnBack"} dispatch={() => dispatch(handleSetStep(1))} percentage={addmissionForm.percentage}
color={'#373737 !important'}
      />
    </div>

    <div className={comunClass.displayDesk}>
      <div className={ comunClass.titlePrimaryDesk }>
        <Grid component='span' className={[ comunClass.textPrimaryDesk, comunClass.titleBlack ]}>
          Empecemos completando algunos datos
        </Grid>
        <Grid component='span' className={comunClass.imgPrimaryDesk}>
          <img alt='identify' src={identify} className={comunClass.imgPrimaryWidth} />
        </Grid>
      </div>
    </div>
    <div className={comunClass.boxDesk}>
      <div>
        <Grid className={[ comunClass.titleBlack, comunClass.subtitleBlack ]}>
          Selecciona la opción que
          <Grid component='span' className={comunClass.titleBlue}>
            &nbsp;mejor describa lo que le sucedió
          </Grid>
        </Grid>
      </div>
      <div className={spaceStyle.space2} />
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button id={"Siniester-Btn1"} className={classes.button} variant='contained'
onClick={() => {
              handlenext({ Id: 1, Descripcion: "Accidente Trabajo" })
            }}
            onMouseOver={() => { setButtonOverTrabajo(true) }}
            onMouseOut={() => { setButtonOverTrabajo(false) }}
          >
            <img alt='Accidente de Trabajo' src={!buttonOverTrabajo ? trabajoimg : trabajoActive} className={classes.imgButton} />
            <div>Accidente de Trabajo <br />
              <span className={classes.textButton}>En su lugar de trabajo</span>
            </div>
            {buttonOverTrabajo && <img src={checks} alt='check' style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div className={spaceStyle.space1} />
        <div className={comunClass.alignBtnSiniesterRight}>
          <Button id={"Siniester-Btn2"} className={classes.button} variant='contained'
onClick={() => {
              handlenext({ Id: 2, Descripcion: "Accidente Trayecto" })
            }}
            onMouseOver={() => { setButtonOverTrayecto(true) }}
            onMouseOut={() => { setButtonOverTrayecto(false) }}
          >
            <img alt='Accidente de Trayecto' src={!buttonOverTrayecto ? trayectoimg : trayectoActive } className={classes.imgButton} />
            <div>Accidente de Trayecto <br />
              <span className={classes.textButton}>Entre el trabajo y su hogar</span>
            </div>
            {buttonOverTrayecto && <img src={checks} alt='check' style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div className={spaceStyle.space1} />
      </div>
      <div className={comunClass.displayOnlyDeskInline}>
        <div className={comunClass.alignBtnSiniesterLeft}>
          <Button id={"Siniester-Btn3"} className={classes.button} variant='contained'
onClick={() => {
              handlenext({ Id: 3, Descripcion: "Enfermedad Profesional" })
            }}
            onMouseOver={() => { setButtonOverEP(true) }}
            onMouseOut={() => { setButtonOverEP(false) }}
          >
            <img alt='Enfermedad Profesional' src={!buttonOverEP ? enfermedad : enfermedadActive} className={classes.imgButton}
style={{marginRight: '10px'}}
            />
            <div>Enfermedad Profesional <br />
              <span className={classes.textButton}>A causa del ejercicio profesional</span>
            </div>
            {buttonOverEP && <img src={checks} alt='check' style={{position: "absolute", top: "3px", right: "3px"}} /> }
          </Button>
        </div>
        <div className={spaceStyle.space1} />
        <div className={comunClass.alignBtnSiniesterRight}>
          <Button id={"Siniester-Btn4"} className={classes.button} variant='contained'
disabled style={{border: 0}}
          >
            <div><img alt='Licencia Rechazada' src={licenciaCard} className={classes.imgButton} /></div>
            <div>Licencia Rechazada <br />
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

const mapStateToProps = ({ addmissionForm, microsoftReducer}) => {
  return {
    addmissionForm,
    microsoftReducer
  }
}
export default connect(mapStateToProps)(Siniester);
