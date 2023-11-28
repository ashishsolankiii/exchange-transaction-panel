import { CSpinner } from "@coreui/react";
import React, { useState } from "react";
import FormSelect from "../../../../../components/Common/FormComponents/FormSelect";
import { updateDepositRequest, updateDepositRequestStatus } from "../../../depositRequestsApi";

function DepositRequestStatus({ row }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(row.status);

  const handleStatusChange = async (e) => {
    const { value } = e.target;
    if (!value) {
      return;
    }
    setLoading(true);
    const updated = await updateDepositRequestStatus({ ...row, fieldName: 'status', status: value }, "Status updated.");
    setLoading(false);
    if (!updated) {
      return;
    }
    setStatus(value);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center w-75 pt-2">
          <CSpinner size="sm" />
        </div>
      ) : (
        <FormSelect value={status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="approve">Approved</option>
          <option value="reject">Reject</option>
        </FormSelect>
      )}
    </>
  );
}

export default DepositRequestStatus;
