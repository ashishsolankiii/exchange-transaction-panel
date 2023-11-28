import { CButton, CCol, CForm, CFormLabel, CSpinner } from "@coreui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "../../../components/Common/FormComponents/FormInput";
import FormSelect from "../../../components/Common/FormComponents/FormSelect"; // Import the FormSelect component
import { Notify } from "../../../utils/notify";
import { addTransferType, getTransferTypeDetailByID, updateTransferType } from "../transferTypeService";
import FormToggleSwitch from "../../../components/Common/FormComponents/FormToggleSwitch";
import { userInfo } from "../../../lib/default-values";

export default function TransferTypeForm() {
  const navigate = useNavigate();
  const location = useLocation();
  //id get from state
  const id = location.state ? location.state.id : null;
  const editMode = !!id;
  //id get from url
  //const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null); // State to hold the server error message
  const userId = JSON.parse(localStorage.getItem("user_info"))._id;
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [qrImageFile, setQrImageFile] = useState("");

  const typeList = [
    { id: "cash", lable: "Cash" },
    { id: "bank", lable: "Bank" },
    { id: "platform", lable: "Platform" },
    { id: "link", lable: "Link" },
  ];
  const handleSingleImageUpload = (event, fieldName) => {
    const file = event.target.files[0];
    if (!file) return;

    const newImageUrl = URL.createObjectURL(file);
    if (fieldName === "qrImage") {
      setQrImageUrl(newImageUrl);
      setQrImageFile(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      transferType: "",
      minAmount: 0,
      maxAmount: 0,
      description: "",
      mobileNumber: "",
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      accountType: "",
      ifsc: "",
      platformName: "upi",
      platformDisplayName: "",
      platformAddress: "",
      depositLink: "",
      isActive: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      type: Yup.string().required("Type is required"),
      transferType: Yup.string().required("Transfer Type is required"),
      minAmount: Yup.number().required("Min Amount is required")
        .min(1, "Min Amount cannot be lower than 1"),
      maxAmount: Yup.number()
        .required("Max Amount is required")
        .test("minBetLessThanMaxBet", "Max Amount must be greater than Min Amount", function (value) {
          // Access the parent context to get the minBet value
          const { minAmount } = this.parent;
          const parsedminAmount = parseFloat(minAmount);
          const parsedMaxAmountt = parseFloat(value);

          if (!isNaN(parsedminAmount) && !isNaN(parsedMaxAmountt) && parsedminAmount >= parsedMaxAmountt) {
            return new Yup.ValidationError("Max Amount must be greater than Min Amount", value, "maxAmount");
          }

          return true;
        }),
      description: Yup.string().required("description is required"),
      mobileNumber: Yup.number().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("cash")) {
          return schema.required("Mobile number is required");
        }
        return schema;
      }),

      accountHolderName: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("bank")) {
          return schema.required("Account holder name is required");
        }
        return schema;
      }),

      bankName: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("bank")) {
          return schema.required("Bank name is required");
        }
        return schema;
      }),

      accountNumber: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("bank")) {
          return schema.required("Account Number is required");
        }
        return schema;
      }),

      ifsc: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("bank")) {
          return schema.required("IFSC Type is required");
        }
        return schema;
      }),

      accountType: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("bank")) {
          return schema.required("Account Type is required");
        }
        return schema;
      }),

      platformName: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("platform")) {
          return schema.required("Platform Name is required");
        }
        return schema;
      }),

      platformDisplayName: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("platform")) {
          return schema.required("Platform Display Name is required");
        }
        return schema;
      }),

      platformAddress: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("platform")) {
          return schema.required("Platform Address is required");
        }
        return schema;
      }),
      depositLink: Yup.string().when("type", (type, schema) => {
        if (Array.isArray(type) && type.includes("link")) {
          return schema.required("Deposit Link is required");
        }
        return schema;
      }),
    }),
    onSubmit: async (values) => {
      // Perform form submission logic
      setServerError(null); // Reset server error state
      setLoading(true); // Set loading state to true
      try {
        let response = null;
        const formData = new FormData(); // Create a new FormData object
        formData.append("userId", userId);
        formData.append("parentUserId", userInfo.superUserId);
        // Append form values to FormData
        for (const key in values) {
          console.log(key);
          formData.append(key, values[key]);
        }

        if (qrImageFile) {
          formData.append("qrImage", qrImageFile);
        }
        if (editMode) {
          formData.append("_id", id);
          response = await updateTransferType(formData);
        } else {
          response = await addTransferType(formData);
        }
        if (response.success) {
          let msg = editMode ? "Transfer type Updated Successfully" : "Transfer type added Successfully";
          Notify.success(msg);
          navigate("/transfer-type-list/");
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        //console.log(error);
        Notify.error(error.message);
        setServerError(error.message);
      } finally {
        setLoading(false); // Set loading state to false
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getTransferTypeDetailByID(id);
        console.log(result)
        formik.setValues((prevValues) => ({
          ...prevValues,
          name: result.name || "",
          minAmount: result.minAmount || "",
          maxAmount: result.maxAmount || "",
          description: result.description || "",
          mobileNumber: result.mobileNumber || "",
          accountHolderName: result.accountHolderName || "",
          bankName: result.bankName || "",
          accountNumber: result.accountNumber || "",
          accountType: result.accountType || "",
          ifsc: result.ifsc || "",
          platformName: result.platformName || "",
          platformDisplayName: result.platformDisplayName || "",
          platformAddress: result.platformAddress || "",
          depositLink: result.depositLink || "",
          isActive: result.isActive || "",
          transferType: result.transferType || "",
          type: result.type
        }));

        setQrImageUrl(result.qrImage);
      }
    };
    fetchData();
  }, [id]);

  const formTitle = id ? "UPDATE TRANSFER TYPE" : "CREATE TRANSFER TYPE";

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title"> {formTitle}</h1>
        </div>
      </div>

      <Row>
        <Col md={12} lg={12}>
          <Card>
            {/* <Card.Header>
              <h3 className="card-title">General Information</h3>
            </Card.Header> */}
            <Card.Body>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={formik.handleSubmit}
              >
                {serverError && <p className="text-red">{serverError}</p>}
                {/* Display server error message */}

                {/* <FormSelect
                  label="Type"
                  name="type"
                  value={formik.values.type}
                  onChange={(event) => formik.setFieldValue("type", event.target.value)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.type && formik.errors.type}
                  isRequired="true"
                  width={3}
                  disabled={editMode}
                >
                  <option value="">Select Type</option>
                  {typeList.map((type, index) => (
                    <option key={type.index} value={type._id}>
                      {type.lable}
                    </option>
                  ))}
                </FormSelect> */}
                <FormSelect
                  label="Transfer Type"
                  name="transferType"
                  value={formik.values.transferType}
                  onChange={(event) => formik.setFieldValue("transferType", event.target.value)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.transferType && formik.errors.transferType}
                  isRequired="true"
                  width={3}
                >
                  <option value="">Select transfer type</option>
                  <option value="deposit">DEPOSIT</option>
                  <option value="Withdrawal">WITHDRAWAL</option>
                </FormSelect>
                <FormSelect
                  label="Type"
                  name="type"
                  value={formik.values.type}
                  onChange={(event) => {
                    formik.setFieldValue("type", event.target.value);
                    // Reset relevant fields based on the selected type
                    formik.setFieldValue("mobileNumber", "");
                    formik.setFieldValue("accountHolderName", "");
                    formik.setFieldValue("bankName", "");
                    formik.setFieldValue("accountNumber", "");
                    formik.setFieldValue("accountType", "");
                    formik.setFieldValue("ifsc", "");
                    formik.setFieldValue("platformName", "upi");
                    formik.setFieldValue("platformDisplayName", "");
                    formik.setFieldValue("platformAddress", "");
                    formik.setFieldValue("depositLink", "");
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.type && formik.errors.type}
                  isRequired="true"
                  width={3}
                  disabled={editMode}
                >
                  <option value="">Select Type</option>
                  {typeList.map((type, index) => (
                    <option key={index} value={type.id}>
                      {type.lable}
                    </option>
                  ))}
                </FormSelect>

                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && formik.errors.name}
                  isRequired="true"
                  width={3}
                />

                <FormInput
                  className="mt-3"
                  label="Min Amount"
                  name="minAmount"
                  type="number"
                  value={formik.values.minAmount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.minAmount && formik.errors.minAmount}
                  width={3}
                />

                <FormInput
                  className="mt-3"
                  label="Max Amount"
                  name="maxAmount"
                  type="number"
                  value={formik.values.maxAmount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.maxAmount && formik.errors.maxAmount}
                  width={3}
                />

                <FormInput
                  className="mt-3"
                  label="Description"
                  name="description"
                  type="text"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.description && formik.errors.description}
                  width={3}
                  isRequired="true"
                />

                <CCol md="3">
                  <CFormLabel htmlFor="">Qr Image</CFormLabel>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={(event) =>
                      handleSingleImageUpload(event, "qrImage")
                    }
                  />
                </CCol>

                <CCol md="2">
                  {qrImageUrl && (
                    <div className="image-preview">
                      <img src={qrImageUrl} alt="Qr Image" />
                    </div>
                  )}
                </CCol>

                {formik.values.type === "cash" && (
                  <FormInput
                    label="Mobile Number"
                    name="mobileNumber"
                    type="number"
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mobileNumber && formik.errors.mobileNumber}
                    width={3}
                    isRequired="true"
                  />
                )}

                {formik.values.type === "bank" && (
                  <>
                    <FormInput
                      className="mt-3"
                      label="Account Holder Name"
                      name="accountHolderName"
                      type="text"
                      value={formik.values.accountHolderName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.accountHolderName && formik.errors.accountHolderName}
                      width={3}
                      isRequired="true"
                    />

                    <FormInput
                      className="mt-3"
                      label="Bank Name"
                      name="bankName"
                      type="text"
                      value={formik.values.bankName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.bankName && formik.errors.bankName}
                      width={3}
                      isRequired="true"
                    />

                    <FormInput
                      className="mt-3"
                      label="Account Number"
                      name="accountNumber"
                      type="number"
                      value={formik.values.accountNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.accountNumber && formik.errors.accountNumber}
                      width={3}
                      isRequired="true"
                    />

                    <FormInput
                      className="mt-3"
                      label="IFSC"
                      name="ifsc"
                      type="text"
                      value={formik.values.ifsc}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.ifsc && formik.errors.ifsc}
                      width={3}
                      isRequired="true"
                    />

                    <FormSelect
                      label="Account Type"
                      name="accountType"
                      value={formik.values.accountType}
                      onChange={(event) => formik.setFieldValue("accountType", event.target.value)}
                      onBlur={formik.handleBlur}
                      error={formik.touched.accountType && formik.errors.accountType}
                      isRequired="true"
                      width={3}
                    >
                      <option value="">select account type</option>
                      <option value="savings">Saving</option>
                      <option value="current">Current</option>
                    </FormSelect>
                    {/* ... other bank-related fields ... */}
                  </>
                )}

                {formik.values.type === "platform" && (
                  <>
                    <FormSelect
                      label="Platform Name"
                      name="platformName"
                      value={formik.values.platformName}
                      onChange={(event) => formik.setFieldValue("platformName", event.target.value)}
                      onBlur={formik.handleBlur}
                      error={formik.touched.platformName && formik.errors.platformName}
                      isRequired="true"
                      width={3}
                    >
                      <option value="upi">UPI </option>
                      <option value="gpay">GPAY </option>
                      <option value="phonepe">PHONEPE </option>
                      <option value="paytm">PAYTM </option>
                    </FormSelect>

                    <FormInput
                      className="mt-3"
                      label="Platform Display Name"
                      name="platformDisplayName"
                      type="text"
                      value={formik.values.platformDisplayName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.platformDisplayName && formik.errors.platformDisplayName}
                      isRequired="true"
                      width={3}
                    />

                    <FormInput
                      className="mt-3"
                      label="Platform Address"
                      name="platformAddress"
                      type="text"
                      value={formik.values.platformAddress}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.platformAddress && formik.errors.platformAddress}
                      isRequired="true"
                      width={3}
                    />
                    {/* ... other platform-related fields ... */}
                  </>
                )}

                {formik.values.type === "link" && (
                  <FormInput
                    className="mt-3"
                    label="Deposit Link"
                    name="depositLink"
                    type="text"
                    value={formik.values.depositLink}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.depositLink && formik.errors.depositLink}
                    width={3}
                    isRequired="true"
                  />
                )}

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

                <CCol xs={12}>
                  <div className="d-grid gap-2 d-md-block">
                    <CButton color="primary" type="submit" className="me-3">
                      {loading ? <CSpinner size="sm" /> : "Save"}
                    </CButton>
                    <Link
                      to={`${process.env.PUBLIC_URL}/transfer-type-list`}
                      className="btn btn-danger btn-icon text-white "
                    >
                      Cancel
                    </Link>
                  </div>
                </CCol>
              </CForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
