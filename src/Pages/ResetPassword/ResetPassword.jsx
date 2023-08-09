import { CButton, CForm, CFormFeedback, CFormInput } from "@coreui/react";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";

export default function Login() {
  const location = useLocation();
  const { resetPassword, loginError } = useContext(AuthContext);

  const [validated, setValidated] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] = useState(false);

  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() && newPassword === confirmPassword) {
      // Perform login logic here, e.g., send login request to server
      const request = {
        userId: userId,
        oldPassword: oldPassword,
        newPassword: newPassword,
        isForceChangePassword: location.state.isForceChangePassword === true,
      };
      resetPassword(request, token);
      // if (!isAuthenticated) {
      //   //setLoginError('Please check the credentails');
      // }
      // Redirect to dashboard page after successful login
    } else {
      setValidated(true);
      setIsConfirmPasswordTouched(true);
    }
  };

  useEffect(() => {
    if (location.state && location.state.id) {
      setUserId(location.state.id);
    }
    if (location.state && location.state.token) {
      setToken(location.state.token);
    }
  }, [location]);

  return (
    <div className="login-img">
      <div className="page">
        <div className="">
          <div className="col col-login mx-auto">
            <div className="text-center">
              <img src={require("../../assets/images/brand/logo.png")} className="header-brand-img" alt="" />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-0">
              <Card.Body>
                <CForm
                  className="login100-form validate-form"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  method="post"
                >
                  <span className="login100-form-title">Reset Password </span>

                  <div className="text-center pb-3">
                    {" "}
                    <p className="text-danger mb-0">{loginError}</p>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <CFormInput
                      className="input100"
                      type="password"
                      name="oldPassword"
                      id="validationCustom01"
                      placeholder="Old Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                    <CFormFeedback invalid>Email is required field.</CFormFeedback>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <CFormInput
                      className="input100"
                      type="password"
                      name="newPassword"
                      id="validationCustom02"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New Password"
                      required
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                    <CFormFeedback invalid>New Password is required field.</CFormFeedback>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <CFormInput
                      className="input100"
                      type="password"
                      name="confirmPassword"
                      id="validationCustom03"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      required
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                    {isConfirmPasswordTouched && confirmPassword !== newPassword && (
                      <CFormFeedback className="text-danger">Passwords do not match.</CFormFeedback>
                    )}
                  </div>

                  <div className="container-login100-form-btn">
                    <CButton color="primary" type="submit" className="login100-form-btn btn-primary">
                      Update
                    </CButton>
                  </div>
                </CForm>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
