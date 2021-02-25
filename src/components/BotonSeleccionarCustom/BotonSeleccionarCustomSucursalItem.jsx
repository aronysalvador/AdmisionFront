import { Format } from '../../helpers/strings';
const BotonSeleccionarCustomSucursalItem = ({
  direccion,
  comuna
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>

        <span style={{ fontSize: "14px", fontWeight: "bold" }}>{Format.formatizar(direccion)}</span> <br />
        <span style={{ fontSize: "14px", color: "#787878" }}>{Format.formatizar(comuna)}</span>

      </div>
      {/* <span style={{ fontSize: "12px" }}>{id_region}</span> */}
    </>
  );
};

export default BotonSeleccionarCustomSucursalItem;
