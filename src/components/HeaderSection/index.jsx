import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import PropTypes from "prop-types";

const HeaderSection = ({ title, title1, total, lihatsemua, to }) => {
    return (
        <div
            className="section-title-header d-flex flex-row justify-content-between align-items-center pb-3"
            data-aos="fade-up">
            <div className="section-title">
                <h2>{title}</h2>
                <p>{title1}</p>
            </div>
            {total !== null && (
                <div className="section-lihat-semua">
                    <a className="btn-lihat-semua" href={`/${to}`}>
                        {lihatsemua} <Arrow />
                    </a>
                </div>
            )}
        </div>
    );
};
HeaderSection.propTypes = {
    title: PropTypes.string,
    title1: PropTypes.string,
    total: PropTypes.any,
    lihatsemua: PropTypes.string,
    to: PropTypes.any,
};

export default HeaderSection;
