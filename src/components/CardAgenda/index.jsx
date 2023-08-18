import { trainer1 } from "../../assets/img";
import PropTypes from "prop-types";

const CardAgenda = ({ foto, jenis, title, deskripsi }) => {
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="berita-item mt-4">
                <img src={foto} className="img-fluid" alt="..." />
                <div className="berita-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{jenis}</h4>
                    </div>
                    <h3>
                        <a
                            className="text-title-berita"
                            href="berita-details.html">
                            {title}
                        </a>
                    </h3>
                    <p className="card-text-berita">{deskripsi}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <img src={trainer1} className="img-fluid" alt="" />
                            <span>Admin SDN BANYUROTO 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardAgenda.propTypes = {
    foto: PropTypes.any,
    jenis: PropTypes.string,
    title: PropTypes.string,
    deskripsi: PropTypes.string,
};

export default CardAgenda;
