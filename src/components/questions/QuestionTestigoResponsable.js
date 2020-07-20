import React from 'react'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'

const QuestionButton = props => {
  const {
    titulo,
    accionButoonA,
    accionButoonB,
    tituloA,
    tituloB
  } = props;
  
  const classesComun =  getComunStyle()
  const spaceStyle = getSpaceStyle()

  return (
    <div>
        <div>
            <Typography variant="p" component="p" className={classesComun.pregunta}>
                {titulo}
            </Typography>
        </div> 
        <div  className={spaceStyle.space12} />
        <div>
            <Button className={classesComun.buttonAchs} variant="contained"  type="submit" onClick={()=> accionButoonA()}>
                {tituloA}
            </Button>
        </div>  
        <div  className={spaceStyle.space1} />
        <div>
            <Button className={classesComun.buttonAchs2} variant="contained"  type="submit" onClick={()=> accionButoonB()}>
                {tituloB}
            </Button>
        </div>                      
    </div>
  )}

export default QuestionButton