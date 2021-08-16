import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card } from "antd";

import "./homepage.less";

import IllustrationBanner from "../../assets/images/artboard-1-3-x.png";
import FlowProspeku from "../../assets/images/flow.png";
import ArtboardPersonal from "../../assets/images/personal.png";
import ArtboardBisnis from "../../assets/images/business.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";


import OCBC from "../../assets/images/company/ocbc.png";
import R123 from "../../assets/images/company/r-123.png";
import N99co from "../../assets/images/company/99-co.png";
import CicilSewa from "../../assets/images/company/cicil-sewa.png";

const { Paragraph, Title } = Typography;

function Homepage() {

  return (
    <>
      <MetaAttributes
        title="Bantu Anda Jadi Agen Properti Berkualitas"
        description="Prospeku mempermudah kantor Agen & Agen Properti untuk memaksimalkan pemasaran propertinya. Cek manfaatnya sekarang!
        "
        twittertitle="Bantu Anda Jadi Agen Properti Berkualitas"
        twitterdescription="Prospeku mempermudah kantor Agen & Agen Properti untuk memaksimalkan pemasaran propertinya. Cek manfaatnya sekarang!"
        // twitterimage={}
        ogtitle="Bantu Anda Jadi Agen Properti Berkualitas"
        ogdescription="Prospeku mempermudah kantor Agen & Agen Properti untuk memaksimalkan pemasaran propertinya. Cek manfaatnya sekarang!"
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
                            Kelola <span>customer</span> dan <span>pemasaran propertimu</span> dengan praktis
                        </Title>
                        <Paragraph style={{ fontSize: 16 }}>
                            Prospeku siap membantu Agen properti dalam mengelola customer lebih baik dan memasarkan properti lebih mudah. Semua dalam satu aplikasi!
                        </Paragraph>
                        <a href="https://prospeku.onelink.me/dWWj?pid=Website" target="_blank">
                          <img src={AppStore} alt="AppStore" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=co.onelabs.prospeku" target="_blank">
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
                <img src={IllustrationBanner} style={{ width: "100%" }} alt="Artboard" />
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
          className="mb-5"
        >
          <Card 
            bordered={false} 
            className="card--main"
            style={{ textAlign: "center" }}
          >
            <Title level={4} className="mb-lg-5">Prospeku akan membantu Anda mengelola proses penjualan dari awal hingga akhir</Title>
            <img 
              src={FlowProspeku} 
              style={{ width: "90%" }}
              alt="Prospeku"
            />
          </Card>
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
          <Row>
            <Col span="24" className="mb-lg-3">
              <Title level={2} style={{ textAlign: "center" }} className="mb-3">Pilih yang sesuai dengan kebutuhan Anda</Title>
            </Col>
          </Row>
          <Row className="mb-lg-5">
            <Col
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ display: 'flex' }}
            >
              <img src={ArtboardPersonal} style={{ width: "80%" }} className="mb-2" alt="Personal" />
            </Col>
            <Col
              xl={{ span: 11, offset: 1 }}
              lg={{ span: 11, offset: 1 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ display: 'flex' }}
            >
              <div className="center-vertical">
                  <span>
                      <Title level={2} className="title--custom">
                          Personal
                      </Title>
                      <ul className="list--standard">
                        <li>Daftar sebagai agen properti</li>
                        <li>Input data listing properti</li>
                        <li>Promosikan listing</li>
                        <li>Tanggapi minat klien/calon customer</li>
                        <li>Buat janji/agenda</li>
                        <li>Pantau progress</li>
                        <li>Bantu ajukan pembiayaan customer</li>
                        <li>Selesaikan penawaran</li>
                      </ul>
                      <Link to="/personal/listing" className="ant-btn ant-btn-md ant-btn-primary">Pelajari Selengkapnya</Link>
                  </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ display: 'flex' }}
              className="order-1"
            >
              <div className="center-vertical">
                  <span>
                      <Title level={2} className="title--custom">
                        Bisnis
                      </Title>
                      <ul className="list--standard">
                        <li>Daftar sebagai kantor agen</li>
                        <li>Undang member agen</li>
                        <li>Kelola dan promosikan listing member agen</li>
                        <li>Pantau progress member agen</li>
                        <li>Lihat laporan pemasaran</li>
                        <li>Lihat performance member agen (setiap periode waktu)</li>
                      </ul>
                      <Link to="/bisnis" className="ant-btn ant-btn-md ant-btn-primary">Pelajari Selengkapnya</Link>
                  </span>
              </div>
            </Col>
            <Col
              xl={{ span: 12 }}
              lg={{ span: 12 }}
              md={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ display: 'flex' }}
              className="order-2"
            >
              <img src={ArtboardBisnis} style={{ width: "80%" }} className="mb-2" alt="Bisnis" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          xl={{ span: 16, offset: 4 }}
          lg={{ span: 16, offset: 4 }}
          md={{ span: 16, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
          <Row className="mb-lg-4">
            <Col span="24">
              <Title level={3} className="mb-3" style={{ textAlign: "center" }}>Partner Prospeku</Title>
            </Col>
            <Col 
              span="24"
              style={{ textAlign: "center" }}
            >
              <ul className="list--partner mb-4">
                <li><img src={OCBC} alt="OCBC" /></li>
                <li><img src={R123} alt="R123" /></li>
                <li><img src={N99co} alt="N99co" /></li>
                <li><img src={CicilSewa} alt="CicilSewa" /></li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-lg-4">
            <Col span="24" className="mb-5">
              <Card 
                className="card--kontak mb-3"
                style={{ textAlign: "center" }}
                bordered={false}
              >
                <Title level={4}>Ingin kantor agen Anda lebih efektif mengelola listing &amp; deals?</Title>
                <Paragraph>Hubungi kami di:</Paragraph>
                <a href="http://wa.link/xnqayu" target="_blank" className="ant-btn ant-btn-md ant-btn-primary">Whatsapp</a>
                <a href="mailto:halo@prospeku.com" className="ant-btn ant-btn-md ant-btn-primary">Email</a>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
