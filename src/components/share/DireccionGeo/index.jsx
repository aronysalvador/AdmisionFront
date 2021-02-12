import React from 'react'
import {TextField} from "@material-ui/core"
import AutoComplete from '@material-ui/lab/Autocomplete'
import { getComunStyle } from "./../../../css/comun"
import { useDispatch } from "react-redux"
import { updateForm } from "../../../redux/actions/AdmissionAction"
import image from './../../../img/location.png'
import { withStyles } from "@material-ui/core/styles";


function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

  const NoPaddingAutocomplete = withStyles(  
    {
      inputRoot: {
        '&&[class*="MuiOutlinedInput-root"] $input': {
          padding: "3px 3px 3px 10px",
        },
        '&& .MuiOutlinedInput-notchedOutline': {
          top: "-2px",
          borderRadius: "0.7em"
        }
      },
      input: {}
    }
  )(AutoComplete);

const DireccionGeo = (props) => {

    const dispatch = useDispatch()
    const comunStyle = getComunStyle();
    const { id, direccion, setMapa, setDireccion, clearData, showDinamicMap, direccionTemporal, background, small, noFijarOption } = props

    const [open, setOpen] = React.useState(false)

    const DinamycOption = { description: 'Fijar en el mapa' }
    const [loading, setLoading] = React.useState(false)
    const [options, setOptions] = React.useState([DinamycOption])

    React.useEffect(()=>{
      if(direccionTemporal){
        setearDirection(direccionTemporal)
      }
     // eslint-disable-next-line
    },[])

    const setearDirection = async(direccion) => {
      setLoading(true)

      const test = await fetch(`${window.REACT_APP_GEO_AUTOCOMPLETE}?direccion=${direccion}`)
      const json = await test.json()    
      var predictions = (Array.isArray(json.content[0].predictions)) ? json.content[0].predictions : []  
      predictions[predictions.length]=DinamycOption  

      if(predictions.length>1){
        setDireccion(predictions[0]);
        googleMapsGetMap(predictions[0])
      }
      setLoading(false)
    }
    
    const googleMapsAutoComplete = async(newInputValue) =>{
      sleep(5)  
      if(newInputValue){
          const test = await fetch(`${window.REACT_APP_GEO_AUTOCOMPLETE}?direccion=${newInputValue}`)
          const json = await test.json()      
          var predictions = (Array.isArray(json.content[0].predictions)) ? json.content[0].predictions : []  
          predictions[predictions.length]=DinamycOption        
          setOptions(predictions)
      }else{
        setOptions([DinamycOption])
      }
    }
    const googleMapsGetMap = async(newValue) => {
      if(newValue){
        let urlMapa = `${window.REACT_APP_GEO_STATICMAP}?id=${newValue?.place_id}&size=300x280`
        setMapa(urlMapa)
      }
    }

    const handleDinamic = async() => {
      if(direccion){
        dispatch(updateForm("DireccionTemporal", direccion))
        const test = await fetch(`${window.REACT_APP_GEO_LATLNG}?id=${direccion.place_id}`)
        const json = await test.json()      
        if(Array.isArray(json.content)){
            dispatch(updateForm("LatTemporal", json.content[0].result.geometry.location.lat))
            dispatch(updateForm("LongTemporal", json.content[0].result.geometry.location.lng))
        }
      }else{
        dispatch(updateForm("DireccionTemporal", {}))
        dispatch(updateForm("LatTemporal", ""))
        dispatch(updateForm("LongTemporal", ""))
      }
      showDinamicMap()
    }

    return (    
      !loading && (
            <div>
              {small ? (
                <NoPaddingAutocomplete
                  id={id}
                  value={direccion}
                  filterOptions={(options) => options}
                  style={background ? { width: '100%', background, borderRadius: "4px" } : { width: '100%', borderRadius: "4px"  }}
                  open={open}
                  onOpen={() => { setOpen(true) }}
                  onClose={() => { setOpen(false) }}
                  size="small"
                  fullWidth
                  getOptionSelected= {(
                    option,
                    value,
                  ) => value.value === option.value}
                  getOptionLabel={(option) => option ? option.description : ""}
                  options={options}
                  noOptionsText='Ingresa una dirección'
                  onInputChange={(event,newInputValue) => {
                    googleMapsAutoComplete(newInputValue)
                  }}
                  onChange={(event, newValue) => {    
                    if(!newValue){
                      setDireccion("")
                      setMapa("")
                      clearData()
                      setOptions([DinamycOption])
                    }else{
                      if(newValue.description==='Fijar en el mapa'){    
                        handleDinamic()
                      }else{
                        setDireccion(newValue);
                        googleMapsGetMap(newValue)
                      }     
                    }                                 
                  }}
                  renderInput={(params) => {
                    return(
                      <TextField {...params} style={{color:'red'}} variant="outlined" />
                  )}}
                  renderOption={(option) => {   
                    if(option.description==='Fijar en el mapa'){  
                      if(!noFijarOption){                   
                        return(
                          <div className={comunStyle.txtGreen}  >
                            <img alt="Location" src={image} className={comunStyle.iconLocation} />
                            <span style={{marginLeft:"5px", marginBottom:"0 !important"}}>{option.description}</span>
                          </div>
                        )
                      }
                    }else{
                      return(
                        <div>
                          <span style={{marginLeft:"5px", marginBottom:"0 !important"}}>{option.description}</span>
                        </div>
                        
                      )
                    }                    
                  }}
                />
                ): (
                  <AutoComplete
                  id={id}
                  value={direccion}
                  filterOptions={(options) => options}
                  style={background ? { width: '100%', background, borderRadius: "0.7em" } : { width: '100%', borderRadius: "0.7em"  }}
                  open={open}
                  onOpen={() => { setOpen(true) }}
                  onClose={() => { setOpen(false) }}
                  size="small"
                  fullWidth
                  getOptionSelected= {(
                    option,
                    value,
                  ) => value.value === option.value}
                  getOptionLabel={(option) => option ? option.description : ""}
                  options={options}
                  noOptionsText='Ingresa una dirección'
                  onInputChange={(event,newInputValue) => {
                    googleMapsAutoComplete(newInputValue)
                  }}
                  onChange={(event, newValue) => {    
                    if(!newValue){
                      setDireccion("")
                      setMapa("")
                      clearData()
                      setOptions([DinamycOption])
                    }else{
                      if(newValue.description==='Fijar en el mapa'){    
                        handleDinamic()
                      }else{
                        setDireccion(newValue);
                        googleMapsGetMap(newValue)
                      }     
                    }                                 
                  }}
                  renderInput={(params) => {
                    return(
                      <TextField {...params} style={{color:'red'}} variant="outlined" />
                  )}}
                  renderOption={(option) => {  
                    if(option.description==='Fijar en el mapa'){                        
                      if(!noFijarOption){                   
                        return(
                          <div className={comunStyle.txtGreen} id={id+"-Fijar"} >
                            <img alt="Location" src={image} className={comunStyle.iconLocation} />
                            <span style={{marginLeft:"5px", marginBottom:"0 !important"}}>{option.description}</span>
                          </div>
                        )
                      }
                    }else{
                      return(
                        <div>
                          <span style={{marginLeft:"5px", marginBottom:"0 !important"}}>{option.description}</span>
                        </div>
                      )
                    }                
                  }}
                />
                )}
            </div>
      )
    );
}
export default DireccionGeo;