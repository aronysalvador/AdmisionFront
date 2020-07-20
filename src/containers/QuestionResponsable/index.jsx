import React, {useState , useEffect} from 'react';
import { connect , useDispatch , useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import {getComunStyle} from '../../css/comun';
import {getSpaceStyle} from '../../css/spaceStyle';
import Cabecera from '../../components/cabecera/index';
import { handleSetStep } from '../../redux/actions/AdmissionAction';
import BoxACHSEditDelete from '../../components/share/BoxACHSEditDelete/index';

//Action de Redux
import {sendIsapres} from '../../redux/actions/AdmissionAction'
import {searchIsapres} from '../../redux/actions/PrevisionAction'

  const QuestionResponsable = (props) => {
    const { dispatch,addmissionForm } = props

    //State
    

    const dispatch1 = useDispatch();
    const getResponsable = useSelector(state => state.addmissionForm.responsable);
    

    useEffect( () => {
       

    }, []);

    const classesComun = getComunStyle();
    const spaceStyle = getSpaceStyle();

    const tituloResponsable = "Responsable";
    const contenidoResponsable = [addmissionForm.responsable.nombre,<br />,addmissionForm.responsable.cargo];

    return (
            <div className={classesComun.root}>
                <Cabecera dispatch={() => dispatch(handleSetStep(1))} percentage={100} />
                <div>
                    <Typography variant="p" component="p" className={classesComun.pregunta}>
                    Ya ¿Le contaste lo sucedido al responsable en tu empresa?
                    </Typography>
                </div> 


                { getResponsable.length === 0 
                    ? 
                    <div  className={spaceStyle.space12} />
                    :
                    <>
                        <div>
                        <div className={spaceStyle.space1} />
                            <BoxACHSEditDelete titulo={tituloResponsable}  contenido={contenidoResponsable}/> 
                        
                        </div>  
                    </>
                }
               

                { getResponsable.length === 0 
                    ?  <>
                        <div>
                            <Button className={classesComun.buttonAchs} variant="contained"  type="submit" onClick={()=> dispatch(handleSetStep(14))}>
                                Agregar responsable
                            </Button>
                        </div>  
                
                        <div  className={spaceStyle.space1} />

                        <div>
                            <Button className={classesComun.buttonAchs2} variant="contained"  type="submit" onClick={()=> dispatch(handleSetStep(10))}>
                                No avise a nadie
                            </Button>
                        </div> 
                    </>
                    : 
                    <>
                        <div  className={spaceStyle.space12} />
                        <div>
                            <Button className={classesComun.buttonAchs} variant="contained"  type="submit" onClick={()=> dispatch(handleSetStep(12))}>
                                Siguiente
                            </Button>
                        </div> 
                    </> 
                }                     
            </div>
    );
}

function mapStateToProps({ addmissionForm }) {
    return {
        addmissionForm : addmissionForm
    }
}

export default connect(mapStateToProps)(QuestionResponsable);

