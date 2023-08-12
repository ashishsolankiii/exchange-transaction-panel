import React from "react";

function DepositLinkTransfer({ data }) {
  return (
    <>
      <div className="py-1">
        <span className="fw-bold">Platform: </span>
        <span className="text-uppercase">Deposit Link</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Link: </span>
        <span>{data.depositLink}</span>
      </div>
    </>
  );
}

export default DepositLinkTransfer;
