export const handleFormikNumberBlur = (e, formik) => {
  const { name, value } = e.target;
  formik.setFieldValue(name, Number(value || 0));
};
