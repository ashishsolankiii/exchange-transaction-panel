import { CBadge } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { Link } from "react-router-dom";
import SearchInput from "../../../components/Common/FormComponents/SearchInput";
import { showAlert } from "../../../utils/alertUtils";
import { deleteWithdrawGroup, getWithdrawGroups } from "../withdrawGroupApi";
import PageHeader from "./ui/page-header";
import { userInfo } from "../../../lib/default-values";

export default function WithdrawGroupListing() {
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
      name: "W.NO",
      selector: (row, index) => (currentPage - 1) * perPage + (index + 1),
      sortable: false,
    },
    {
      name: "TYPE",
      selector: (row) => [row.type.toUpperCase()],
      sortable: true,
      sortField: "name",
      cell: (row) => <div className="mb-0 fw-semibold">{row.type.toUpperCase()}</div>,
    },
    {
      name: "COMMISSION (%)",
      selector: (row) => [`${Number(row.commission).toFixed(1)}%`],
      sortable: true,
      sortField: "name",
    },
    {
      name: "REMARKS",
      selector: (row) => [row.remark],
      sortable: true,
      sortField: "remark",
    },
    {
      name: "STATUS",
      selector: (row) => [row.isActive],
      sortable: true,
      sortField: "isActive",
      cell: (row) => (
        <h5 className="mb-0">
          <CBadge color={row.isActive ? "success" : "danger"}>{row.isActive ? "ACTIVE" : "IN ACTIVE"}</CBadge>
        </h5>
      ),
    },
    {
      name: "MIN AMOUNT",
      selector: (row) => [row.minAmount],
      sortable: true,
      sortField: "multiplier",
    },
    {
      name: "MAX AMOUNT",
      selector: (row) => [row.maxAmount],
      sortable: true,
      sortField: "multiplier",
    },
    {
      name: "ACTIONS",
      cell: (row) => (
        <div style={{ whiteSpace: "nowrap" }}>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit Group</Tooltip>}>
            <Link to="/withdraw-groups/edit" state={{ id: row._id }} className="btn btn-primary">
              <i className="fa fa-edit" />
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="top" overlay={<Tooltip>Delete Group</Tooltip>}>
            <button onClick={(e) => handleDelete(row._id)} className="btn btn-danger ms-2">
              <i className="fa fa-trash" />
            </button>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const handleSort = (column, sortDirection) => {
    setSortBy(column.sortField);
    setDirection(sortDirection);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    showAlert(id, deleteRecord);
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await getWithdrawGroups({ page: currentPage, perPage, sortBy, direction, searchQuery, parentUserId: userInfo.superUserId });
    setData(result.records);
    setTotalRows(result.totalRecords);
    setLoading(false);
  };

  const deleteRecord = async (id) => {
    setLoading(true);
    const deleted = await deleteWithdrawGroup(id);
    if (deleted) {
      fetchData();
    }
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
