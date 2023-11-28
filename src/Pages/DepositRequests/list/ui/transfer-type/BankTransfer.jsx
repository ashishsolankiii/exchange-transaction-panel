import React from "react";

function BankTransfer({ data }) {
  return (
    <>
      <tr>
        <th style={{ width: "45%", whiteSpace: "nowrap" }}>Platform</th>
        <td className="text-uppercase">{data.type}</td>
      </tr>

      <tr>
        <th>Bank name</th>
        <td>{data.bankName || "-"}</td>
      </tr>

      <tr>
        <th>Account name</th>
        <td>{data.accountHolderName || "-"}</td>
      </tr>

      <tr>
        <th>Account no</th>
        <td>{data.accountNumber || "-"}</td>
      </tr>

      <tr>
        <th>Account type</th>
        <td className="text-uppercase">{data.accountType || "-"}</td>
      </tr>

      <tr>
        <th>IFSC code</th>
        <td>{data.ifsc || "-"}</td>
      </tr>
    </>
  );
}

export default BankTransfer;
