import React from 'react'
import {Typography,TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

const DireccionGeo = (props) => {

    const { direccion,setUrl,setDireccion} = props
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const loading = open && options?.length === 0

    const googleMapsAutoComplete = async(newInputValue) =>{
        sleep(5)  
        const test = await fetch(`https://wa-desa-msorquestador.azurewebsites.net/api/geo/autocompletarDirecciones?direccion=${newInputValue}`)
        const json = await test.json()
        let predictions = (Array.isArray(json.content[0].predictions)) ? json.content[0].predictions : []
        setOptions(predictions) 
      }
      const googleMapsGetMap = async(newValue) => {
        let urlMapa = `https://wa-desa-msorquestador.azurewebsites.net/api/geo/getMapaEstatico?id=${newValue?.place_id}&size=300x280`
        setUrl(urlMapa)
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
                getOptionSelected={(option, value) => option.description === value.name}
                getOptionLabel={(option) => option.description}
                options={options}
                loading={loading}
                onInputChange={(event,newInputValue) => {
                    googleMapsAutoComplete(newInputValue)
                }}
                onChange={(event, newValue) => {
                    setDireccion(newValue);
                    googleMapsGetMap(newValue)
                }}

                renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                )}
                />
            </div>
    );
}
export default DireccionGeo;