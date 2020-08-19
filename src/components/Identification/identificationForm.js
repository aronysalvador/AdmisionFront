import React from "react";
// import React, {useRef,useEffect} from "react";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { updateForm, handleSetStep } from "../../redux/actions/AdmissionAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Rut, formateaRut } from "../../helpers/rut";
import Typography from "@material-ui/core/Typography";
import { getComunStyle } from "../../css/comun";
import { getSpaceStyle } from "../../css/spaceStyle";

// class Campo extends React.Component{
//   simulateClick(e) {
//     e.click()    
//   }
//   render(){
//       return(
//         <TextField 
//             inputRef={this.simulateClick} 
//             onClick={()=>  console.log('clicked..')} 
//             inputProps={{ inputMode: 'numeric'}}  
//         />
//       )
//   }
// }

// class Campo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }

//   componentDidMount(){
//     this.textInput.current.focus()
//   }

//   render() {
//     return (
//       <input
//         type="text"
//         ref={this.textInput}
//         onClick={()=>console.log("clicked..")}
//         onFocus={()=>{console.log("focused.."); console.log(this.textInput.current); this.textInput.current.click() }}
//       />
//     );
//   }
// }



// const Campo = () => {
//   const searchRef = useRef(null);
//   useEffect(() => {
//     searchRef.current.focus()
//   }, []);

//     return(
//       <TextField  
//        inputProps={{ inputMode: 'numeric'}}
//        inputRef={searchRef} 
//        onFocus={()=>{console.log("focus.."); searchRef.current.click() }} 
//        onClick={()=>{console.log("click.."); }}
//       />
//     )
// }


// const Campo = () => {
//   const myInput = useRef(null);
//   const myButton = useRef(null);

//   useEffect(() => {
//     setTimeout(() => {
//       myButton.current.click()
//     }, 1000);    
//   }, []);

//   const clickElement = () => {
//     console.log("here")
//     myInput.current.focus();
//   }
//   return (
//       <div>   
//          <button ref={myButton}  type="button"  onClick={clickElement}>
//              Trigger click inside input
//           </button>
//           <br></br>
//           <br></br>
//           <br></br>
//               <input ref={myInput}  onFocus={()=>console.log("focused")} />     
//           <br></br>
//           <br></br>
//           <br></br>
//       </div>
//   );
// }


const form = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting, 
    handleChange, 
    handleBlur,
    handleSubmit,
  } = props;

  const classesComun = getComunStyle();
  const spaceStyle = getSpaceStyle();



  return (

    <form onSubmit={handleSubmit}>
      <div>
        <Typography
          variant="h1"
          component="h1"
          className={classesComun.pregunta}
        >
          Ingresa el RUT del paciente{" "}
        </Typography>{" "}
      </div>{" "}
      <div className={spaceStyle.space2} />{" "}


    {/* <Campo /> */}

      <Typography className={classesComun.tituloTextbox}>
        RUT
      </Typography>
      <div>
        <TextField
          id="rut"
          value={formateaRut(values.rut)}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.rut ? errors.rut : ""}
          error={touched.rut && Boolean(errors.rut)}
          className={classesComun.borderBox}
          margin="dense"
          variant="outlined"
          fullWidth
          // inputProps={{ inputMode: 'numeric', autoFocus: true}}
        />
      </div>{" "}
      <div className={spaceStyle.space12} />{" "}
      <div className={spaceStyle.space4} />{" "}
      <div className={classesComun.bottomElement}>
        <Button
          className={classesComun.buttonAchs}
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          Continuar{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

const IdentificationForm = withFormik({
  mapPropsToValues: ({ rut }) => {
    return {
      rut: rut || "",
    };
  },
  validate: (values) => {
    const errors = {};
    if (typeof values.rut !== "undefined" && values.rut.length < 1) {
      errors.rut = "Debe ingresar el RUT del Paciente";
    } else if (!Rut.validaRut(formateaRut(values.rut))) {
      errors.rut = "Ingresa un RUT válido";
    }
    return errors;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting = false;
    values.rut = formateaRut(values.rut);
    props.dispatch(updateForm("rut", Rut.clean(values.rut)));
    props.dispatch(handleSetStep(5));
  },
})(form);

function mapStateToProps({ addmissionForm }) {
  return {
    addmissionForm: addmissionForm,
  };
}
export default connect(mapStateToProps)(IdentificationForm);
