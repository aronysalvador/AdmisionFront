import { Format } from '../../helpers/strings';
import image from './../../img/home_work.svg'

const BotonSeleccionarCustomSucursalItem = ({
  direccion,
  comuna,
  tipo_sucursal
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>

       { tipo_sucursal === "CASA MATRIZ" && (

       <div style={{display: "flex", background: "#00b2a9", justifyContent: "center", padding: "5px", borderRadius: "20px", marginBottom: "5px" }}>
        <img alt='calendar' src={image} />
        <span style={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}>&nbsp;{Format.formatizar(tipo_sucursal)}</span>
       </div>

       ) }
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>{Format.formatizar(direccion)}</span> <br />
        <span style={{ fontSize: "14px", color: "#787878" }}>{Format.formatizar(comuna)}</span>

      </div>
      {/* <span style={{ fontSize: "12px" }}>{id_region}</span> */}
    </>
  );
};

export default BotonSeleccionarCustomSucursalItem;
