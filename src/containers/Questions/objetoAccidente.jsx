import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
import { getComunStyle } from '../../css/comun'
import Cabecera from '../../components/cabecera/index'
import QuestionForm from '../../components/questions/questionForm'


const AccidentObjectForm = (props) => {

    const { dispatch, addmissionForm } = props
    const {objetoAccidente} = addmissionForm
    const comunClass = getComunStyle();

    const saveAnswer = (value) =>{
        dispatch(updateForm("objetoAccidente",value))
        dispatch(handleSetStep(15))        
    }
 

    return (<div className={comunClass.root}>
        <Cabecera dispatch={() => dispatch(handleSetStep(--addmissionForm.step))} percentage={addmissionForm.percentage} />
        <div>
            <QuestionForm 
                titulo={"Completa las siguientes frases"} 
                pregunta={"Se accidentó con ..."} 
                placeholder={"Ejemplo: Con la escalera - con el suelo - al caer tineta en el pie"} 
                accion={saveAnswer}
                valueFromState={objetoAccidente}/> 
        </div>
    </div> 
    );
}

const mapStateToProps = ({addmissionForm}) => {
    return {
        addmissionForm: addmissionForm
    }
}
export default connect(mapStateToProps)(AccidentObjectForm);
