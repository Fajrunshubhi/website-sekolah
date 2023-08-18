import PropTypes from "prop-types";
import dataBerita from "../../assets/data/berita";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import CardAgenda from "../CardAgenda";

const AgendaComponent = ({ agenda }) => {
    const totalAgenda = agenda;
    return (
        <section id="popular-beritas" className="beritas">
            <div className="container" data-aos="fade-up">
                <div
                    className="section-title-header d-flex flex-column justify-content-between align-items-center pb-3"
                    data-aos="fade-up">
                    <div className="section-title mb-3">
                        <p>Agenda Sekolah</p>
                    </div>
                    {totalAgenda !== null && (
                        <div className="section-lihat-semua">
                            <a className="btn-lihat-semua" href="/agenda">
                                Lihat semua agenda <Arrow />
                            </a>
                        </div>
                    )}
                </div>

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    {totalAgenda !== null
                        ? dataBerita.map((item, index) => {
                              if (index < 3) {
                                  return (
                                      <CardAgenda
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
                                  <CardAgenda
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
AgendaComponent.propTypes = {
    agenda: PropTypes.any,
};

export default AgendaComponent;
