import React, { useState, useEffect } from "react"
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";
import Header from "../../components/header/index";
import Cabecera from "../../components/cabecera/index";
import { getComunStyle } from "../../css/comun";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { getSpaceStyle } from "../../css/spaceStyle";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import specialBlue from "./../../util/color/specialBlue";
import { Format } from "../../helpers/strings";
import { InputAdornment } from "@material-ui/core";
import { IconButton } from "material-ui";
import ClearIcon from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const TipoAvisoResponsable = () => {
    const comunClass = getComunStyle();
    const spaceStyle = getSpaceStyle();
    const dispatch = useDispatch();
    const {  addmissionForm, addmissionForm:{ CamposDocumentos },  microsoftReducer } = useSelector((state) => state, shallowEqual);

    const [check,setCheck] = useState(addmissionForm.TipoAvisoResponsable? addmissionForm.TipoAvisoResponsable : { id:1,description:"Presencial" })

    const BlueRadio = withStyles({
        root: {
          color: specialBlue,
          '&$checked': {
            color: specialBlue[600],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

 
      useEffect(()=>{
        console.log(check)
      },[check])
      

    return (
        <div className={comunClass.root}>
            <div className={comunClass.displayDesk}> 
                <Header
                    userMsal={ microsoftReducer.userMsal }
                />
            </div>
            <div className={comunClass.beginContainerDesk}>
                <Cabecera
                    dispatch={() => dispatch(handleSetStep(17))}
                    percentage={addmissionForm.percentage}
                />
            </div>                
           
            <div className={comunClass.titlePrimaryDesk}>
                <Grid className={[comunClass.titleBlack, comunClass.textPrimaryDesk]}>
                ¿Cómo dió  
                    <Grid component="span"  className={[comunClass.titleBlue, comunClass.titleBlue2]}>
                        &nbsp;aviso del accidente?
                    </Grid>          
                </Grid>
            </div>

            <div className={comunClass.boxDesk}>
                <div className={comunClass.bottomElement} style={{position:'inherit'}}>
                    <div className={comunClass.displayMobile}>
                        <div className={spaceStyle.spaceMin1} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{width: "400px"}}>

                           <div className={check.id === 1 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                                <div className={comunClass.containerOpction}>
                                    <BlueRadio
                                        checked={check.id === 1}
                                         onChange={()=>setCheck({ id:1, description: "Presencial" })}
                                        value={check.id}
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'C' }}
                                    />
                                    <p className={comunClass.txtRadios}>Presencial</p>
                                </div>
                            </div>

 
                            <div className={spaceStyle.spaceMin1} />

                            <div className={check.id === 2 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                                    <div className={comunClass.containerOpction}>
                                        <BlueRadio
                                            checked={check.id === 2}
                                            onChange={()=>{setCheck({ id:2, description: "E-mail" })}}
                                            value={check.id}
                                            name="radio-button-demo"
                                            inputProps={{ 'aria-label': 'C' }}
                                        />
                                        <p className={comunClass.txtRadios}>E-mail</p>
                                    </div>
                            </div>
 
                            <div className={spaceStyle.spaceMin1} />

                            <div className={check.id === 3 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                                    <div className={comunClass.containerOpction}>
                                        <BlueRadio
                                            checked={check.id === 3}
                                            onChange={()=>{setCheck({ id:3, description: "Llamada telefónica" })}}
                                            value={check.id}
                                            name="radio-button-demo"
                                            inputProps={{ 'aria-label': 'C' }}
                                        />
                                        <p className={comunClass.txtRadios}>Llamada telefónica</p>
                                    </div>
                            </div>
                            
                            <div className={spaceStyle.spaceMin1} />

                            <div className={check.id === 4 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                                    <div className={comunClass.containerOpction}>
                                        <BlueRadio
                                            checked={check.id === 4}
                                            onChange={()=>{setCheck({ id:4, description: "Whatsapp" })}}
                                            value={check.id}
                                            name="radio-button-demo"
                                            inputProps={{ 'aria-label': 'C' }}
                                        />
                                        <p className={comunClass.txtRadios}>Whatsapp</p>
                                    </div>
                            </div>

                            <div className={spaceStyle.spaceMin1} />

                            <div className={check.id === 5 ? comunClass.roundedBlue : comunClass.roundedNormal}>
                                    <div>
                                        <div className={comunClass.containerOpction}>
                                            <BlueRadio
                                                checked={check.id === 5}
                                                onChange={()=>{setCheck({ id:5, description: "Otro", especificacion: "" })}}
                                                value={check.id}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'C' }}
                                            />
                                            <p className={comunClass.txtRadios}>Otro</p>
                                        </div>

                                        <div 
                                            style={{
                                                paddingLeft: "30px",
                                                paddingRight: "30px",
                                                paddingBottom: "30px"                                            
                                            }}
                                        >
                                            <TextField
                                                onClick={()=>{setCheck({ id:5, description: "Otro", especificacion: "" })}}
                                                focused={check.id === 5?true:false}
                                                id="especificacion"
                                                value={check.especificacion?check.especificacion:""}
                                                onChange={(e) =>  setCheck({ id:5, description: "Otro", especificacion: Format.caracteresInvalidos(e.target.value) }) }
                                                margin="dense"
                                                variant="outlined"
                                                fullWidth
                                                autoComplete="off"
                                                type="text"
                                                style={{ background: "#ffff"}}
                                                inputProps={{ maxLength: 200, minLength: 5 }}
                                                InputProps={{
                                                    endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        onClick={() => {
                                                            setCheck({ id:5, description: "Otro", especificacion: "" })
                                                        }}
                                                        >
                                                        <ClearIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </div>
                            </div>

                            <div className={comunClass.bottomElement}>
                                <Button
                                    variant="contained"
                                    className={comunClass.buttonAchs}
                                    disabled={(!check.id || (check.id===5 && !check.especificacion))}
                                    onClick={() => {

                                        switch (check.id) {
                                            case 1:
                                                CamposDocumentos.avisoPresen="x"  
                                                CamposDocumentos.avisoMail=""  
                                                CamposDocumentos.avisoFono=""  
                                                CamposDocumentos.avisoOtro=""  
                                                CamposDocumentos.avisoCual=""  
                                                break;
                                            case 2:
                                                CamposDocumentos.avisoPresen=""  
                                                CamposDocumentos.avisoMail="x"  
                                                CamposDocumentos.avisoFono=""  
                                                CamposDocumentos.avisoOtro=""  
                                                CamposDocumentos.avisoCual=""  
                                                break;
                                            case 3:
                                                CamposDocumentos.avisoPresen=""  
                                                CamposDocumentos.avisoMail=""  
                                                CamposDocumentos.avisoFono="x"  
                                                CamposDocumentos.avisoOtro=""  
                                                CamposDocumentos.avisoCual=""  
                                                break;
                                            case 4:
                                                CamposDocumentos.avisoPresen=""  
                                                CamposDocumentos.avisoMail=""  
                                                CamposDocumentos.avisoFono=""  
                                                CamposDocumentos.avisoOtro="x"  
                                                CamposDocumentos.avisoCual=check.description  
                                                break;
                                            case 5:
                                                CamposDocumentos.avisoPresen=""  
                                                CamposDocumentos.avisoMail=""  
                                                CamposDocumentos.avisoFono=""  
                                                CamposDocumentos.avisoOtro="x"  
                                                CamposDocumentos.avisoCual=check.especificacion  
                                                break;
                                        
                                            default:
                                                break;
                                        }

                                        dispatch(updateForm("TipoAvisoResponsable", CamposDocumentos));
                                        dispatch(handleSetStep(17.1));
                                    }}
                                >
                                    Continuar
                                </Button>
                            </div>
                             
                        </div>
                    </div>
            
            
                </div>
            </div>

      </div>
    )
}

export default TipoAvisoResponsable