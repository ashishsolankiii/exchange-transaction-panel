import { CButton, CCol, CForm, CSpinner } from "@coreui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "../../../components/Common/FormComponents/FormInput"; // Import the FormInput component
import FormInputWithIcon from "../../../components/Common/FormComponents/FormInputWithIcon";
import { getThemeSettingById, updateThemeSetting } from "../themeSettingService";
import FormTextarea from "../../../components/Common/FormComponents/FormTextarea";

const validationSchemaForCreate = Yup.object({
  facebookLink: Yup.string().required("Facebook is required"),

});

const validationSchemaForUpdate = Yup.object({
  facebookLink: Yup.string().required("Facebook is required"),
});

export default function SuperAdminForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { _id } = JSON.parse(localStorage.getItem('user_info')) || {};
  //const id = location.state ? location.state.id : null;

  const editMode = !!_id;

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [serverMsg, setServerMsg] = useState(null);

  const user = {
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    telegramLink: "",
    youtubeLink: "",
    whatsappLink: "",
    blogLink: "",
    footerMessage: "",
    news: "",
    supportNumber: "",
    forgotPasswordLink: "",
    depositePopupNumber: "",
    welcomeMessage: "",
  };

  const submitForm = async (values) => {
    setServerError(null);
    setLoading(true);

    try {
      let response = null;
      response = await updateThemeSetting({
        userId: _id,
        ...values,
      });

      if (response.success) {
        setServerMsg('Data Updated successfully!!');
        //navigate("/dashboard/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: user,
    validationSchema: editMode ? validationSchemaForUpdate : validationSchemaForCreate,
    onSubmit: submitForm,
  });

  useEffect(() => {
    const fetchData = async () => {
      // !!! IMPORTANT NOTE: The order of the promises in the array must match the order of the results in the results array
      Promise.all([getThemeSettingById(_id)]).then((results) => {
        const [fetchtedUser] = results;

        if (fetchtedUser !== null) {
          const result = fetchtedUser;
          formik.setValues((prevValues) => ({
            ...prevValues,
            facebookLink: result.facebookLink || "",
            twitterLink: result.twitterLink || "",
            instagramLink: result.instagramLink || "",
            telegramLink: result.telegramLink || "",
            youtubeLink: result.youtubeLink || "",
            whatsappLink: result.whatsappLink || "",
            blogLink: result.blogLink || "",
            footerMessage: result.footerMessage || "",
            news: result.news || "",
            supportNumber: result.supportNumber || "",
            forgotPasswordLink: result.forgotPasswordLink || "",
            depositePopupNumber: result.depositePopupNumber || "",
            welcomeMessage: result.welcomeMessage || "",
          }));
        }
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id]);

  const formTitle = "UPDATE THEME SETTING";

  return (
    <div>
      <div className="page-header mb-3">
        <h1 className="page-title">{formTitle}</h1>
      </div>

      <Card>
        <Card.Header>
          <h3 className="card-title">Social Integration </h3>
        </Card.Header>

        <Card.Body>
          <CForm className="row g-3 needs-validation" onSubmit={formik.handleSubmit}>
            {serverError ? <p className="text-red">{serverError}</p> : null}
            {serverMsg ? <p className="text-green">{serverMsg}</p> : null}

            <FormInputWithIcon
              label="Facebook"
              name="facebookLink" // Make sure to change the name accordingly for each social media input
              type="text"
              value={formik.values.facebookLink} // Adjust the value and onChange for each social media input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.facebookLink && formik.errors.facebookLink}
              isRequired={true}
              width={4}
              icon="fa fa-facebook"
            />

            <FormInputWithIcon
              label="Twitter"
              name="twitterLink"
              type="text"
              value={formik.values.twitterLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.twitterLink && formik.errors.twitterLink}
              isRequired={true}
              width={4}
              icon="fa fa-twitter"
            />

            <FormInputWithIcon
              label="Instagram"
              name="instagramLink"
              type="text"
              value={formik.values.instagramLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.instagramLink && formik.errors.instagramLink}
              isRequired={true}
              width={4}
              icon="fa fa-instagram"
            />

            <FormInputWithIcon
              label="Telegram"
              name="telegramLink"
              type="text"
              value={formik.values.telegramLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.telegramLink && formik.errors.telegramLink}
              isRequired={true}
              width={4}
              icon="fa fa-telegram"
            />

            <FormInputWithIcon
              label="Youtube"
              name="youtubeLink"
              type="text"
              value={formik.values.youtubeLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.youtubeLink && formik.errors.youtubeLink}
              isRequired={true}
              width={4}
              icon="fa fa-youtube"
            />

            <FormInputWithIcon
              label="Whatsapp"
              name="whatsappLink"
              type="text"
              value={formik.values.whatsappLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.whatsappLink && formik.errors.whatsappLink}
              isRequired={true}
              width={4}
              icon="fa fa-whatsapp"
            />

            <FormInputWithIcon
              label="Feed"
              name="blogLink"
              type="text"
              value={formik.values.blogLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.blogLink && formik.errors.blogLink}
              isRequired={true}
              width={4}
              icon="fa fa-feed"
            />

            <div className="mt-4 mb-1">
              <hr />
            </div>

            {/* <div className="expanel expanel-default">
              <div className="expanel-heading">
                <h3 className="expanel-title">Settings</h3>
              </div>
              <div className="expanel-body">Panel content</div>
            </div> */}

            <Card.Header className="bg-primary text-white">
              <h3 className="card-title">Others </h3>
            </Card.Header>

            <FormTextarea
              label="Footer Message"
              name="footerMessage"
              value={formik.values.footerMessage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.footerMessage && formik.errors.footerMessage}
              isRequired="true"
              width={6}
            />

            <FormTextarea
              label="News"
              name="news"
              value={formik.values.news}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.news && formik.errors.news}
              isRequired="true"
              width={6}
            />

            <FormInput
              label="Support number"
              name="supportNumber"
              type="text"
              value={formik.values.supportNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.supportNumber && formik.errors.supportNumber}
              isRequired="true"
              width={4}
            />

            <FormInput
              label="Forgot Password Link"
              name="forgotPasswordLink"
              type="text"
              value={formik.values.forgotPasswordLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.forgotPasswordLink && formik.errors.forgotPasswordLink}
              isRequired="true"
              width={4}
            />

            <FormInput
              label="Deposite popup number"
              name="depositePopupNumber"
              type="text"
              value={formik.values.depositePopupNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.depositePopupNumber && formik.errors.depositePopupNumber}
              isRequired="true"
              width={4}
            />

            <CCol xs={12} className="pt-3">
              <div className="d-grid gap-2 d-md-block">
                <CButton color="primary" type="submit" className="me-md-3">
                  {loading ? <CSpinner size="sm" /> : editMode ? "Update" : "Create"}
                </CButton>
              </div>
            </CCol>
          </CForm>
        </Card.Body>
      </Card>
    </div>
  );
}
