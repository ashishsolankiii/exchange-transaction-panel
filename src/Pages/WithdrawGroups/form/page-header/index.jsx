import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const baseUrl = process.env.PUBLIC_URL;

function PageHeader({ editMode = false, onExport }) {
  return (
    <div className="page-header">
      <div>
        <h1 className="page-title">WITHDRAW GROUPS</h1>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item">Withdraw Groups</Breadcrumb.Item>

          <div className="breadcrumb-item breadcrumds" aria-current="page">
            <Link to={`${baseUrl}/withdraw-groups`}>Listing</Link>
          </div>

          <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
            {editMode ? "Update" : "Create"}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default PageHeader;
