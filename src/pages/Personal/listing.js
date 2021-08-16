import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card } from "antd";

import "./personal.less";

import FlowProspeku from "../../assets/images/flow-personal.jpg";
import ArtboardPersonal from "../../assets/images/personal.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import KumpulkanInformasi from "../../assets/images/personal/listing/1.jpg";
import PromosikanListing from "../../assets/images/personal/listing/2.jpg";
import KolaborasiPemasaran from "../../assets/images/personal/listing/3.jpg";
import TawarkanLangsung from "../../assets/images/personal/listing/4.jpg";

const { Paragraph, Title } = Typography;

function PersonalListing() {

  return (
    <>
      <MetaAttributes
        title="Fitur Listing Properti untuk Agen"
        description="Atur listing properti lebih praktis dan jadi Agen Properti terbaik! Jangan takut lagi informasi listing tercecer di berbagai tempat."
        twittertitle="Fitur Listing Properti untuk Agen"
        twitterdescription="Atur listing properti lebih praktis dan jadi Agen Properti terbaik! Jangan takut lagi informasi listing tercecer di berbagai tempat."
        // twitterimage={}
        ogtitle="Fitur Listing Properti untuk Agen"
        ogdescription="Atur listing properti lebih praktis dan jadi Agen Properti terbaik! Jangan takut lagi informasi listing tercecer di berbagai tempat."
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
                <Link to="/personal/listing" className="active">Listing</Link>
                <Link to="/personal/kontak">Kontak</Link>
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
            <img className="image--article" src={KumpulkanInformasi} alt="Kumpulkan semua Informasi Properti" />
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
                <Title level={3}>Kumpulkan semua informasi properti Anda dalam fitur Listing.</Title>
                <Paragraph>Anda bisa menyimpan semua data properti yang dijual atau disewakan dengan praktis dan aman, tanpa repot karena informasi tercecer di berbagai tempat.</Paragraph>
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
                    <Title level={3}>Promosikan Listing Anda ke berbagai channel agar dapat ditemukan oleh lebih banyak pencari properti.</Title>
                    <Paragraph>Saat ini kami menyediakan beberapa media partner untuk mempromosikan listing, yaitu Rumah123.com, 99.co, dan Sosial Media Prospeku. Hanya dengan 1 tap, listing Anda dapat muncul di media partner tersebut dan menjangkau calon customer yang tertarik membeli atau menyewa properti.</Paragraph>
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
            <img className="image--article" src={PromosikanListing} alt="Promosikan Listing" />
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
            <img className="image--article" src={KolaborasiPemasaran} alt="Kolaborasi Pemasaran" />
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
                    <Title level={3}>Kolaborasi dalam memasarkan properti bersama dengan agen lain melalui fitur Co-broke.</Title>
                    <Paragraph>Anda bisa mengatur listing agar dapat terlihat oleh agen lain, dan bagi agen yang tertarik bisa membantu memasarkan properti Anda. Atur komisi yang disepakati, perbanyak kolaborasi, dapatkan closing lebih cepat!</Paragraph>
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
                    <Title level={3}>Tawarkan dan bagikan listing properti langsung ke customer.</Title>
                    <Paragraph>Di Prospeku, Anda dapat membagikan informasi listing yang Anda jual atau sewa ke customer dengan mudah. Share lewat WhatsApp, Social media, email, dan sebagainya hanya dengan 1 tap saja.</Paragraph>
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
            <img className="image--article" src={TawarkanLangsung} alt="Tawarkan Langsung" />
            </Col>
        </Row>        
        </Col>
      </Row>
    </>
  );
}

export default PersonalListing;
