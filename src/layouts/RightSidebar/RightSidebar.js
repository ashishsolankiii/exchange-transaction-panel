import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import face6 from "../../assets/images/faces/6.jpg";
import face9 from "../../assets/images/faces/9.jpg";
import face11 from "../../assets/images/faces/11.jpg";
import face10 from "../../assets/images/faces/10.jpg";
import face12 from "../../assets/images/faces/12.jpg";
import face4 from "../../assets/images/faces/4.jpg";
import face7 from "../../assets/images/faces/7.jpg";
import face2 from "../../assets/images/faces/2.jpg";
import face13 from "../../assets/images/faces/13.jpg";
import face14 from "../../assets/images/faces/14.jpg";
import face15 from "../../assets/images/faces/15.jpg";
export function RightSidebar() {
  const [rightsidebartoogle, setSidebartoogleright] = useState(true);
  function Outhover(toggle) {
    setSidebartoogleright(!toggle);
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
  }

  return (
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="panel panel-primary card mb-0 shadow-none border-0">
        <div className="tab-menu-heading border-0 d-flex p-3">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ms-auto">
            <Link
              to="#"
              className="sidebar-icon text-end float-end me-1"
              onClick={() => Outhover(rightsidebartoogle)}
            >
              <i className="fe fe-x text-white"></i>
            </Link>
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu border-bottom"></div>
          <Tabs
            defaultActiveKey="side1"
            className="nav panel-tabs tab-content rightside flex-nowrap"
            variant=""
          >
            <Tab eventKey="side1"  title="Profile">
              <div className="tab-pane active" id="side1">
                <div className="card-body text-center">
                  <div className="dropdown user-pro-body">
                    <div className="">
                      <img
                        alt="user-img"
                        className="avatar avatar-xl brround mx-auto text-center"
                        src={face6}
                      />
                      <span className="avatar-status profile-status bg-green"></span>
                    </div>
                    <div className="user-info mg-t-20">
                      <h6 className="fw-semibold  mt-2 mb-0">
                        Mintrona Pechon
                      </h6>
                      <span className="mb-0 text-muted fs-12">
                        Premium Member
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="dropdown-item d-flex border-bottom border-top"
                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-user me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">My Profile</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Profile Personal information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/components/defaultChat/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-message-square me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">My Messages</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Person message information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-mail me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">My Mails</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Persons mail information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-settings me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">Account Settings</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Settings Information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/custompages/login`}
                >
                  <div className="d-flex">
                    <i className="fe fe-power me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">Sign Out</h6>
                      <p className="tx-12 mb-0 text-muted">Account Signout</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Tab>

            <Tab eventKey="side2" title="Contacts">
              <div className="tab-pane" id="side2">
                <div className="list-group list-group-flush ">
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        className="avatar avatar-md brround cover-image "
                        src={face9}
                        alt=""
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Mozelle Belt</div>
                      <p className="mb-0 tx-12 text-muted">
                        mozellebelt@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face11}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Florinda Carasco</div>
                      <p className="mb-0 tx-12 text-muted">
                        florindacarasco@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face10}
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Alina Bernier</div>
                      <p className="mb-0 tx-12 text-muted">
                        alinaaernier@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face2}
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Zula Mclaughin</div>
                      <p className="mb-0 tx-12 text-muted">
                        zulamclaughin@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face13}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Isidro Heide</div>
                      <p className="mb-0 tx-12 text-muted">
                        isidroheide@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face12}
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Mozelle Belt</div>
                      <p className="mb-0 tx-12 text-muted">
                        mozellebelt@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face4}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Florinda Carasco</div>
                      <p className="mb-0 tx-12 text-muted">
                        florindacarasco@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face7}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Alina Bernier</div>
                      <p className="mb-0 tx-12 text-muted">
                        alinabernier@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face2}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Zula Mclaughin</div>
                      <p className="mb-0 tx-12 text-muted">
                        zulamclaughin@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face14}
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Isidro Heide</div>
                      <p className="mb-0 tx-12 text-muted">
                        isidroheide@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face11}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Florinda Carasco</div>
                      <p className="mb-0 tx-12 text-muted">
                        florindacarasco@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face9}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Alina Bernier</div>
                      <p className="mb-0 tx-12 text-muted">
                        alinabernier@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face15}
                      />
                      <span className="avatar-status bg-success rcontacts"></span>
                    </div>
                    <div className="">
                      <div className="fw-semibold">Zula Mclaughin</div>
                      <p className="mb-0 tx-12 text-muted">
                        zulamclaughin@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item d-flex  align-items-center">
                    <div className="me-2">
                      <img
                        alt=""
                        className="avatar avatar-md brround cover-image"
                        src={face4}
                      />
                    </div>
                    <div className="">
                      <div className="fw-semibold">Isidro Heide</div>
                      <p className="mb-0 tx-12 text-muted">
                        isidroheide@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="side3" title="Settings">
              <div className="tab-pane" id="side3">
                <Link className="dropdown-item bg-gray-100 pd-y-10" to="#">
                  Account Settings
                </Link>
                <div className="card-body">
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Updates Automatically
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Allow Location Map
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Contacts
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Notication
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Tasks Statistics
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Email Notification
                      </span>
                    </label>
                  </div>
                </div>
                <Link className="dropdown-item bg-gray-100 pd-y-10" to="#">
                  General Settings
                </Link>
                <div className="card-body">
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show User Online
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Website Notication
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Recent activity
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Logout Automatically
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Aloow All Notifications
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
