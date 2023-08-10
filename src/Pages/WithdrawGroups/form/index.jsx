import { CButton, CForm, CSpinner } from "@coreui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ResolveFormikErrors from "../../../components/Common/FormComponents/FormErrors";
import FormInput from "../../../components/Common/FormComponents/FormInput"; // Import the FormInput component
import FormToggleSwitch from "../../../components/Common/FormComponents/FormToggleSwitch";
import { userInfo } from "../../../lib/default-values";
import { handleFormikNumberBlur } from "../../../utils/formik";
import { isPath } from "../../../utils/path";
import { createWithdrawGroup, getWithdrawGroupById, updateWithdrawGroup } from "../withdrawGroupApi";
import PageHeader from "./page-header";

export default function WithdrawGroupForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state ? location.state.id : null;
  const editMode = !!id;

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      type: "",
      remark: "",
      commission: 0,
      minAmount: 0,
      maxAmount: 0,
      isActive: true,
    },

    validationSchema: Yup.object({
      type: Yup.string().required("Type is required"),
      remark: Yup.string(),
      commission: Yup.number()
        .min(0, "Commission can not be smaller than 0")
        .max(100, "Commission can not be greater than 100"),
      minAmount: Yup.number().min(0, "Min Amount can not be smaller than 0"),
      maxAmount: Yup.number().min(0, "Max Amount can not be smaller than 0"),
      isActive: Yup.boolean(),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      if (editMode) {
        await updateWithdrawGroup({ _id: id, userId: userInfo._id, ...values });
        navigate("/withdraw-groups");
      } else {
        await createWithdrawGroup({ userId: userInfo._id, ...values });
        navigate("/withdraw-groups");
      }
      setLoading(false);
    },
  });

  useEffect(() => {
    if (isPath(location.pathname, "edit") && !editMode) {
      navigate("/withdraw-groups");
    }

    const fetchData = async () => {
      if (!editMode) {
        return;
      }
      const result = await getWithdrawGroupById(id);
      formik.setValues((prevValues) => ({
        ...prevValues,
        type: result.type || "",
        remark: result.remark || "",
        commission: result.commission || 0,
        minAmount: result.minAmount || 0,
        maxAmount: result.maxAmount || 0,
        isActive: result.isActive === true,
      }));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode, id]);

  return (
    <>
      <PageHeader editMode={editMode} />

      <Card>
        <Card.Body>
          <CForm onSubmit={formik.handleSubmit}>
            <Row>
              <FormInput
                label="Type"
                name="type"
                type="text"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.type && formik.errors.type}
                width={3}
                isRequired="true"
              />

              <FormInput
                label="Commission (%)"
                name="commission"
                type="number"
                value={formik.values.commission}
                onChange={formik.handleChange}
                onBlur={(e) => handleFormikNumberBlur(e, formik)}
                error={formik.touched.commission && formik.errors.commission}
                width={3}
              />

              <FormInput
                label="Min Amount"
                name="minAmount"
                type="number"
                value={formik.values.minAmount}
                onChange={formik.handleChange}
                onBlur={(e) => handleFormikNumberBlur(e, formik)}
                error={formik.touched.minAmount && formik.errors.minAmount}
                width={3}
              />

              <FormInput
                label="Max Amount"
                name="maxAmount"
                type="number"
                value={formik.values.maxAmount}
                onChange={formik.handleChange}
                onBlur={(e) => handleFormikNumberBlur(e, formik)}
                error={formik.touched.maxAmount && formik.errors.maxAmount}
                width={3}
              />

              <FormInput
                label="Remarks"
                name="remark"
                type="text"
                value={formik.values.remark}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.remark && formik.errors.remark}
                width={12}
              />

              <div className="mt-3">
                <label htmlFor="isActive" className="form-label">
                  Is Active
                </label>
                <FormToggleSwitch
                  id="isActive"
                  name="isActive"
                  checked={formik.values.isActive}
                  onChange={(e) => formik.setFieldValue("isActive", e.target.checked)}
                />
              </div>
            </Row>

            <div className="mt-5 d-flex align-items-center">
              <CButton color="primary" type="submit">
                {loading ? <CSpinner size="sm" /> : "Save"}
              </CButton>

              <Link to="/withdraw-groups" className="ms-2 btn btn-danger btn-icon text-white ">
                Cancel
              </Link>
            </div>

            <ResolveFormikErrors formik={formik} />
          </CForm>
        </Card.Body>
      </Card>
    </>
  );
}
