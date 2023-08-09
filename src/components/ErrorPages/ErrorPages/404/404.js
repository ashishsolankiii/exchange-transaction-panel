import React from "react";
import { Link } from "react-router-dom";
import * as custompagesswitcherdata from "../../../../data/Switcher/Custompagesswitcherdata"
export default function Errorpage404() {
  return (
    <div className="error-bg">
      <div className="page">
        <div className="dropdown float-end custom-layout">
                <div className="demo-icon nav-link icon mt-4 bg-primary" onClick={()=>custompagesswitcherdata.Swichermainright()}>
                    <i className="fe fe-settings fa-spin text_primary"></i>
                </div>
            </div>
        <div className="page-content error-page error2" onClick={()=>custompagesswitcherdata.Swichermainrightremove()}>
          <div className="container text-center">
            <div className="error-template">
              <h1 className="display-1 text-dark mb-2">
                404<span className="fs-20">error</span>
              </h1>
              <h5 className="error-details text-dark">
                Sorry, an error has occured, Requested page not found!
              </h5>
              <div className="text-center">
                <Link
                  to={`${process.env.PUBLIC_URL}/dashboard/`}
                  className="btn btn-primary mt-5 mb-5"
                >
                  
                  <i className="fa fa-long-arrow-left"></i> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
