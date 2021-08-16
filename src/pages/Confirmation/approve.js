import React from 'react';
import { Col, Row } from "antd";
import { withRouter } from 'react-router-dom';
import "./confirmation.less";

import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";

function Approve() {
  
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
                        <p>Nomor Anda sudah terdaftar di <b>{window.sessionStorage.getItem('companyName') !== undefined ? window.sessionStorage.getItem('companyName') : '' }</b>. Yuk, mulai kelola properti,dan customer lebih baik &amp; mudah hanya dalam satu aplikasi!</p>
                        <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                            <img src={AppStore} alt="AppStore" />
                        </a>
                        <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                            <img src={GooglePlay} alt="GooglePlay" />
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default withRouter(Approve)