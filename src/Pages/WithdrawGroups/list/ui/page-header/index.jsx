import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const baseUrl = process.env.PUBLIC_URL;

function PageHeader({ onExport }) {
  return (
    <div className="page-header">
      <div>
        <h1 className="page-title">WITHDRAW GROUPS</h1>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item">Withdraw Groups</Breadcrumb.Item>

          <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
            Listing
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="ms-auto pageheader-btn">
        <Link to={`${baseUrl}/withdraw-groups/add`} className="btn btn-primary btn-icon text-white">
          <i className="fe fe-plus pe-1"></i> CREATE WITHDRAW GROUP
        </Link>

        {/* <button className="ms-3 btn btn-success btn-icon text-white" onClick={onExport}>
          <i className="fe fe-log-in pe-1" /> EXPORT
        </button> */}
      </div>
    </div>
  );
}

export default PageHeader;
