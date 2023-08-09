import { CCol, CFormLabel } from "@coreui/react";
import React from "react";
import Select from "react-select";

const FormMultiSelect = ({ label, name, value, onChange, options, error, onBlur, width, isRequired }) => {
  const handleMultiSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    onChange(name, selectedValues);
  };

  const getSelectedOptions = () => {
    return options.filter((option) => value.includes(option.value));
  };

  return (
    <CCol md={width}>
      <CFormLabel htmlFor={name}>
        {label} {isRequired === "true" && <span className="text-red">*</span>}
      </CFormLabel>
      <Select
        id={name}
        isMulti
        name={name}
        options={options}
        value={getSelectedOptions()}
        onChange={handleMultiSelectChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red">{error}</p>}
    </CCol>
  );
};

export default FormMultiSelect;
