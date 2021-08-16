import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card } from "antd";

import "./personal.less";

import FlowProspeku from "../../assets/images/flow-personal.jpg";
import ArtboardPersonal from "../../assets/images/personal.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import AjukanKredit from "../../assets/images/personal/financing/financing.jpg";
import LihatProdukpinjaman from "../../assets/images/personal/financing/2-copy-15_2020-09-23/2-copy-15.jpg";
import AjukanPinjaman from "../../assets/images/personal/financing/2-copy-14_2020-09-23/2-copy-14.jpg";
import LihatStatus from "../../assets/images/personal/financing/2-copy-16_2020-09-23/2-copy-16.jpg";

const { Paragraph, Title } = Typography;

function PersonalFinancing() {

  return (
    <>
      <MetaAttributes
        title="Fitur Financing untuk Pengajuan Pembiayaan"
        description="Pengajuan KPR pelanggan Anda bisa lebih mudah dan praktis. Ajukan berkas hanya lewat aplikasi smartphone! "
        twittertitle="Fitur Financing untuk Pengajuan Pembiayaan"
        twitterdescription="Pengajuan KPR pelanggan Anda bisa lebih mudah dan praktis. Ajukan berkas hanya lewat aplikasi smartphone! "
        // twitterimage={}
        ogtitle="Fitur Financing untuk Pengajuan Pembiayaan"
        ogdescription="Pengajuan KPR pelanggan Anda bisa lebih mudah dan praktis. Ajukan berkas hanya lewat aplikasi smartphone! "
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
                <Link to="/personal/deals">Deals</Link>
                <Link to="/personal/financing" className="active">Financing</Link>
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
            <img className="image--article" src={AjukanKredit} alt="Ajukan Kredit Pinjaman ke Bank Partner jadi lebih mudah." />
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
                <Title level={3}>Ajukan Kredit Pinjaman ke Bank Partner jadi lebih mudah.</Title>
                <Paragraph>Prospeku mempermudah proses pengajuan kredit pinjaman Anda ke Bank Partner. Tersedia pilihan KPR, Kredit Renovasi Rumah, dan Kredit Multi Guna.</Paragraph>
                </span>
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="24" className="mb-lg-3">
            <Title level={2} style={{ textAlign: "center" }}>3 Keunggulan Pengajuan Lewat Fitur Financing</Title>
            <Paragraph style={{ textAlign: "center" }}>Isi semua informasi customer Anda. Lalu pilih Bank Partner sesuai preferensi Anda, kemudian ajukan produk pinjaman yang diinginkan.</Paragraph>
            </Col>
        </Row>
        <Row justify="center" className="mb-lg-5">
            <Col 
            xl={{ span: 8 }}
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="icon--article" style={{ textAlign: "center" }}>
                <img src={LihatProdukpinjaman} alt="Lihat dan pilih produk pinjaman sesuai kemampuan customer Anda." />
                <Paragraph><b>Lihat</b> dan <b>pilih produk pinjaman</b> sesuai kemampuan customer Anda.</Paragraph>
            </div>
            </Col>
            <Col 
            xl={{ span: 8 }}
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="icon--article" style={{ textAlign: "center" }}>
                <img src={AjukanPinjaman} alt="Ajukan pinjaman tanpa repot lewat aplikasi mobile Prospeku." />
                <Paragraph><b>Ajukan pinjaman</b> tanpa repot lewat aplikasi mobile Prospeku.</Paragraph>
            </div>
            </Col>
            <Col 
            xl={{ span: 8 }}
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="icon--article" style={{ textAlign: "center" }}>
                <img src={LihatStatus} alt="Lihat status dan tindaklanjuti pinjaman customer Anda dengan praktis di menu Riwayat." />
                <Paragraph><b>Lihat status</b> dan <b>tindaklanjuti</b> pinjaman customer Anda dengan praktis di menu Riwayat.</Paragraph>
            </div>
            </Col>
        </Row>
        </Col>
      </Row>
    </>
  );
}

export default PersonalFinancing;