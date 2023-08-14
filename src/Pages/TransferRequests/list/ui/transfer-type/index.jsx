import React from "react";
import BankTransfer from "./BankTransfer";
import CashTransfer from "./CashTransfer";
import DepositLinkTransfer from "./DepositLinkTransfer";
import PlatformTransfer from "./PlatformTransfer";
import "./transferType.css";

const transferTypes = {
  CASH: "cash",
  BANK: "bank",
  PLATFORM: "platform",
  LINK: "link",
};

function TransferType({ data }) {
  const renderTransfer = {
    [transferTypes.CASH]: <CashTransfer data={data} />,
    [transferTypes.BANK]: <BankTransfer data={data} />,
    [transferTypes.PLATFORM]: <PlatformTransfer data={data} />,
    [transferTypes.LINK]: <DepositLinkTransfer data={data} />,
  };

  return (
    <table className="mb-0 table table-sm table-borderless">
      <tbody>{renderTransfer[data.type]}</tbody>
    </table>
  );
}

export default TransferType;
