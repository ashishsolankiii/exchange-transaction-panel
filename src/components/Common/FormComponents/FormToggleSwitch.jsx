import React from "react";

const FormToggleSwitch = ({ id, name, checked, onChange }) => {
  return (
    <div className="material-switch mt-4">
      <input id={id} name={name} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id} className="label-primary"></label>
    </div>
  );
};

export default FormToggleSwitch;
