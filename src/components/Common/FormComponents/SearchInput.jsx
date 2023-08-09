import React from "react";
import { Row, Col } from "react-bootstrap";
import DebouncedTextInput from "../../../utils/DeboundedTextInput";

const AccountSearch = ({ searchQuery, setSearchQuery, loading }) => {
    return (
        <Row className="row-sm">
            <Col lg={9}></Col>
            <Col lg={3}>
                <DebouncedTextInput
                    disabled={loading}
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label="Search"
                    duration={500}
                />
            </Col>
        </Row>
    );
};

export default AccountSearch;
