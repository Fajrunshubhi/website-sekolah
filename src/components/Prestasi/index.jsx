import dataPrestasi from "../../assets/data/prestasi";
import PropTypes from "prop-types";
import CardPrestasi from "../CardPrestasi";
import HeaderSection from "../HeaderSection";
const PrestasiComponent = ({ prestasi }) => {
    const totalPrestasi = prestasi;
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <HeaderSection
                    title="Prestasi"
                    title1="Prestasi Sekolah"
                    total={totalPrestasi}
                    lihatsemua="Lihat semua prestasi"
                />

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalPrestasi !== null
                        ? dataPrestasi.map((item, index) => {
                              if (index < 4) {
                                  return (
                                      <CardPrestasi
                                          key={item.title}
                                          foto={item.foto}
                                          title={item.title}
                                          deskripsi={item.deskripsi}
                                      />
                                  );
                              }
                          })
                        : dataPrestasi.map((item) => {
                              console.log(item.deskripsi);
                              return (
                                  <CardPrestasi
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

PrestasiComponent.propTypes = {
    prestasi: PropTypes.any,
};

export default PrestasiComponent;
