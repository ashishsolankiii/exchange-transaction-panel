import { CCol, CFormInput, CFormLabel } from "@coreui/react";
import React from "react";

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  isRequired,
  width,
  disabled = false,
  autoComplete = true,
}) => {
  return (
    <CCol md={width}>
      <CFormLabel htmlFor={name}>
        {label} {isRequired === "true" && <span className="text-red">*</span>}
      </CFormLabel>
      <CFormInput
        disabled={disabled}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "is-invalid" : ""}
        autoComplete={autoComplete ? "on" : "off"}
      />
      {error && <p className="text-red">{error}</p>}
    </CCol>
  );
};

export default FormInput;
