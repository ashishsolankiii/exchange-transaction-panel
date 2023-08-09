import { CCol, CFormLabel, CFormSelect } from "@coreui/react";
import React from "react";

const FormSelect = ({ label, name, value, onChange, onBlur, error, children, isRequired, width, disabled = false }) => {
  return (
    <CCol md={width}>
      <CFormLabel htmlFor={name}>
        {label} {isRequired === "true" && <span className="text-red">*</span>}
      </CFormLabel>
      <CFormSelect
        disabled={disabled}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "is-invalid" : ""}
      >
        {children}
      </CFormSelect>
      {error && <p className="text-red">{error}</p>}
    </CCol>
  );
};

export default React.memo(FormSelect);
