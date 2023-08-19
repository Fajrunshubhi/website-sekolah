import dataVideo from "../../assets/data/video";

const Video = () => {
    return (
        <div className="container">
            {dataVideo.map((item) => {
                return (
                    <section
                        key={item.link}
                        className="container d-flex justify-content-center"
                        data-aos="fade-up">
                        <iframe
                            width="800"
                            height="500"
                            src={item.link}
                            title="YouTube video Profil SD NEGERI 1 BANYUROTO"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </section>
                );
            })}
        </div>
    );
};

export default Video;
