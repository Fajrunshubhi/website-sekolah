import { pramuka } from "../../assets/img";
import CountUp from "react-countup";
import { VscOrganization as IcOrgn } from "react-icons/vsc";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import { GiPineTree as IcTree } from "react-icons/gi";
import { FaTrophy as IcTrophy } from "react-icons/fa";
import VisiMisiComponent from "../../components/VisiMisi";
import GuruComponent from "../../components/Guru";
import { Icon } from "@iconify/react";
import EkstrakurikulerComponent from "../../components/Ekskul";
import BeritaComponent from "../../components/Berita";
import PrestasiComponent from "../../components/Prestasi";
import AgendaComponent from "../../components/Agenda";

const Home = () => {
    return (
        <>
            <section
                id="hero"
                className="d-flex justify-content-center align-items-center">
                <div
                    className="container position-relative"
                    data-aos="zoom-in"
                    data-aos-delay="100">
                    <h1>
                        Learning Today,
                        <br />
                        Leading Tomorrow
                    </h1>
                    <h2>
                        We are team of talented designers making websites with
                        Bootstrap
                    </h2>
                    <a href="courses.html" className="btn-get-started">
                        Get Started
                    </a>
                </div>
            </section>

            <main id="main">
                <VisiMisiComponent />
                <section id="counts" className="counts section-bg">
                    <div className="container">
                        <div className="row counters">
                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="248"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Siswa</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="19"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Guru, Staff dan Karyawan</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="5"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Ekstrakurikuler</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <CountUp
                                    start="0"
                                    end="12"
                                    duration="5"
                                    delay={3}
                                    className="purecounter">
                                    0
                                </CountUp>
                                <p>Ruang Kelas</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="container d-flex justify-content-center"
                    data-aos="fade-up">
                    <iframe
                        width="800"
                        height="500"
                        src="https://www.youtube.com/embed/T7qQ6ld33o4"
                        title="YouTube video Profil SD NEGERI 1 BANYUROTO"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </section>

                <section id="why-us" className="why-us mb-3">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Kenapa SD Negeri Banyuroto 1?</h3>
                                    <p>
                                        Selamat datang di halaman profil SDN
                                        Banyuroto 1. Sejak berdiri pada tahun
                                        1961, kami telah menjalankan komitmen
                                        kami untuk memberikan pendidikan unggul
                                        kepada para generasi penerus. Dengan
                                        bangga kami menyambut siswa-siswi yang
                                        bersemangat serta guru, staf, dan
                                        karyawan yang berdedikasi. Kami
                                        mengundang Anda untuk menjelajahi lebih
                                        lanjut tentang SDN Banyuroto 1, tempat
                                        di mana pembelajaran dan pengembangan
                                        diri berkolaborasi dalam harmoni.
                                    </p>
                                    <div className="text-center">
                                        <a href="/tentang" className="more-btn">
                                            Selanjutnya
                                            <i className="ms-3">
                                                <Arrow />
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-8 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay="100">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcOrgn />
                                                </i>
                                                <h4>
                                                    Program Organisasi Penggerak
                                                </h4>
                                                <p>
                                                    Sebagai bagian dari Program
                                                    Organisasi Sekolah Penggerak
                                                    di bawah naungan Yayasan
                                                    IRCOS Indonesia, sekolah ini
                                                    menjadi mercu tanda
                                                    inspirasi dan pembelajaran
                                                    yang tak terbatas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcTree />
                                                </i>
                                                <h4>Sekolah Adiwiyata</h4>
                                                <p>
                                                    Telah menjadi pionir dalam
                                                    merintis perjalanan menuju
                                                    keberlanjutan dengan menjadi
                                                    sekolah Adiwiyata. Setiap
                                                    langkah kecil di dalamnya
                                                    adalah jejak menuju
                                                    lingkungan yang lebih hijau
                                                    dan berkelanjutan
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="card-why icon-box mt-4 mt-xl-0 shadow">
                                                <i className="bx">
                                                    <IcTrophy />
                                                </i>
                                                <h4>
                                                    Sekolah Mengukir Prestasi
                                                </h4>
                                                <p>
                                                    Telah mengukir banyak
                                                    prestasi dalam berbagai
                                                    bidang. Prestasi ini tidak
                                                    hanya menghiasi sejarah
                                                    sekolah, tetapi juga
                                                    mencerminkan dedikasi dan
                                                    usaha keras seluruh siswa
                                                    dan guru
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="features mt-5 pt-2">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Pembiasaan</h2>
                            <p>Kegiatan Rutinan</p>
                        </div>
                        <div
                            className="row"
                            data-aos="zoom-in"
                            data-aos-delay="100">
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="arcticons:al-quran-indonesia"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Hafalan Surat Pendek
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <Icon
                                        icon="fa-solid:pray"
                                        color="#75c2f6"
                                        width={30}
                                        height={30}
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Doa Sehari-hari
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <Icon
                                        icon="material-symbols:prayer-times-outline"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Dzikir Pagi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <img
                                        src={pramuka}
                                        alt="icon pramuka"
                                        width={30}
                                        height={30}
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Materi Kepramukaan
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="pepicons-print:people"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Materi Gerakan PBB
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="mdi:donation"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Infaq Senin - Jumat
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="clarity:list-line"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Menyanyikan Lagu Daerah
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <Icon
                                        icon="mdi:religion-islamic"
                                        color="#75c2f6"
                                        width="30"
                                        height="30"
                                    />
                                    <h3>
                                        <a className="ms-3" href="">
                                            Melafalkan Asmaul Husna
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="kegiatan-end d-flex justify-content-center">
                                <div className="col-lg-3 col-md-4 mt-4 me-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="ic:outline-sports-gymnastics"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Senam Jumat
                                            </a>
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 mt-4 me-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="twemoji:flag-indonesia"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Menyanyikan Lagu Nasional
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <Icon
                                            icon="arcticons:avg-cleaner"
                                            color="#75c2f6"
                                            width="30"
                                            height="30"
                                        />
                                        <h3>
                                            <a className="ms-3" href="">
                                                Kegiatan Jumat Bersih
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <EkstrakurikulerComponent eksk={1} />
                <PrestasiComponent prestasi={1} />

                <BeritaComponent berita={3} />
                <GuruComponent guru={4} />
                <AgendaComponent agenda={3} />
            </main>
        </>
    );
};

export default Home;
