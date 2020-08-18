import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/Autocomplete";
import { getRazonSocialPrincipal } from "./../../redux/actions/RazonSocialAction";
import { updateForm } from "../../redux/actions/AdmissionAction";
import RazonSocialAutoComplete from '../../components/share/RazonSocial'

const RazonSocial = () => {
  const {
    addmissionForm: { razonSocialForm,razonSocialobj },
  } = useSelector((state) => state, shallowEqual);

  const [razonSocial, setRazonSocial] = useState(() => {
    return razonSocialForm
  });

  const [razonSociaformlobj, setRazonSocialformobj] = useState(() =>{
    return razonSocialobj
  })

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const { data: razonSocialList } = useSelector(
    (state) => state.razonSocialForm,
    shallowEqual
  );

  return (
    <RazonSocialAutoComplete company={razonSocial}/>
  );
};

export default RazonSocial;
