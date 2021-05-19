import { useSelector, shallowEqual } from "react-redux";
import { Capitalize } from "helpers/utils";
import image from './../../img/home_work-green.svg'
import { withStyles } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
const CustomSwitch = withStyles({
  switchBase: {
    color: "#FAFAFA",
    '&$checked': {
      color: "#00B2A9"
    },
    '&$checked + $track': {
      backgroundColor: "#00B2A9"
    }
  },
  checked: {},
  track: {}
})(Switch);

const CardSucursal = ({ sucursales, stateCheck, setStateCheck }) => {
  const { direccion, region, tipo_sucursal } = sucursales;

  const {
    rutEmpresa
  } = useSelector((state) => state.addmissionForm, shallowEqual);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "1px 1px 5px rgba(44, 44, 44, 0.25)"
      }}
    >
      {(tipo_sucursal==="CASA MATRIZ") ? (
        <div className={"row"}>
          <div className={"col-md-1"}>
            <img alt='calendar' src={image} />
          </div>
          <div className={"col-md-8"}>
            <h3 style={{fontWeight: 'bold', color: "#00b2a9", fontSize: "15px", margin: "7px 0px"}}>{Capitalize(tipo_sucursal)}</h3>
          </div>
          <div className={"col-md-3"}>
            <CustomSwitch
                id={"CardSucursal-Chk1"}
                checked={stateCheck}
                onChange={() => { setStateCheck(!stateCheck) }}
                color='default'
            />
          </div>
        </div>
      ): (
        <h3 style={{color: "#007A33", fontSize: "20px", margin: "7px 0px"}}>Sucursal</h3>
      )}
      {/* <div style={{ fontSize: "16px" }}>{nombre}</div> */}
      <div style={{ fontSize: "16px" }}>{direccion}</div>
      <div style={{ fontSize: "16px" }}>{region}</div>
      <div style={{ fontSize: "16px" }}>Rut: {rutEmpresa}</div>
    </div>
  );
};

export default CardSucursal;
