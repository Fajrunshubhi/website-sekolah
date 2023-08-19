import AgendaComponent from "../../components/Agenda";

const Agenda = () => {
    return (
        <>
            <main id="main" data-aos="fade-in">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2 className="mb-3">Agenda Sekolah</h2>
                        <p className="ms-5 me-5">
                            Agenda sekolah adalah bagian yang memberikan
                            informasi singkat tentang kegiatan dan acara yang
                            akan datang di sekolah. Ini membantu siswa, guru,
                            dan orang tua untuk tetap terinformasi tentang
                            jadwal dan acara penting. Temukan jadwal lengkap dan
                            informasi tentang semua kegiatan sekolah, termasuk
                            ujian, acara spesial, pertemuan orang tua-guru,
                            liburan sekolah, dan lainnya. Tetap terkini dengan
                            kegiatan sekolah kami di sini
                        </p>
                    </div>
                </div>
                <AgendaComponent agenda={null} />
            </main>
        </>
    );
};

export default Agenda;
