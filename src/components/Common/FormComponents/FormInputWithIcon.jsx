import React from "react";
import { CCol, CForm, CFormFeedback, CFormInput, CFormLabel, CInputGroup, CInputGroupText } from "@coreui/react";

const FormInputWithIcon = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  isRequired,
  width,
  icon, // The icon to display (e.g., "fa fa-facebook")
}) => {
  return (
    <CCol md={width}>
      <CFormLabel htmlFor={`validationCustom${name}`} className="form-label">
        {label} {isRequired && <span className="text-danger">*</span>}
      </CFormLabel>
      <CInputGroup className="has-validation">
        <CInputGroupText id="inputGroupPrepend">
          <i className={icon}></i>
        </CInputGroupText>
        <CFormInput
          type={type}
          id={`validationCustom${name}`}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          invalid={error}
          required={isRequired}
        />
        {error && <CFormFeedback invalid>{error}</CFormFeedback>}
      </CInputGroup>
    </CCol>
  );
};

export default FormInputWithIcon;
