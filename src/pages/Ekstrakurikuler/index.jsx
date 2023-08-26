import { useLocation } from "react-router-dom";
import EkstrakurikulerComponent from "../../components/Ekskul";
import { useEffect } from "react";

const Ekstrakurikuler = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <main id="main" data-aos="fade-in">
                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2 className="mb-3">Ekstrakurikuler Sekolah</h2>
                        <p className="ms-5 me-5">
                            Ekstrakurikuler sekolah adalah kegiatan di luar
                            program akademis utama yang ditawarkan oleh sekolah.
                            Di sini berisi informasi tentang beragam aktivitas
                            tambahan yang dapat diikuti oleh siswa dan deskripsi
                            singkat tentang setiap ekstrakurikuler yang tersedia
                            di sekolah kami.
                        </p>
                    </div>
                </div>
                <EkstrakurikulerComponent eksk={null} />
            </main>
        </>
    );
};

export default Ekstrakurikuler;
