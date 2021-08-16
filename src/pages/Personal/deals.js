import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card } from "antd";

import "./personal.less";

import FlowProspeku from "../../assets/images/flow-personal.jpg";
import ArtboardPersonal from "../../assets/images/personal.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import KelolaProgress from "../../assets/images/personal/deals/1.jpg";
import MakinProduktif from "../../assets/images/personal/deals/2.jpg";
import TambahkanCatatan from "../../assets/images/personal/deals/3.jpg";

const { Paragraph, Title } = Typography;

function PersonalDeals() {

  return (
    <>
      <MetaAttributes
        title="Atur Progress Penjualan & Deals Makin Lancar"
        description="Kelola semua progress penjualan, buat agenda tiap deals agar makin produktif, dan tambahkan catatan perkembangan tiap deals."
        twittertitle="Atur Progress Penjualan & Deals Makin Lancar"
        twitterdescription="Kelola semua progress penjualan, buat agenda tiap deals agar makin produktif, dan tambahkan catatan perkembangan tiap deals."
        // twitterimage={}
        ogtitle="Atur Progress Penjualan & Deals Makin Lancar"
        ogdescription="Kelola semua progress penjualan, buat agenda tiap deals agar makin produktif, dan tambahkan catatan perkembangan tiap deals."
        // ogimage={}
        // ogimageurl={}
        // ogimagealt=""
      />
      <Row className="ant-section-top mb-lg-5 banner">
        <Col
          xl={{ span: 18, offset: 3 }}
          lg={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row>
            <Col
              xl={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              md={{ span: 20, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
              style={{ display: 'flex' }}
              className="order-1"
            >
                <div className="center-vertical">
                    <span>
                        <Title level={1} className="wrap-bg-title">
                            Gabung bersama kami &amp; nikmati berbagai layanan Prospeku Personal
                        </Title>
                        <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                          <img src={AppStore} alt="AppStore" />
                        </a>
                        <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                          <img src={GooglePlay} alt="GooglePlay" />
                        </a>
                    </span>
                </div>
            </Col>
            <Col
              xl={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              md={{ span: 10, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
              className="order-2 mb-5"
            >
                <img src={ArtboardPersonal} style={{ width: "90%" }} alt="Artboard" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-lg-5">
        <Col
          xl={{ span: 18, offset: 3 }}
          lg={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Card 
            bordered={false} 
            className="card--main"
            style={{ textAlign: "center" }}
          >
            <Title level={4} className="mb-lg-5">Prospeku akan membantu Anda mengelola proses penjualan dari awal hingga akhir</Title>
            <img 
              src={FlowProspeku} 
              style={{ width: "100%" }}
              alt="Prospeku" 
              className="mb-lg-5"
            />
          </Card>
        </Col>
      </Row>
      {/* <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
          Affix top
      </Affix> */}
      <Row className="ant-section-top mb-lg-5">
        <Col
          xl={{ span: 18, offset: 3 }}
          lg={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
        <Row justify="center" className="mb-lg-5">
            <div className="tablink">
                <Link to="/personal/listing">Listing</Link>
                <Link to="/personal/kontak">Kontak</Link>
                <Link to="/personal/deals" className="active">Deals</Link>
                <Link to="/personal/financing">Financing</Link>
            </div>
        </Row>
        <Row justify="center" className="mb-lg-5">
            <Col 
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            >
                <img className="image--article" src={KelolaProgress} alt="Kelola progress penjualan setiap customer Anda dari tahap awal komunikasi hingga closing." />
            </Col>
            <Col 
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            >
            <div className="center-vertical">
                <span>
                <Title level={3}>Kelola progress penjualan setiap customer Anda dari tahap awal komunikasi hingga closing.</Title>
                <Paragraph>Ketika mendapatkan customer baru yang tertarik dengan listing Anda, jangan lupa untuk membuat deals supaya Anda dapat melacak progress penjualan. Setiap informasi deals yang Anda buat dapat menjadi evaluasi ke depan dalam menawarkan properti, sehingga penjualan akan menjadi lebih efektif.</Paragraph>
                </span>
            </div>
            </Col>
        </Row>
        <Row justify="center" className="mb-lg-5">
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
                    <Title level={3}>Makin produktif dengan membuat agenda terkait deals dengan customer.</Title>
                    <Paragraph>Catat setiap agenda kegiatan terkait deals yang telah Anda buat. Contohnya ketika akan bertemu dengan customer, atau melakukan survey. Hal ini dapat membantu Anda dalam mengatur jadwal selama bekerja.</Paragraph>
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
            <img className="image--article" src={MakinProduktif} alt="Makin produktif dengan membuat agenda terkait deals dengan customer." />
            </Col>
        </Row>
        <Row justify="center" className="mb-lg-5">
            <Col
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            >
            <img className="image--article" src={TambahkanCatatan} alt="Tambahkan catatan perkembangan setiap deals." />
            </Col>
            <Col
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ display: 'flex' }}
            >
            <div className="center-vertical">
                <span>
                    <Title level={3}>Tambahkan catatan perkembangan setiap deals.</Title>
                    <Paragraph>Setiap informasi catatan deals yang Anda buat dapat dijadikan bahan evaluasi untuk menawarkan properti ke depannya, sehingga penjualan akan menjadi lebih efektif.</Paragraph>
                </span>
            </div>
            </Col>
        </Row>
        </Col>
      </Row>
    </>
  );
}

export default PersonalDeals;