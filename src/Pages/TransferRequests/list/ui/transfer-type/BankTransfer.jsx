import React from "react";

function BankTransfer({ data }) {
  return (
    <>
      <div className="py-1">
        <span className="fw-bold">Platform: </span>
        <span className="text-uppercase">{data.type}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Bank Name: </span>
        <span>{data.bankName || ""}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Account Name: </span>
        <span>{data.accountHolderName || ""}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Account Number: </span>
        <span>{data.accountNumber || ""}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Account Type: </span>
        <span>{data.accountType || ""}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">IFSC Code: </span>
        <span>{data.ifsc || ""}</span>
      </div>
    </>
  );
}

export default BankTransfer;
