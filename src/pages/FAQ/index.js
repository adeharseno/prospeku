import React from 'react';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row, Tabs, Collapse } from "antd";

import './faq.less';

function FAQ() {

  const { TabPane } = Tabs;
  const { Panel } = Collapse;

  return (
    <>
        <MetaAttributes
            title="Pusat Bantuan untuk Agen Properti"
            description="Cara mendaftar; Penggunaan fitur; Kantor agen properti atau pribadi; Baca di Pusat Bantuan Prospeku. Lihat Selengkapnya."
            twittertitle="Pusat Bantuan untuk Agen Properti"
            twitterdescription="Cara mendaftar; Penggunaan fitur; Kantor agen properti atau pribadi; Baca di Pusat Bantuan Prospeku. Lihat Selengkapnya."
            // twitterimage={}
            ogtitle="Pusat Bantuan untuk Agen Properti"
            ogdescription="Cara mendaftar; Penggunaan fitur; Kantor agen properti atau pribadi; Baca di Pusat Bantuan Prospeku. Lihat Selengkapnya."
            // ogimage={}
            // ogimageurl={}
            // ogimagealt=""
        />
        <Row justify="center" className="mt-5 mb-5">
            <Col
                xl={{ span: 14, offset: 1 }}
                lg={{ span: 20, offset: 1 }}
                md={{ span: 18, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1 class="text-dark-primary">FAQ</h1>
                    <p>Prospeku siap menjawab pertanyaan seputar produk dan <br /> membantu pengelolaan prospek Anda lebih baik.</p>
                </div>

                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab="General" key="1">
                        <Collapse accordion>
                            <Panel header="Bagaimana cara mendaftar di Prospeku?" key="1">
                                <p>Anda hanya perlu memasukkan nomor ponsel, lalu verifikasi dengan kode OTP. Setelah itu Anda sebagai pemilik akun akan diminta memasukkan data profil utama berupa nama, email, dan password. Data tambahan lain bisa Anda isi di lain waktu.</p>
                            </Panel>
                            <Panel header="Bagaimana jika saya lupa password?" key="2">
                                <p>Anda bisa pilih Lupa Password ketika login, lalu masukkan no ponsel. Kemudian, Anda akan mendapat kode OTP, lalu masukkan kode OTP tersebut dan buat password baru.</p>
                            </Panel>
                            <Panel header="Apakah penggunaan Prospeku berbayar?" key="3">
                                <p>Penggunaan Prospeku gratis pada 6 bulan pertama, kemudian selanjutnya diberlakukan sistem berlangganan dengan harga seperti yang tertera di halaman berikut.</p>
                            </Panel>
                            <Panel header="Apakah pengajuan pinjaman dari Prospeku langsung terhubung ke jaringan bank?" key="4">
                                <p>Saat ini Prospeku baru bekerja sama dengan 1 bank untuk pengajuan pinjaman dan terhubung langsung ke bank tersebut. Ke depannya, Prospeku akan menambahkan bank partner lain untuk memperkaya pilihan produk pinjaman.</p>
                            </Panel>
                            <Panel header="Apakah saya perlu memasukkan pin dan password setiap kali membuka aplikasi Prospeku?" key="5">
                                <p>Untuk saat ini, Anda tidak perlu memasukkan pin dan password tiap kali membuka aplikasi. Pin dan password digunakan saat pertama kali mendaftar atau melakukan login ulang.</p>
                            </Panel>
                            <Panel header="Bagaimana menjamin bahwa aplikasi Prospeku di HP saya tidak gampang dibuka oleh orang lain?" key="6">
                                <p>Untuk menjamin aplikasi Prospeku tidak dibuka oleh orang lain, pastikan kode keamanan HP Anda sebagai pemilik akun tidak diketahui oleh orang (teman atau hagen) lain.</p>
                            </Panel>
                            <Panel header="Apakah profil saya di Prospeku bisa dilihat oleh agen lain dan calon pembeli?" key="7">
                                <p>Tidak bisa. Profil di aplikasi Prospeku hanya bisa dilihat oleh pemilik akun. Semua data yang tersimpan adalah aset pemilik akun dan menjadi tanggung jawab kami untuk menjaga keamanan data setiap pengguna, sehingga merasa nyaman dalam menggunakan aplikasi.</p>
                            </Panel>
                            <Panel header="Bagaimana jika ada hal yang ingin saya tanyakan mengenai Prospeku?" key="8">
                                <p>Anda bisa menghubungi tim Prospeku dari aplikasi dengan cara membuka menu samping → (insert icon) Hubungi kami. Anda juga bisa mengirimkan email pertanyaan ke <a href="mailto:halo@prospeku.com">halo@prospeku.com</a>.</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="Fitur Kontak" key="2">
                        <Collapse accordion>
                            <Panel header="Seberapa aman data kontak yang disalin dari HP saya ke aplikasi Prospeku?" key="1">
                                <p>Data kontak Anda sebagai pemilik akun akan tersimpan dengan aman di server Prospeku. Kami memiliki kebijakan privasi yang menjamin data pengguna tetap aman dan tidak tersebar ke tempat lain.</p>
                            </Panel>
                            <Panel header="Apakah ada pemberitahuan/notifikasi untuk agenda yang akan datang?" key="2">
                                <p>Ada, pemberitahuan atau notifikasi akan muncul di pagi hari apabila di hari tersebut Anda memiliki jadwal agenda dengan calon pelanggan.</p>
                            </Panel>
                            <Panel header="Apakah ada pembeda untuk klien yang pemilik/owner dan klien yang pembeli/buyer (secondary market)?" key="3">
                                <p>Untuk saat ini, klasifikasi kontak hanya untuk pembeli/buyer. Ke depannya, Prospeku akan menambahkan kategori pemilik property/property owner, ditunggu ya! ☺</p>
                            </Panel>
                            <Panel header="Apa fungsi kontak tak terpakai?" key="4">
                                <p>Kontak tak terpakai adalah kontak yang sudah tidak Anda gunakan lagi karena sudah tidak bisa atau gagal diprospek. Daftar kontak tak terpakai bisa Anda kembalikan ke kontak utama, apabila suatu saat kontak tersebut menjadi prospek potensial untuk Anda.</p>
                            </Panel>
                            <Panel header="Apakah agenda bisa langsung diatur untuk alarm pengingat/reminder?" key="5">
                                <p>Untuk saat ini belum bisa. Ke depannya, pengembangan Prospeku akan menambahkan pengaturan pengingat/reminder, ditunggu ya! ☺</p>
                            </Panel>
                            <Panel header="Apa bedanya “prospek” dan “pelangganku”?" key="6">
                                <p>Prospek adalah calon pelanggan yang potensial untuk membeli properti yang Anda tawarkan. Pelangganku adalah pelanggan yang pernah membeli propertimu dan memiliki potensi untuk ditawarkan properti lain.</p>
                            </Panel>
                            <Panel header="Apabila HP saya hilang, apakah data kontak saya di Prospeku juga hilang?" key="7">
                                <p>Tenang saja, data kontak Anda tidak hilang dan tetap aman tersimpan selama login menggunakan ID Anda sebagai pengguna Prospeku.</p>
                            </Panel>
                            <Panel header="Apa yang dimaksud dengan ‘lokasi yang diinginkan’?" key="8">
                                <p>Lokasi yang diinginkan adalah preferensi lokasi properti yang dicari oleh prospek atau pelanggan/customer Anda.</p>
                            </Panel>
                            <Panel header="Apakah saya bisa memasukkan foto profil klien?" key="9">
                                <p>Untuk saat ini belum bisa, tapi ke depannya fitur ini akan dikembangkan.</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="Fitur Listing" key="3">
                        <Collapse accordion>
                            <Panel header="Apakah listing yang saya masukkan di Prospeku bisa dilihat dan dicari oleh orang lain (calon pembeli ataupun agen lain)?" key="1">
                                <p>Saat ini, listing yang Anda masukkan hanya bisa terlihat oleh Anda sebagai pemilik akun, namun Prospeku juga memiliki rencana untuk mengembangkan fitur listing yang bisa terhubung dengan berbagai website, sehingga listing yang ada di aplikasi Prospeku bisa juga ditampilkan di website listing.</p>
                            </Panel>
                            <Panel header="Apakah kita bisa melihat listing dari agen2 lain?" key="2">
                                <p>Untuk saat ini belum bisa. Ke depannya, kami berencana mengembangkan fitur untuk bisa berbagi listing dengan agen lain untuk saling membantu dalam berjualan.</p>
                            </Panel>
                            <Panel header="Keterangan/deskripsi properti yang lebih lengkap bisa ditulis di mana?" key="3">
                                <p>Saat ini belum ada, tunggu pengembangan Prospeku selanjutnya ya!</p>
                            </Panel>
                            <Panel header="Apakah listing di dalam aplikasi bisa dibagikan langsung ke media sosial?" key="4">
                                <p>Untuk saat ini belum bisa. Ke depannya Prospeku berencana mengembangkan fitur untuk bisa membagikan listing ke WhatsApp, Facebook, dan terhubung ke media sosial lainnya.</p>
                            </Panel>
                            <Panel header="Apa fungsi “Listing tak terpakai”?" key="5">
                                <p>Listing tak terpakai adalah listing yang sudah terjual atau tidak jadi Anda jual. Jangan khawatir, ke depannya Anda bisa mengubah status listing tak terpakai menjadi aktif kembali.</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                    <TabPane tab="Fitur Financing" key="4">
                        <Collapse accordion>
                            <Panel header="Apakah kita bisa simulasi perhitungan KPR terlebih dahulu?" key="1">
                                <p>Saat ini belum bisa. Tapi jangan khawatir karena ke depannya simulasi perhitungan KPR akan jadi fitur yang Prospeku kembangkan.</p>
                            </Panel>
                            <Panel header="Apakah pengguna bisa melakukan BI checking sendiri?" key="2">
                                <p>Tidak bisa. BI Checking hanya dilakukan oleh pihak bank partner. Prospeku sebagai penyedia aplikasi hanya bisa memperoleh hasil akhir apakah KPR yang diajukan pengguna statusnya diterima atau ditolak dari bank terkait.</p>
                            </Panel>
                            <Panel header="Apakah tingkat suku bunga KPR akan otomatis di-update sesuai dengan promo bank?" key="3">
                                <p>Ya, informasi tingkat suku bunga akan otomatis ter-update mengikuti produk KPR terbaru di setiap bank.</p>
                            </Panel>
                            <Panel header="Apakah semua bank akan ada di sini?" key="4">
                                <p>Ke depan, kami akan menjalin kerja sama dengan berbagai bank untuk menambah pilihan produk KPR.</p>
                            </Panel>
                            <Panel header="Apakah bisa menambahkan program KPR sendiri (misalnya bank bekerjasama dengan developer atau agen properti)?" key="5">
                                <p>Belum bisa, tapi jangan khawatir karena ke depannya fitur ini akan dikembangkan.</p>
                            </Panel>
                            <Panel header="Apakah status pengajuan pinjaman harus dicek secara manual, atau otomatis ter-update di aplikasi Prospeku?" key="6">
                                <p>Status pengajuan pinjaman masih harus Anda cek secara manual, belum otomatis.</p>
                            </Panel>
                        </Collapse>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    </>
  );
}

export default FAQ;
