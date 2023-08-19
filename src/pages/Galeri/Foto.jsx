import dataFoto from "../../assets/data/foto";
import CardFoto from "../../components/CardFoto";
import HeaderSection from "../../components/HeaderSection";

const Foto = () => {
    return (
        <section id="popular-beritas" className="beritas">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title1="Galeri Foto Sekolah"
                    total={null}
                    lihatsemua="Lihat semua berita & artikel"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {dataFoto.map((item) => {
                        return (
                            <CardFoto
                                key={item.title}
                                foto={item.foto}
                                title={item.title}
                                deskripsi={item.deskripsi}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Foto;
