import React from "react";

function CashTransfer({ data }) {
  return (
    <>
      <tr>
        <th style={{ width: "45%", whiteSpace: "nowrap" }}>Platform</th>
        <td className="text-uppercase">{data.type}</td>
      </tr>

      <tr>
        <th>Contact</th>
        <td>{data.mobileNumber}</td>
      </tr>
    </>
  );
}

export default CashTransfer;
