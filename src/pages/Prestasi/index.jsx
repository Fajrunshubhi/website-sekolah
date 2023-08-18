import PrestasiComponent from "../../components/Prestasi";

const Prestasi = () => {
    return (
        <main id="main" data-aos="fade-in">
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2 className="mb-3">Prestasi Sekolah</h2>
                    <p className="ms-5 me-5">
                        Para Guru, Karyawan, dan Staf Sekolah merupakan tiang
                        kuat di balik keberhasilan pendidikan kami. Guru-guru
                        kami, dengan dedikasi dan pengetahuan yang luas,
                        membimbing siswa menuju prestasi akademik dan
                        perkembangan pribadi yang holistik. Karyawan dan Staff
                        kami, dari berbagai bidang, bekerja sama untuk
                        memastikan operasional harian berjalan lancar,
                        menciptakan lingkungan yang aman dan nyaman bagi semua.
                    </p>
                </div>
            </div>
            <PrestasiComponent prestasi={null} />
        </main>
    );
};

export default Prestasi;
