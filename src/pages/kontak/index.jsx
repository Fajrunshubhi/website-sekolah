import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Kontak = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2 className="mb-3">Kontak Sekolah</h2>
                    <p className="ms-5 me-5">
                        Jika Anda memiliki pertanyaan lebih lanjut atau ingin
                        berhubungan dengan kami, silakan Hubungi Kami melalui
                        kontak di bawah ini dan pilih metode komunikasi yang
                        paling sesuai dengan preferensi Anda. Kami berharap
                        dapat terus menjaga jalur komunikasi yang terbuka dan
                        bermanfaat bagi Anda
                    </p>
                </div>
            </div>
        </>
    );
};

export default Kontak;
