import React, { useState, useEffect } from 'react';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card, Tabs, Collapse } from "antd";

import "./business.less";

import ArtboardBusiness from "../../assets/images/business.png";
import FlowProspeku from "../../assets/images/flow-bisnis.jpg";
import ManfaatProspeku from "../../assets/images/bisnis/manfaatprospeku.jpg";


const { Paragraph, Title } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

function Business() {

  return (
    <>
      <MetaAttributes
        title="Jadi Kantor Agen Properti Terbaik dengan Prospeku"
        description="Gunakan Prospeku Bisnis untuk mengelola listing properti dan memantau agen Anda dengan efektif di 1 platform.
        "
        twittertitle="Jadi Kantor Agen Properti Terbaik dengan Prospeku"
        twitterdescription="Gunakan Prospeku Bisnis untuk mengelola listing properti dan memantau agen Anda dengan efektif di 1 platform."
        // twitterimage={}
        ogtitle="Jadi Kantor Agen Properti Terbaik dengan Prospeku"
        ogdescription="Gunakan Prospeku Bisnis untuk mengelola listing properti dan memantau agen Anda dengan efektif di 1 platform."
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
            >
                <div className="center-vertical">
                    <span>
                        <Title level={1} className="wrap-bg-title">
                            Gabung bersama kami &amp; nikmati berbagai layanan <span>Prospeku Bisnis</span>
                        </Title>
                        <Paragraph>Prospeku Bisnis adalah manajemen listing properti dan performance monitoring, yang memudahkan kantor agen dalam mengatur semua sales funnel secara efektif dan efisien hanya dalam 1 platform.</Paragraph>
                        <a href="https://cms.prospeku.com/register" className="ant-btn ant-btn-md ant-btn-secondary ant-button-secondary-custom">Daftarkan Kantor Agen</a>
                    </span>
                </div>
            </Col>
            <Col
              xl={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              md={{ span: 10, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
            >
                <img src={ArtboardBusiness} style={{ width: "100%" }} alt="Artboard" />
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
            <Title level={4} className="mb-lg-5">Anda bisa mengatur listing dan memantau performance agen lebih mudah.</Title>
            <img 
              src={FlowProspeku} 
              style={{ width: "100%" }}
              alt="Prospeku" 
              className="mb-lg-5"
            />
          </Card>
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
            <img className="image--article" src={ManfaatProspeku} alt="Manfaat Prospeku Bisnis untuk kantor agen." />
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
                <Title level={3}>Manfaat Prospeku Bisnis untuk kantor agen.</Title>
                <ul className="list--standard">
                    <li>Listing Anda akan dipromosikan ke website Partner Prospeku.</li>
                    <li>Melihat progress deals semua agen Anda.</li>
                    <li>Cek laporan pemasaran properti dan performance agen (setiap periode waktu).</li>
                </ul>
                </span>
            </div>
        </Col>
      </Row>
      <Row>
        <Col span="24" className="mb-lg-3">
            <Title level={2} style={{ textAlign: "center" }}>FAQ</Title>
            <Paragraph style={{ textAlign: "center" }}>Prospeku siap menjawab pertanyaan seputar produk dan membantu pengelolaan prospek Anda lebih baik.</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col
          xl={{ span: 16, offset: 4 }}
          lg={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
        >
            <Collapse accordion>
                <Panel header="Apakah Prospeku Business tepercaya?" key="1">
                    <p>Ya, tentu saja. Platform kami sudah memiliki legalitas yang sah dan terdaftar sebagai PT Olah Cipta Bimasena Caraka Nusantara.</p>
                </Panel>
                <Panel header="Apakah data perusahaan saya aman dan dilindungi?" key="2">
                    <p>Tentu saja. Kami memastikan data Anda akan selalu aman sesuai ketentuan yang berlaku, sehingga Anda tidak perlu khawatir terhadap penyalahgunaan data perusahaan atau tersebar ke kantor agen lainnya.</p>
                </Panel>
                <Panel header="Bagaimana cara mendaftar sebagai kantor agen?" key="3">
                    <p>Anda hanya perlu melakukan registrasi dengan menekan tombol “Daftar Kantor Agen” yang terdapat di halaman ini, lalu lanjutkan isi form. Pendaftaran akan kami proses secara langsung.</p>
                </Panel>
                <Panel header="Apakah penambahan listing properti juga bisa dilakukan oleh agen?" key="4">
                    <p>Bisa, agen dapat menambahkan listing properti lalu dihubungkan dengan kantor agen dengan cara mengakses aplikasi Prospeku Personal.</p>
                </Panel>
                <Panel header="Agen properti kami telah menggunakan Prospeku Personal, apakah mereka harus mendaftar ulang saat saya mendaftarkan kantor agen?" key="5">
                    <p>Tidak perlu, platform kami dapat menghubungkan kantor agen dengan agen Anda secara otomatis melalui fitur “Undang Tim Anda”.</p>
                </Panel>
            </Collapse>
            <div style={{ textAlign: "center" }}>
                <a href="https://prospeku.com/faq.html" className="ant-btn ant-btn-md ant-btn-secondary ant-button-secondary-custom mt-5 mb-5">Lihat FAQ Lebih Lengkap</a>
            </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col
          xl={{ span: 18, offset: 3 }}
          lg={{ span: 18, offset: 3 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          className="mb-5"
        >
          <Card 
            className="card--kontak"
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
    </>
  );
}

export default Business;
