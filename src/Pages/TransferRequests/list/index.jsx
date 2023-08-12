import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import SearchInput from "../../../components/Common/FormComponents/SearchInput";
import { getTransferRequests } from "../transferRequestsApi";
import PageHeader from "./ui/page-header";
import TransferType from "./ui/transfer-type";

export default function TransferRequestsListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [direction, setDirection] = useState("desc");

  const columns = [
    {
      name: "SR.",
      selector: (row, index) => (currentPage - 1) * perPage + (index + 1),
      sortable: false,
      width: "80px",
    },
    {
      name: "USER",
      selector: (row) => [row.user.username],
      sortable: true,
      sortField: "username",
    },
    {
      name: "TRANSFER TYPE",
      selector: (row) => [row.transferType.type],
      sortable: true,
      sortField: "transferType",
      cell: (row) => <TransferType data={row.transferType} />,
      width: "300px",
    },
    {
      name: "WITHDRAW GROUP",
      selector: (row) => [row.withdrawGroup.type],
      sortable: true,
      sortField: "withdrawGroup",
      cell: (row) => <div className="text-uppercase fw-semibold">{row.withdrawGroup.type}</div>,
    },
    {
      name: "AMOUNT",
      selector: (row) => [row.amount],
      sortable: true,
      sortField: "amount",
    },
    {
      name: "STATUS",
      selector: (row) => [row.status],
      sortable: true,
      sortField: "status",
    },
    {
      name: "MESSAGE",
      selector: (row) => [row.message],
      sortable: true,
      sortField: "message",
    },
  ];

  const handleSort = (column, sortDirection) => {
    setSortBy(column.sortField);
    setDirection(sortDirection);
    setCurrentPage(1);
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await getTransferRequests({ page: currentPage, perPage, sortBy, direction, searchQuery });
    setData(result.records);
    setTotalRows(result.totalRecords);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPage, searchQuery, sortBy, direction]);

  return (
    <div>
      <PageHeader />

      <Row className="row-sm">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} loading={loading} />

              <div className="table-responsive export-table">
                <DataTable
                  columns={columns}
                  data={data}
                  // actions={actionsMemo}
                  // contextActions={contextActions}
                  // onSelectedRowsChange={handleRowSelected}
                  // clearSelectedRows={toggleCleared}
                  // selectableRows
                  pagination
                  highlightOnHover
                  progressPending={loading}
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangeRowsPerPage={setPerPage}
                  onChangePage={setCurrentPage}
                  sortServer
                  onSort={handleSort}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
