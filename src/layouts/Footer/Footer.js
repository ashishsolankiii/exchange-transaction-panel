import React from 'react';
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<Row className="align-items-center flex-row-reverse">
					<Col className="text-center" sm={12} md={12} lg={12}>
						Copyright © 2023 <Link to="#">CA Exchange</Link>. All rights reserved
					</Col>
				</Row>
			</div>
		</div>

	);
}

export default Footer;
