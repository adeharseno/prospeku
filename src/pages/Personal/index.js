import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Typography, Card, Affix, Tabs } from "antd";

import "./personal.less";

import FlowProspeku from "../../assets/images/flow-personal.jpg";
import ArtboardPersonal from "../../assets/images/personal.png";
import AppStore from "../../assets/images/apple-store.jpg";
import GooglePlay from "../../assets/images/google-play.jpg";
import KumpulkanInformasi from "../../assets/images/personal/listing/1.jpg";
import PromosikanListing from "../../assets/images/personal/listing/2.jpg";
import KolaborasiPemasaran from "../../assets/images/personal/listing/3.jpg";
import TawarkanLangsung from "../../assets/images/personal/listing/4.jpg";
import KelolaKontak from "../../assets/images/personal/kontak/kontak.jpg";
import TambahKontak from "../../assets/images/personal/kontak/tambah.jpg";
import SalinKontak from "../../assets/images/personal/kontak/salin.jpg";
import TandaiKontak from "../../assets/images/personal/kontak/tanda.jpg";
import TambahCatatan from "../../assets/images/personal/kontak/agenda.jpg";
import KelolaProgress from "../../assets/images/personal/deals/1.jpg";
import MakinProduktif from "../../assets/images/personal/deals/2.jpg";
import TambahkanCatatan from "../../assets/images/personal/deals/3.jpg";
import AjukanKredit from "../../assets/images/personal/financing/financing.jpg";
import LihatProdukpinjaman from "../../assets/images/personal/financing/2-copy-15_2020-09-23/2-copy-15.jpg";
import AjukanPinjaman from "../../assets/images/personal/financing/2-copy-14_2020-09-23/2-copy-14.jpg";
import LihatStatus from "../../assets/images/personal/financing/2-copy-16_2020-09-23/2-copy-16.jpg";


const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Personal() {

  return (
    <>
      <MetaAttributes
        title="Fitur Listing Properti untuk Agen | Prospeku"
        description="Atur listing properti lebih praktis dan jadi Agen Properti terbaik! Jangan takut lagi informasi listing tercecer di berbagai tempat."
        twittertitle="Fitur Listing Properti untuk Agen | Prospeku"
        twitterdescription="Atur listing properti lebih praktis dan jadi Agen Properti terbaik! Jangan takut lagi informasi listing tercecer di berbagai tempat."
        // twitterimage={}
        ogtitle="Fitur Listing Properti untuk Agen | Prospeku"
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
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
          <TabPane tab="Listing" key="1">
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
          </TabPane>
          <TabPane tab="Kontak" key="2">
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
          </TabPane>
          <TabPane tab="Deals" key="3">
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
          </TabPane>
          <TabPane tab="Financing" key="4">
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
          </TabPane>
        </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default Personal;
