import React, { useState, useEffect } from "react";
import { getComunStyle } from "../../css/comun";
import { Button, Typography, TextField } from "@material-ui/core";
import Cabecera from "../../components/cabecera/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { handleSetStep, updateForm } from "../../redux/actions/AdmissionAction";

const EditarDireccionSucursal = () => {
  return <div>Editar Dirección</div>;
};

export default EditarDireccionSucursal;
