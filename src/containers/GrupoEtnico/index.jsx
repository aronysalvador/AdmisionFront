import React, { useState } from "react";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Cabecera from "../../components/cabecera/index";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getSpaceStyle } from "../../css/spaceStyle";
import { getComunStyle } from "../../css/comun";
import Header from "../../components/header/index";
import image from './../../img/identify.svg'

const GrupoEtnico = () => {
  const {
    addmissionForm: { percentage,  creacionBP,  grupoEtnico },microsoftReducer
  } = useSelector((state) => state, shallowEqual)


  const [grupo, setGrupo] = useState(() => {
    return !grupoEtnico ? {id: 0, descripcion: "NINGUNA"} : grupoEtnico; // CAMBIAR VALOR POR DEFECTO NINGUNO
  });
  const { data: grupoList } = useSelector((state) => state.grupoForm, shallowEqual);


  const dispatch = useDispatch()

  const comunClass = getComunStyle()
  const spaceStyle = getSpaceStyle()

  return (
    <div className={comunClass.root}>
      <div className={comunClass.displayDesk}> 
        <Header userMsal={ microsoftReducer.userMsal }/>
      </div>
      <div className={comunClass.beginContainerDesk}>
        <Cabecera
          id={"GrupoEtnico-BtnBack"}
          dispatch={() => ( creacionBP ? dispatch(handleSetStep(5.4)) : dispatch(handleSetStep(5.1)))}
          percentage={percentage}
        />
      </div>
      <div className={comunClass.titlePrimaryDesk}>
        <Grid className={[comunClass.titleBlack, comunClass.titleBlack2, comunClass.textPrimaryDesk]}>
          Ingresa
          <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
            &nbsp;el grupo étnico del paciente
          </Grid>                  
        </Grid>
        <div className={comunClass.displayDeskImg}>
          <Grid component="span" className={comunClass.imgPrimaryDesk}>
            <img alt="identify" src={image} className={comunClass.imgPrimaryWidth} />
          </Grid>
        </div>
      </div>
      <div className={comunClass.boxDesk}>
        <div className={comunClass.displayMobile}> 
          <div className={spaceStyle.space2} />
        </div>
        <div className={comunClass.containerTextBox}>

          <AutoComplete
            value={grupo}
            onChange={(event, value) => {
              setGrupo(value);
            }}
            // style={{ width: 300 }}
            options={grupoList}
  
            getOptionLabel={(option) => option.descripcion}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                helperText="Ejemplo: Mapuche, Rapa Nui" 
                InputProps={{
                  ...params.InputProps,
                  style: {
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    paddingLeft: "5xp",
                    marginTop: "7px",
                  },
                }}
              />
            )}
          />
        </div>

        <div className={comunClass.bottomElement}>
          <Button
            id={"GrupoEtnico-Btn1"}
            className={comunClass.buttonAchs}
            variant="contained"
            disabled={!grupo}
            onClick={() => {
              dispatch(updateForm("grupoEtnico", grupo))
              dispatch(handleSetStep(5.1))

            }}
          >
            Guardar
          </Button>
        </div>
      </div>
      <div className={comunClass.displayDesk}>
        <div className={spaceStyle.space2} />
      </div>
    </div>
  )
}
export default GrupoEtnico