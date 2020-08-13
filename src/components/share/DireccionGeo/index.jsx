import React from 'react'
import {Typography,TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getComunStyle } from "./../../../css/comun"

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

const DireccionGeo = (props) => {
    const comunStyle = getComunStyle();
    const { direccion, setMapa, setDireccion, clearData, showDinamicMap } = props
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([{
      description: 'Fijar en el mapa',
    }])
    // const loading = open && options?.length === 0

    React.useEffect(()=>{
      console.log("cambio opciones")
      console.log(options)
    },[options])

    const googleMapsAutoComplete = async(newInputValue) =>{
      sleep(5)  
      if(newInputValue){
          const test = await fetch(`https://wa-desa-msorquestador.azurewebsites.net/api/geo/autocompletarDirecciones?direccion=${newInputValue}`)
          const json = await test.json()      
          var predictions = (Array.isArray(json.content[0].predictions)) ? json.content[0].predictions : []

          predictions.push({
            description: 'Fijar en el mapa',
          })           

          // console.log(predictions)

          setOptions(predictions) 
      }else{
        setOptions([])
      }
    }
    const googleMapsGetMap = async(newValue) => {
      if(newValue){
        let urlMapa = `https://wa-desa-msorquestador.azurewebsites.net/api/geo/getMapaEstatico?id=${newValue?.place_id}&size=300x280`
        setMapa(urlMapa)
      }
    }
   
    return (<div>
                <Autocomplete
                  value={direccion}
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
                  // getOptionSelected={(option, value) => option ? option.description === value.name : ''}
                  getOptionLabel={(option) => option ? option.description : ''}
                  options={options}
                  // loading={loading}
                  // loadingText={'Ingresa una dirección'}
                  noOptionsText='Ingresa una dirección'
                  onInputChange={(event,newInputValue) => {
                      googleMapsAutoComplete(newInputValue)
                  }}
                  onChange={(event, newValue) => {    
                    if(!newValue){
                      setDireccion("")
                      setMapa("")
                      clearData()
                      setOptions([{
                        description: 'Fijar en el mapa',
                      }])
                    }else{
                      if(newValue.description==='Fijar en el mapa'){
                        showDinamicMap()
                      }else{
                        console.log(newValue)
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