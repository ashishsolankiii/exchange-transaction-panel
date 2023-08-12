import React from "react";

function CashTransfer({ data }) {
  return (
    <>
      <div className="py-1">
        <span className="fw-bold">Platform: </span>
        <span className="text-uppercase">{data.type}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Contact: </span>
        <span>{data.mobileNumber || ""}</span>
      </div>
    </>
  );
}

export default CashTransfer;
