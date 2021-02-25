import { Format } from "../../helpers/strings";

const BotonSeleccionarCustomItem = ({ nombre, selected }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "14px", fontWeight: "bold" }}>{Format.formatizar(nombre)}
      {/* <img src="./static/check.svg"alt="check" style={{position: "absolute", top: "3px", right: "3px"}} />  */}
      </span> <br />

    </div>
  );
};

export default BotonSeleccionarCustomItem;
