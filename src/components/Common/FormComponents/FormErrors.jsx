import React from "react";

function ResolveFormikErrors({ formik, className = "" }) {
  return (
    <>
      {formik.errors && Object.keys(formik.errors).length && formik.submitCount > 0 ? (
        <div className={`text-danger mt-2 fw-semibold ${className}`}>Please resolve all the form errors.</div>
      ) : null}
    </>
  );
}

export default ResolveFormikErrors;
