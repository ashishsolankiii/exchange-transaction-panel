import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Breadcrumb, Card, Col, Modal, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const { _id } = JSON.parse(localStorage.getItem('user_info')) || {};

  return (
    <div>
      <div className="page-header ">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>

            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Settlement Pts</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp end={0} separator="," start={0} duration={2.94} />
                      </h3>
                      {/* <p className="text-muted mb-0">
                        <span className="text-danger me-1">
                          <i className="fa fa-chevron-circle-down text-danger me-1"></i>
                          <span>0.2% </span>
                        </span>
                        last month
                      </p> */}
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-primary-gradient box-shadow-success brround  ms-auto">
                        <i className="fe fe-layers text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>

    // model pop up
  );
}
