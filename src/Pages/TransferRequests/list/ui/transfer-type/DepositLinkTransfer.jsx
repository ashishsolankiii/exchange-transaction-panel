import React from "react";

function DepositLinkTransfer({ data }) {
  return (
    <>
      <tr>
        <th style={{ width: "45%", whiteSpace: "nowrap" }}>Platform</th>
        <td className="text-uppercase">Deposit {data.type}</td>
      </tr>

      <tr>
        <th>Link</th>
        <td>{data.depositLink}</td>
      </tr>
    </>
  );
}

export default DepositLinkTransfer;
