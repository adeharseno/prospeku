import React from 'react';
import { Col, Row } from "antd";

import "./confirmation.less";

function Reject() {

  return (
    <>
        <Row className="mb-lg-5">
            <Col
            xl={{ span: 18, offset: 3 }}
            lg={{ span: 20, offset: 2 }}
            md={{ span: 18, offset: 3 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
            >
                <Row className="confirmation text-center">
                    <Col
                        xl={{ span: 14, offset: 5 }}
                        lg={{ span: 14, offset: 5 }}
                        md={{ span: 16, offset: 4 }}
                        sm={{ span: 24, offset: 1 }}
                        xs={{ span: 24, offset: 1 }}
                    >
                        <h3 className="ant-typography">Konfirmasi diterima</h3>
                        <p>Pelajari tetang Prospeku Personal untuk memudahkan Anda dalam kelola properti dan customer Anda.</p>
                        <a href="https://prospeku.com/" className="ant-btn ant-btn-md ant-btn-secondary">Lihat Website</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default Reject;