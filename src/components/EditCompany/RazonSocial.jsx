import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import RazonSocialAutoComplete from '../../components/share/RazonSocial'

const RazonSocial = () => {
  const {
    addmissionForm: { razonSocialForm },
  } = useSelector((state) => state, shallowEqual);

  const razonSocial = razonSocialForm

  return (
    <RazonSocialAutoComplete company={razonSocial}/>
  );
};

export default RazonSocial;
