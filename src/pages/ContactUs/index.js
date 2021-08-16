import React from 'react';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography } from "antd";

import "./contact.less";

import PromosikanListing from "../../assets/images/masthead@2x.png";


const { Paragraph, Title } = Typography;

function ContactUs() {

  return (
    <>
        <MetaAttributes
            title="Hubungi Kami dan Kami Siap Membantu"
            description="Silakan hubungi kami untuk memberikan saran / kritik, pertanyaan pers, kerja sama, dan berbagai kebutuhan lainnya.
            "
            twittertitle="Hubungi Kami dan Kami Siap Membantu"
            twitterdescription="Silakan hubungi kami untuk memberikan saran / kritik, pertanyaan pers, kerja sama, dan berbagai kebutuhan lainnya."
            // twitterimage={}
            ogtitle="Hubungi Kami dan Kami Siap Membantu"
            ogdescription="Silakan hubungi kami untuk memberikan saran / kritik, pertanyaan pers, kerja sama, dan berbagai kebutuhan lainnya."
            // ogimage={}
            // ogimageurl={}
            // ogimagealt=""
        />
        <Row justify="center" className="mt-5 mb-5">
            <Col
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            className="order-1"
            >
            <div className="center-vertical">
                <span>
                    <Title level={1}>Hubungi Kami</Title>
                    <Paragraph>Tim kami siap membantu Anda mengelola prospek dan pemasaran properti. Hubungi kami di kontak yang tercantum, pada hari kerja pukul 09.00 - 17.00 WIB.</Paragraph>
                    <a href="http://wa.link/xnqayu" target="_blank" className="ant-btn ant-btn-md ant-btn-primary ant-btn-primary-custom mr-2">Chat Kami</a>
                    <a href="mailto:halo@prospeku.com" className="ant-btn ant-btn-md ant-btn-primary ant-btn-primary-custom">Email Kami</a>
                </span>
            </div>
            </Col>
            <Col
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            className="order-2"
            >
                <img className="image--article mb-5 mt-5" style={{ width: "100%" }} src={PromosikanListing} alt="Promosikan Listing" />
            </Col>
        </Row>
    </>
  );
}

export default ContactUs;
