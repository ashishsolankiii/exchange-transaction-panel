import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as custompagesswitcherdata from "../../data/Switcher/Custompagesswitcherdata"
export default function Login() {
  return (
    <div className="login-img">
      <div className="page">

        <div className="" onClick={() => custompagesswitcherdata.Swichermainrightremove()}>
          <div className="col col-login mx-auto">
            <div className="text-center">
              <img
                src={require("../../assets/images/brand/logo.png")}
                className="header-brand-img"
                alt=""
              />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-0">
              <Card.Body>
                <form className="login100-form validate-form">
                  <span className="login100-form-title">Login</span>
                  <div className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-email" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      placeholder="Password"
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="container-login100-form-btn">
                    <Link
                      to={`${process.env.PUBLIC_URL}/dashboard/`}
                      className="login100-form-btn btn-primary"
                    >
                      Login
                    </Link>
                  </div>

                </form>
              </Card.Body>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
