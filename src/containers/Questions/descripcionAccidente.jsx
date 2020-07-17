import React from 'react'
import { connect } from 'react-redux'
import { handleSetStep, updateForm } from '../../redux/actions/AdmissionAction'
import { getComunStyle } from '../../css/comun'
import Cabecera from '../../components/cabecera/index'
import QuestionForm from '../../components/questions/questionForm'


const AccidentDescriptionForm = (props) => {

    const { dispatch, addmissionForm } = props 
    const comunClass = getComunStyle();

    const saveAnswer = (value) =>{
        dispatch(updateForm("descripcionAccidente",value))
        dispatch(handleSetStep(++addmissionForm.step))       
    }
 

    return (<div className={comunClass.root}>
        <Cabecera dispatch={() => dispatch(handleSetStep(--addmissionForm.step))} percentage={addmissionForm.percentage} />
        <div>
            <QuestionForm 
                titulo={"Completa las siguientes frases"} 
                pregunta={"Lo que ocurrió fue que... y la lesión que presenta es ..."} 
                placeholder={"Sufre caída y la consecuencia fue una contusión - metió la mano en caldera y sufre quemadura - frena bruscamente para evitar chocar y la consecuencia fue una contusión"} 
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
export default connect(mapStateToProps)(AccidentDescriptionForm);
