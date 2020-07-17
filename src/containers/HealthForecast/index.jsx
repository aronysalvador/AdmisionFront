import React, {useState , useEffect} from 'react'
import { connect , useDispatch , useSelector} from 'react-redux'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import {getComunStyle} from '../../css/comun'
import {getSpaceStyle} from '../../css/spaceStyle'
import Cabecera from '../../components/cabecera/index'
import { handleSetStep } from '../../redux/actions/AdmissionAction'

//Action de Redux
import {sendIsapres} from '../../redux/actions/AdmissionAction'
import {searchIsapres} from '../../redux/actions/PrevisionAction'

  const HealthForecast = (props) => {
    const { dispatch,addmissionForm } = props

    //State
    const [isapres , saveIsapres] = useState('');

    const dispatch1 = useDispatch();

    useEffect( () => {
        
        //Call Action
        const consultaIsapres = () => dispatch1( searchIsapres() );
        consultaIsapres();

    }, []);

    const getIsapres = useSelector(state => state.previsionForm.isapres);
    
    const clickSendIsapres = (id) => {
        dispatch1( sendIsapres(id) );
    }

    const classesComun = getComunStyle()
    const spaceStyle = getSpaceStyle()

    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(1))} percentage={100} />
                <div>
                    <Typography variant="p" component="p" className={classesComun.pregunta}>
                    Selecciona tu prevision de salud
                    </Typography>
                </div> 
                <div  className={spaceStyle.space1} />
                <div>
                  <Button 
                  className={classesComun.buttonAchs} 
                  variant="contained"  
                  type="submit"
                  value={ getIsapres.length !== 0 ? getIsapres[0].id : null}
                  onClick={() => clickSendIsapres(getIsapres[0].id)}
                  >
                      {(getIsapres.length !== 0)  ? <p>{getIsapres[0].nombre}</p>: null}
                  </Button>
                </div>  

                <div  className={spaceStyle.space2} /> 

                <div>
                    <div className={classesComun.linePrevisionLeft}></div>

                    

                    <div className={classesComun.linePrevisionRight}></div>
                </div>
  
                <div  className={spaceStyle.space2} />

                <div>
                  <Button 
                  className={classesComun.buttonAchsRight} 
                  variant="contained"  
                  type="submit"                 
                  value={getIsapres.length !== 0 ? getIsapres[1].id : null}
                  onClick={() => clickSendIsapres(getIsapres[1].id)}
                  >

                        {getIsapres.length !== 0 ? <p>{getIsapres[1].nombre}</p>: null}
                     
                  </Button>
                  <Button 
                  className={classesComun.buttonAchsLeft}
                   variant="contained"  
                   type="submit"
                   value={getIsapres.length !== 0 ? getIsapres[2].id : null}
                   onClick={() => clickSendIsapres(getIsapres[2].id)}
                   >
                       {getIsapres.length !== 0 ? <p>{getIsapres[2].nombre}</p>: null}
                  </Button>  
                                    
                </div> 

                <div  className={spaceStyle.space4} /> 
                 
                <div>
                  <Button 
                  className={classesComun.buttonAchsRight} 
                  variant="contained"  
                  type="submit"
                  value={getIsapres.length !== 0 ? getIsapres[3].id : null}
                  onClick={() => clickSendIsapres(getIsapres[3].id)}
                  >
                      {getIsapres.length !== 0 ? <p>{getIsapres[3].nombre}</p>: null}
                  </Button>
                  <Button 
                  className={classesComun.buttonAchsLeft} 
                  variant="contained" 
                  type="submit"
                  value={getIsapres.length !== 0 ? getIsapres[4].id : null}
                  onClick={() => clickSendIsapres(getIsapres[4].id)}
                   >
                      {getIsapres.length !== 0 ? <p>{getIsapres[4].nombre}</p>: null}
                  </Button>                        
                </div>

                <div  className={spaceStyle.space4} /> 

                <div>
                  <Button 
                  className={classesComun.buttonAchsRight} 
                  variant="contained"  
                  type="submit"
                  value={getIsapres.length !== 0 ? getIsapres[5].id : null}
                  onClick={() => clickSendIsapres(getIsapres[5].id)}
                  >
                      {getIsapres.length !== 0 ? <p>{getIsapres[5].nombre}</p>: null}
                  </Button>
                  <Button 
                  className={classesComun.buttonAchsLeft} 
                  variant="contained"  
                  type="submit"
                  value={getIsapres.length !== 0 ? getIsapres[6].id : null}
                  onClick={() => clickSendIsapres(getIsapres[6].id)}
                  >
                      {getIsapres.length !== 0 ? <p>{getIsapres[6].nombre}</p>: null}
                  </Button>                      
                </div>

                <div  className={spaceStyle.space4} />

                <div>
                  <Button className={classesComun.buttonAchs2} variant="contained"  type="submit" onClick={()=> dispatch(handleSetStep(10))}>
                      Otra Isapre
                  </Button>
                </div>   
                           
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(HealthForecast);

