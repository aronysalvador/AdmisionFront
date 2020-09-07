import React from 'react'
import {Typography,TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getComunStyle } from "./../../../css/comun"
import { useDispatch } from "react-redux"
import { updateForm } from "../../../redux/actions/AdmissionAction"

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

const DireccionGeo = (props) => {
    const dispatch = useDispatch()
    const comunStyle = getComunStyle();
    const { direccion, setMapa, setDireccion, clearData, showDinamicMap } = props
    const [open, setOpen] = React.useState(false)

    const DinamycOption = { description: 'Fijar en el mapa' }
    const [options, setOptions] = React.useState([DinamycOption])
    
    const googleMapsAutoComplete = async(newInputValue) =>{
      sleep(5)  
      if(newInputValue){
          const test = await fetch(`${process.env.REACT_APP_GEO_AUTOCOMPLETE}?direccion=${newInputValue}`)
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
        let urlMapa = `${process.env.REACT_APP_GEO_STATICMAP}?id=${newValue?.place_id}&size=300x280`
        setMapa(urlMapa)
      }
    }

    const handleDinamic = async() => {
      
      if(direccion){
        dispatch(updateForm("DireccionTemporal", direccion))

        // const test = await fetch(`http://localhost:8080/api/googleMaps/getLatLng?id=${direccion.place_id}`)
        const test = await fetch(`${process.env.CREACT_APP_GEO_LATLNG}?id=${direccion.place_id}`)
        const json = await test.json()      
        if(Array.isArray(json.content)){
            console.log(json.content[0].result.geometry.location)
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
   


    return (<div>
                <Autocomplete
                  value={direccion}
                  filterOptions={(options) => options}
                  style={{ width: '100%' }}
                  open={open}
                  onOpen={() => {
                      setOpen(true)
                  }}
                  onClose={() => {
                      setOpen(false)
                  }}
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
                      return(
                        <Typography className={comunStyle.txtGreen} variant="subtitle2">
                          <img alt="Location" src="static/location.png" className={comunStyle.iconLocation} />
                          {option.description}
                        </Typography>
                      )
                    }else{
                      return(
                        <Typography variant="subtitle2">
                          {option.description}
                        </Typography>
                      )
                    }                    
                  }}
                />
            </div>
    );
}
export default DireccionGeo;