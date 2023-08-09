import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import {Row} from "react-bootstrap"
import { Link } from "react-router-dom";
import * as custompagesswitcherdata from "../../data/Switcher/Custompagesswitcherdata";
export function Custompagesswitcher() {
 
  useEffect(()=>{
    custompagesswitcherdata.localStorageBackUp();
  })
  function changePrimaryColor() {
    var userColor = document.getElementById("colorID").value;
    localStorage.setItem("primaryColor", userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem("primaryHoverColor", userColor + 95);
    localStorage.setItem("primaryBorderColor", userColor);
    localStorage.setItem("primaryTransparent", userColor + 20);

    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );

    custompagesswitcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

    document.getElementById("myonoffswitch6").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("light-mode");

    // Removing
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("transparent-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    custompagesswitcherdata.name();
  }
  function darkPrimaryColor() {
    var userColor = document.getElementById("darkPrimaryColorID").value;

    localStorage.setItem("darkPrimaryColor", userColor);

    const dynamicPrimaryDark = document.querySelectorAll(
      "input.color-primary-dark"
    );

    custompagesswitcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

    document.getElementById("myonoffswitch7").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("dark-mode");
    document.querySelector("body")?.classList.add("dark-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("transparent-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    custompagesswitcherdata.name();
  }
  function transparentPrimaryColor() {
    var userColor = document.getElementById("transparentPrimaryColorID").value;

    localStorage.setItem("transparentPrimaryColor", userColor);

    const PrimaryTransparent = document.querySelectorAll(
      "input.color-primary-transparent"
    );

    custompagesswitcherdata.dynamicTransparentPrimaryColor(PrimaryTransparent, userColor);

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    custompagesswitcherdata.name();
  }
  function BgTransparentBackground() {
    var userColor = document.getElementById("transparentBgColorID").value;

    localStorage.setItem("transparentBgColor", userColor);

    const dynamicBackgroundColor = document.querySelectorAll(
      "input.color-bg-transparent"
    );

    custompagesswitcherdata.dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    custompagesswitcherdata.name();
  }
  function BgImgTransparentPrimaryColor() {
    var userColor = document.getElementById(
      "transparentBgImgPrimaryColorID"
    ).value;

    localStorage.setItem("transparent-bgImgPrimaryColor", userColor);

    const dynamicPrimaryImgTransparent = document.querySelectorAll(
      "input.color-primary-img-transparent"
    );

    custompagesswitcherdata.dynamicBgImgTransparentPrimaryColor(
      dynamicPrimaryImgTransparent,
      userColor
    );

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");

    document.querySelector("html").style.removeProperty("--transparent-body");

    if (
      document.querySelector("body")?.classList.contains("bg-img1") === false &&
      document.querySelector("body")?.classList.contains("bg-img2") === false &&
      document.querySelector("body")?.classList.contains("bg-img3") === false &&
      document.querySelector("body")?.classList.contains("bg-img4") === false
    ) {
      document.querySelector("body")?.classList.add("bg-img1");
      localStorage.setItem("BgImage", "bg-img1");
    }
    custompagesswitcherdata.name();
  }
   
  return (
    <div className="switcher-wrapper" >
      <div className="demo_changer" >
        <div className="form_holder sidebar-right1" >
          <Scrollbars>
            <Row className="row">
              <div className="predefined_styles">
                <div className="swichermainleft text-center">
                  <div className="p-3 d-grid gap-2">
                    <a
                      href="../../index.html"
                      className="btn ripple btn-primary mt-0"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://themeforest.net/item/zanex-bootstrap-5-admin-dashboard-template/32984858"
                      className="btn ripple btn-secondary"
                    >
                      Buy Now
                    </a>
                    <a
                      href="https://themeforest.net/user/spruko/portfolio"
                      className="btn ripple btn-red"
                    >
                      Our Portfolio
                    </a>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Light Theme Style</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Light Theme</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch7"
                            id="myonoffswitch6"
                            onClick={() => custompagesswitcherdata.LightTheme()}
                            className="onoffswitch2-checkbox"
                            defaultChecked
                          />
                          <label
                            htmlFor="myonoffswitch6"
                            className="onoffswitch2-label"
                          />
                        </p>
                      </div>
                      <div className="switch-toggle d-flex">
                        <span className="me-auto mt-1">Light Primary</span>
                        <div className="">
                          <input
                            className="w-30p h-30 input-color-picker color-primary-light border-0"
                            defaultValue="#6259ca"
                            id="colorID"
                            onInput={(e) => changePrimaryColor(e)}
                            type="color"
                            data-id="bg-color"
                            data-id1="bg-hover"
                            data-id2="bg-border"
                            data-id7="transparentcolor"
                            name="lightPrimary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Dark Theme Style</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto">Dark Theme</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch7"
                            id="myonoffswitch7"
                            onClick={() => custompagesswitcherdata.dark()}
                            className="onoffswitch2-checkbox"
                          />
                          <label
                            htmlFor="myonoffswitch7"
                            className="onoffswitch2-label"
                          />
                        </p>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto mt-1">Dark Primary</span>
                        <div className="">
                          <input
                            className="w-30p h-30 input-dark-color-picker color-primary-dark border-0"
                            defaultValue="#6259ca"
                            id="darkPrimaryColorID"
                            onInput={() => darkPrimaryColor()}
                            type="color"
                            data-id="bg-color"
                            data-id1="bg-hover"
                            data-id2="bg-border"
                            data-id3="primary"
                            data-id8="transparentcolor"
                            name="darkPrimary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Transparent Theme Style</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto">Transparent Theme</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch7"
                            id="myonoffswitchTransparent"
                            onClick={() => custompagesswitcherdata.transparent()}
                            className="onoffswitch2-checkbox"
                          />
                          <label
                            htmlFor="myonoffswitchTransparent"
                            className="onoffswitch2-label"
                          />
                        </p>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto mt-1">
                          Transparent Primary
                        </span>
                        <div className="">
                          <input
                            className="w-30p h-30 input-transparent-color-picker color-primary-transparent border-0"
                            defaultValue="#6259ca"
                            id="transparentPrimaryColorID"
                            onInput={() => transparentPrimaryColor()}
                            type="color"
                            data-id="bg-color"
                            data-id1="bg-hover"
                            data-id2="bg-border"
                            data-id3="primary"
                            data-id4="primary"
                            data-id9="transparentcolor"
                            name="tranparentPrimary"
                          />
                        </div>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto mt-1">
                          Transparent Background
                        </span>
                        <div className="">
                          <input
                            className="w-30p h-30 input-transparent-color-picker color-bg-transparent border-0"
                            defaultValue="#6259ca"
                            id="transparentBgColorID"
                            onInput={() => BgTransparentBackground()}
                            type="color"
                            data-id5="body"
                            data-id6="theme"
                            data-id9="transparentcolor"
                            name="transparentBackground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Transparent Bg-Image Style</h4>
                  <div className="skin-body switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto mt-1">Bg-Image Primary</span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-transparent-color-picker color-primary-img-transparent border-0"
                          defaultValue="#6259ca"
                          id="transparentBgImgPrimaryColorID"
                          onInput={() => BgImgTransparentPrimaryColor()}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id4="primary"
                          data-id9="transparentcolor"
                          name="tranparentPrimary"
                        />
                      </div>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <Link
                        className="bg-img1"
                        to="#"
                        onClick={() => custompagesswitcherdata.bgimage1()}
                      >
                        <img
                          src={require("../../assets/images/media/bg-img1.jpg")}
                          alt=""
                          id="bgimage1"
                        />
                      </Link>
                      <Link
                        className="bg-img2"
                        to="#"
                        onClick={() => custompagesswitcherdata.bgimage2()}
                      >
                        <img
                          src={require("../../assets/images/media/bg-img2.jpg")}
                          alt=""
                          id="bgimage2"
                        />
                      </Link>
                      <Link
                        className="bg-img3"
                        to="#"
                        onClick={() => custompagesswitcherdata.bgimage3()}
                      >
                        <img
                          src={require("../../assets/images/media/bg-img3.jpg")}
                          alt=""
                          id="bgimage3"
                        />
                      </Link>
                      <Link
                        className="bg-img4"
                        to="#"
                        onClick={() => custompagesswitcherdata.bgimage4()}
                      >
                        <img
                          src={require("../../assets/images/media/bg-img4.jpg")}
                          alt=""
                          id="bgimage4"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>LTR and RTL VERSIONS</h4>
                  <div className="skin-body">
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">LTR Version</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch8"
                            id="myonoffswitch4"
                            onClick={() => custompagesswitcherdata.RtltoLtr()}
                            className="onoffswitch2-checkbox"
                            defaultChecked
                          />
                          <label
                            htmlFor="myonoffswitch4"
                            className="onoffswitch2-label"
                          />
                        </p>
                      </div>
                      <div className="switch-toggle d-flex mt-2">
                        <span className="me-auto">RTL Version</span>
                        <p className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitch8"
                            id="myonoffswitch5"
                            onClick={() => custompagesswitcherdata.LtrtoRtl()}
                            className="onoffswitch2-checkbox"
                          />
                          <label
                            htmlFor="myonoffswitch5"
                            className="onoffswitch2-label"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swichermainleft">
                  <h4>Reset All Styles</h4>
                  <div className="skin-body">
                    <div className="switch_section my-4">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() => {
                          localStorage.clear();
                          document.querySelector("html").style = "";
                          custompagesswitcherdata.name();
                          custompagesswitcherdata.resetData();
                        }}
                        type="button"
                      >
                        Reset All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}
export default Custompagesswitcher;
