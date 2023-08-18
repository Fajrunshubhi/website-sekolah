import PropTypes from "prop-types";
import CardBerita from "../CardBerita";
import dataBerita from "../../assets/data/berita";
import HeaderSection from "../HeaderSection";

const BeritaComponent = ({ berita }) => {
    const totalBerita = berita;
    return (
        <section id="popular-beritas" className="beritas">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Berita & Artikel"
                    title1="Berita & Artikel Sekolah"
                    total={totalBerita}
                    lihatsemua="Lihat semua berita & artikel"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalBerita !== null
                        ? dataBerita.map((item, index) => {
                              if (index < 3) {
                                  return (
                                      <CardBerita
                                          key={item.title}
                                          foto={item.foto}
                                          jenis={item.jenis}
                                          title={item.title}
                                          deskripsi={item.deskripsi}
                                      />
                                  );
                              }
                          })
                        : dataBerita.map((item) => {
                              return (
                                  <CardBerita
                                      key={item.title}
                                      foto={item.foto}
                                      jenis={item.jenis}
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
BeritaComponent.propTypes = {
    berita: PropTypes.any,
};

export default BeritaComponent;
