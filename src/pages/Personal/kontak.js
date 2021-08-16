import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card } from "antd";

import "./personal.less";

import FlowProspeku from "../../assets/images/flow-personal.jpg";
import ArtboardPersonal from "../../assets/images/personal.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import KelolaKontak from "../../assets/images/personal/kontak/kontak.jpg";
import TambahKontak from "../../assets/images/personal/kontak/tambah.jpg";
import SalinKontak from "../../assets/images/personal/kontak/salin.jpg";
import TandaiKontak from "../../assets/images/personal/kontak/tanda.jpg";
import TambahCatatan from "../../assets/images/personal/kontak/agenda.jpg";

const { Paragraph, Title } = Typography;

function PersonalKontak() {

  return (
    <>
      <MetaAttributes
        title="Fitur Kontak untuk Mengelola Calon Prospek"
        description="Anda bisa atur jadwal bertemu pelanggan, mengkategorikan calon prospek, dan menambahkan catatan khusus dengan praktis."
        twittertitle="Fitur Kontak untuk Mengelola Calon Prospek"
        twitterdescription="Anda bisa atur jadwal bertemu pelanggan, mengkategorikan calon prospek, dan menambahkan catatan khusus dengan praktis."
        // twitterimage={}
        ogtitle="Fitur Kontak untuk Mengelola Calon Prospek"
        ogdescription="Anda bisa atur jadwal bertemu pelanggan, mengkategorikan calon prospek, dan menambahkan catatan khusus dengan praktis."
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
                <Link to="/personal/kontak" className="active">Kontak</Link>
                <Link to="/personal/deals">Deals</Link>
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
            <img className="image--article" src={KelolaKontak} alt="Kelola kontak lebih baik dan terorganisir di Prospeku" />
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
                <Title level={3}>Kelola kontak lebih baik dan terorganisir di Prospeku</Title>
                <ul className="list--standard">
                    <li>Kelola progress penjualan setiap customer Anda dari tahap awal komunikasi hingga closing.</li>
                    <li>Anda bisa makin produktif dengan membuat agenda terkait deals dengan customer.</li>
                    <li>Anda bisa tambahkan catatan perkembangan setiap deals untuk melakukan evaluasi ke depannya.</li>
                </ul>
                </span>
            </div>
            </Col>
        </Row>
        <Row>
            <Col span="24" className="mb-lg-3">
            <Title level={2} style={{ textAlign: "center" }}>5  Keuntungan Pengelolaan dengan Fitur Kontak</Title>
            <Paragraph style={{ textAlign: "center" }}>Anda bisa memasukkan daftar kontak berupa prospek pelanggan, memprioritaskan berdasarkan potensi penjualan, dan mengatur janji bertemu secara personal untuk menjelaskan properti yang Anda jual dengan lebih jelas.</Paragraph>
            </Col>
        </Row>
        <Row justify="center" className="mb-lg-5">
            <Col 
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="icon--article" style={{ textAlign: "center" }}>
                <img src={TambahKontak} alt="Tambahkan kontak baru untuk memantau semua prospek Anda." />
                <Paragraph><b>Tambahkan kontak</b> baru untuk memantau semua prospek Anda.</Paragraph>
            </div>
            </Col>
            <Col 
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="separator">atau</div>
            </Col>
            <Col 
            xl={{ span: 9 }}
            lg={{ span: 9 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            >
            <div className="icon--article" style={{ textAlign: "center" }}>
                <img src={SalinKontak} alt="Tambahkan kontak baru untuk memantau semua prospek Anda." />
                <Paragraph><b>Salin kontak</b> dari ponsel untuk memantau prospek Anda.</Paragraph>
            </div>
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
                <img src={TandaiKontak} alt="Tambahkan kontak baru untuk memantau semua prospek Anda." />
                <Paragraph><b>Tandai kontak</b> untuk memudahkan Anda dalam menindaklanjuti prospek penjualan.</Paragraph>
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
                <img src={TambahCatatan} alt="Tambahkan kontak baru untuk memantau semua prospek Anda." />
                <Paragraph><b>Buat agenda</b> agar lebih mudah mengelola jadwal temu dengan prospek Anda.</Paragraph>
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
                <img src={TambahCatatan} alt="Tambahkan kontak baru untuk memantau semua prospek Anda." />
                <Paragraph><b>Tambahkan catatan khusus</b> untuk menyimpan kebutuhan/permintaan spesial dari prospek Anda.</Paragraph>
            </div>
            </Col>
        </Row>
        </Col>
      </Row>
    </>
  );
}

export default PersonalKontak;
