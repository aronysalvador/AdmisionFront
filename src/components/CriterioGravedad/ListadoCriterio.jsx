import { TextField } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getComunStyle } from "../../css/comun";
import { withStyles } from '@material-ui/core/styles';

const CriterioList = (props) => {
  const { data, setData, title, listado, id, options } = props

  const comunClass = getComunStyle();

  const NoPaddingAutocomplete = withStyles({
    inputRoot: {
      '&&[class*="MuiOutlinedInput-root"] $input': {
        padding: "1.5px 2px"
      }
    },
    input: {}
  })(AutoComplete);

  return (
      <div className=''>
        <div className={[ 'container', comunClass.backgroundWhite ].join(' ')}>
          <div className='' style={{padding: "5px"}}>

            <div className='row' style={{padding: 0, margin: 0, width: "100%"}}>
              <div className='col-md-1' />
              <div className='col-md-4' style={{alignSelf: "center", textAlign: "end"}}>
                <span className={comunClass.txtRadios}>{title}</span>
              </div>

              <div className='col-md-5'>
                <NoPaddingAutocomplete
                  id={id+"Autocomplete"}
                  value={data}
                  onChange={(event, value) => {
                      setData(value);
                  }}
                  options={listado}
                  getOptionSelected= {(
                    option,
                    value
                  ) => value.value === option.value}
                  // getOptionLabel={(option) => option.descripcion}
                  getOptionLabel={(option) => {
                    let response = ""
                    if (option){
                        if (options.length>0){
                            for (let index = 0; index < options.length; index++) {
                                const element = options[index];
                                response += option[element]+" ";
                            }
                        }
                    }

                    return response
                  }}
                  renderInput={(params) => (
                    <TextField
                      id={id+"Input"}
                      {...params}
                      variant='outlined'
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          paddingTop: "3px",
                          paddingBottom: "3px",
                          paddingLeft: "5xp",
                          marginTop: "14px",
                          backgroundColor: "white"
                        }
                      }}
                    />
                  )}
                />
              </div>
              <div className='col-md-2' />
            </div>

          </div>
        </div>
      </div>
  );
};

export default CriterioList;
