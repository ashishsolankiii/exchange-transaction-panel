import React from "react";

function PlatformTransfer({ data }) {
  return (
    <>
      <div className="py-1">
        <span className="fw-bold">Platform: </span>
        <span className="text-uppercase">{data.platformName}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Name: </span>
        <span>{data.platformDisplayName}</span>
      </div>

      <div className="py-1">
        <span className="fw-bold">Address: </span>
        <span>{data.platformDisplayName}</span>
      </div>
    </>
  );
}

export default PlatformTransfer;
