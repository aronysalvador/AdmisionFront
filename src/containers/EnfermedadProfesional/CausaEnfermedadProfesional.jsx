import React from 'react';
// import React, { useState } from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { getComunStyle } from "../../css/comun";
// import { getSpaceStyle } from "../../css/spaceStyle";
// import Cabecera from "../../components/cabecera/index";
// import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
// import TextField from "@material-ui/core/TextField";
// import Grid from '@material-ui/core/Grid';

// //Action de Redux
// import { sendCargo } from "../../redux/actions/AdmissionAction";
// import { InputAdornment } from "@material-ui/core";
// import { IconButton } from "material-ui";
// import ClearIcon from "@material-ui/icons/Clear";
// import Header from "../../components/header/index";
// import { Format } from "../../helpers/strings";
// import InputMasked from "../EditarTelefono/InputMasked";
// import Mask from "../EditarTelefono/phone";
// import { Pipes } from "../EditarTelefono/phone";

const CausaEnfermedadProfesional = () => {
  // const {
  //   addmissionForm: { testigos, percentage, tipoSiniestro, step, CamposDocumentos },
  // } = useSelector((state) => state, shallowEqual);
  // const { microsoftReducer } = useSelector((state) => state, shallowEqual);
  // const dispatch = useDispatch();

  // const comunClass = getComunStyle();
  // const spaceStyle = getSpaceStyle();


  return (
  <div></div>
    // <div className={comunClass.root}>
    //    <div className={comunClass.displayDesk}> 
    //     <Header userMsal={ microsoftReducer.userMsal }/>
    //   </div>
    //   <div className={comunClass.beginContainerDesk}>
    //     <Cabecera
    //       dispatch={() => dispatch(handleSetStep(13))}
    //       percentage={percentage}
    //     />
    //   </div>
    //   <div className={comunClass.titlePrimaryDesk}>
    //     <Grid  className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
    //       Indícanos la causa de la
    //       <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
    //       &nbsp;enfermedad profesional
    //       </Grid>                    
    //     </Grid>
    //     <div className={comunClass.displayDeskImg}>
    //       <Grid component="span" className={comunClass.imgPrimaryDesk}>
    //         <img alt="identify" src="static/relato.svg" className={comunClass.imgPrimaryWidth} />
    //       </Grid>
    //     </div>
    //   </div>
    //   <div className={comunClass.boxDesk}>
    //     <div className={comunClass.displayMobile}>
    //       <div className={spaceStyle.space2} />
    //     </div>
    //     <div className={comunClass.containerTextBox}>
    //       <div>
    //         <Typography className={comunClass.tituloTextBox}>
    //           Describe las molestias y síntomas
    //         </Typography>
    //       </div>
    //       <div>
    //         <TextField
    //           id="nombre"
    //           value={nombre}
    //           onChange={(e) => saveMolestia(Format.caracteresInvalidos(e.target.value))}
    //           helperText="Ejemplo: Luis Morales"
    //           margin="dense"
    //           variant="outlined"
    //           autoComplete="off"
    //           type="text"
    //           fullWidth
    //           InputProps={{
    //             endAdornment: (
    //               <InputAdornment position="end">
    //                 <IconButton onClick={() => { saveNombre("") }}>
    //                   <ClearIcon />
    //                 </IconButton>
    //               </InputAdornment>
    //             ),
    //           }}
    //         />
    //       </div>
    //       <div className={spaceStyle.space1} />
    //       <div>
    //         <Typography className={comunClass.tituloTextBox}>
    //           Parte del cuerpo afectada
    //         </Typography>
    //       </div>
    //     </div>
    //     <div className={comunClass.bottomElement}>
    //       <Button
    //         className={comunClass.buttonAchs}
    //         variant="contained"
    //         type="submit"
    //         disabled={!nombre || !cargos}
    //         onClick={() => clickNext()}
    //       >
    //         Continuar
    //       </Button>
    //     </div>
    //   </div>
    //   <div className={comunClass.displayDesk}>
    //     <div className={spaceStyle.space2} />
    //   </div> 
    // </div>
  );
};

export default CausaEnfermedadProfesional;