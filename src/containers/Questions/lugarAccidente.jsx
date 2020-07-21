import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
import { getComunStyle } from '../../css/comun'
import Cabecera from '../../components/cabecera/index'
import QuestionForm from '../../components/questions/questionForm'


const AccidentPlaceForm = (props) => {

    const { dispatch, addmissionForm } = props
    const comunClass = getComunStyle();

    const saveAnswer = (value) =>{
        dispatch(updateForm("lugarAccidente",value))
        dispatch(handleSetStep(++addmissionForm.step))        
    }
 

    return (<div className={comunClass.root}>
        <Cabecera dispatch={() => dispatch(handleSetStep(--addmissionForm.step))} percentage={addmissionForm.percentage} />
        <div>
            <QuestionForm  titulo={"Completa las siguientes frases:"} 
                pregunta={"Al momento del accidente estaba ..."} 
                placeholder={"Ejemplo: Caminando por el patio del colegio, corriendo para alcanzar la micro, sentado en mi escritorio"} 
                accion={saveAnswer}/> 
        </div>
    </div> 
    );
}

const mapStateToProps = ({addmissionForm}) => {
    return {
        addmissionForm: addmissionForm
    }
}
export default connect(mapStateToProps)(AccidentPlaceForm);
