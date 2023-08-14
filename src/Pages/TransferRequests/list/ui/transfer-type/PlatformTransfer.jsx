import React from "react";

function PlatformTransfer({ data }) {
  return (
    <>
      <tr>
        <th style={{ width: "45%", whiteSpace: "nowrap" }}>Platform</th>
        <td className="text-uppercase">{data.platformName}</td>
      </tr>

      <tr>
        <th>Name</th>
        <td>{data.platformDisplayName}</td>
      </tr>

      <tr>
        <th>Address</th>
        <td>{data.platformAddress}</td>
      </tr>
    </>
  );
}

export default PlatformTransfer;
