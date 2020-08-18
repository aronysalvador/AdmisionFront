import React from 'react'
import {Typography,TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
}

const RazonSocialAutoComplete = (props) => {
    const { company, setDireccion, clearData } = props
    const [open, setOpen] = React.useState(false)
    
    const [options, setOptions] = React.useState([])

    React.useEffect(()=>{
    },[options])

    const getData = async(newInputValue) =>{ 
      if(newInputValue){
          const test = await fetch(process.env.REACT_APP_RAZONSOCIAL+ newInputValue)
          const json = await test.json()
          var predictions = (Array.isArray(json.content?.response)) ? json.content.response : []           
          setOptions(predictions) 
      }else{
        setOptions([])
      }
    }
   
    return (<div>
                <Autocomplete
                  value={company}
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
                  getOptionLabel={(option) => option ? option.name : ''}
                  options={options}
                  noOptionsText='Ingresa una razón social'
                  onInputChange={(event,newInputValue) => {
                    getData(newInputValue)
                  }}
                  renderInput={(params) => {
                    return(
                      <TextField {...params} style={{color:'red'}} variant="outlined" />
                  )}}
                  renderOption={(option) => {   
                      return(
                        <Typography variant="subtitle2">
                          {option.name}
                        </Typography>
                      )                   
                  }}
                />
            </div>
    );
}
export default RazonSocialAutoComplete;