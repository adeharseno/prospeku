import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, BackTop } from 'antd';

import Facebook from '../../assets/images/social-media/facebook/rectangle.png';
import Instagram from '../../assets/images/social-media/instagram/group-7.png';
// import LinkedIn from '../../assets/images/social-media/linkedin/rectangle.png';

import AppStore from "../../assets/images/apple-store.png";
import GooglePlay from "../../assets/images/google-play.png";

import Arrow from "../../assets/images/down.png";

// style
import './footer.less';

function FooterPage() {
    if (window.location.pathname === "/confirmation" || window.location.pathname === "/confirmation/approve" || window.location.pathname === "/confirmation/reject") {
        return ( <></> )
    } else {
        return (
            <>
            <Row className="ant-footer footer--custom" type="flex" middle="center">
                <Col
                    xl={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                    >
                    <Row gutter={16} type="flex" align="middle">
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 24 }}
                            lg={{ span: 17 }}
                            className="text-center text-lg-left mb-4 mb-lg-0">
                            <div className="footer--menu mb-0 mb-lg-4">
                                <Link to="/faq">FAQ</Link>
                                <Link to="/hubungi-kami">Hubungi Kami</Link>
                                <Link to="/syarat-dan-ketentuan">Syarat dan Ketentuan</Link>
                                <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} type="flex" className="mb-2" align="middle">
                        <Col
                            xs={{ span: 24 }}
                            sm={{ span: 24 }}
                            lg={{ span: 12 }}
                            className="text-center text-lg-left mb-4 mb-lg-0">
                            <Button
                                className="footer--social"
                                type="link"
                                href="https://www.facebook.com/prospeku"
                                target="_blank"
                                ghost>
                                <img src={Facebook} alt="Facebook" />
                            </Button>
                            <Button
                                className="footer--social"
                                type="link"
                                href="https://www.instagram.com/prospeku_id/"
                                target="_blank"
                                ghost>
                                <img src={Instagram} alt="Instagram" />
                            </Button>
                            {/* <Button
                                className="footer--social"
                                type="link"
                                href=""
                                target="_blank"
                                ghost>
                                <img src={LinkedIn} alt="LinkedIn" />
                            </Button> */}
                        </Col>
                        <Col 
                            xs={{ span: 24 }} 
                            sm={{ span: 24 }} 
                            lg={{ span: 12 }}
                            className="text-center text-lg-right">
                            <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                                <img src={AppStore} className="mr-3" alt="AppStore" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=co.onelabs.prospeku" target="_blank">
                                <img src={GooglePlay} alt="GooglePlay" />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="ant-footer footer--end">
                <Col
                    xl={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                    >
                    <Row gutter={16} type="flex" align="middle">
                        <Col span={24}>
                            ©2019 Prospeku . All rights reserved
                        </Col>
                    </Row>
                </Col>
            </Row>
            <BackTop>
                <span>
                    <img src={Arrow} alt="Arrow" />
                </span>
            </BackTop>
            </>
        );
    }
    
} 

export default FooterPage;