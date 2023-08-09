import React from "react";
import { CCol, CFormLabel, CFormTextarea } from "@coreui/react";

const FormTextarea = ({ label, name, value, onChange, onBlur, error, isRequired, width }) => {
    return (
        <CCol md={width}>
            <CFormLabel htmlFor={name}>
                {label} {isRequired === 'true' && <span className="text-red">*</span>}
            </CFormLabel>
            <CFormTextarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={error ? 'is-invalid' : ''}
            />
            {error && <p className="text-red">{error}</p>}
        </CCol>
    );
};

export default FormTextarea;
