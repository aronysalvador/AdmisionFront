import React from 'react'
import {TextField} from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete'

const RazonSocialAutoComplete = () => {
    const [ options, setOptions ] = React.useState([])
    const [ razon, setRazon ] = React.useState([])

    const getData = async(newInputValue) => {
      if (newInputValue){
          const test = await fetch(window.REACT_APP_RAZONSOCIAL+ newInputValue)
          const json = await test.json()
          let predictions = (Array.isArray(json.content?.response)) ? json.content.response : []
          setOptions(predictions)
          if (predictions.length == 1)
            setRazon(predictions)
      }
    }

    return (<div>
                <Autocomplete
                  value={razon.name}
                  style={{ width: '100%' }}
                  size='small'
                  fullWidth
                  getOptionLabel={(option) => option.name}
                  options={options}

                  onInputChange={(event, newInputValue) => {
                    getData(newInputValue)
                  }}
                  renderInput={(params) => {
                    return (
                      <TextField {...params} style={{color: 'red'}} variant='outlined' />
                  ) }}

                />
            </div>
    );
}
export default RazonSocialAutoComplete;