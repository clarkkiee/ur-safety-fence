import "./our-services.css"
import cardimg1 from "./img/card.jpg"
import cardimg2 from "./img/card2.jpg"

const OurServices = () => {
    return(
        <section id="our-services" class="our-services">
            <h2><span>Layanan </span>Kami</h2>
            <div class="content">
                <p>Berikut merupkakan beberapa Layanan yang telah kami sediakan</p>
            </div>
            <div class="row">
                <div class="column">
                    <div class="container">
                        <img src={cardimg1} alt="cardimg"/>
                        <h3>Konsultasi Privat</h3>
                        <p>Fitur Konsultasi Privat diharapkan dapat membantu para pemilik bisnis kecil atau UMKM agar dapat berkonsultasi langsung dengan para ahli sebagai pemandu agar mereka dapat mempertahankan dan memperbesar bisnisnya.</p>
                        
                        <a href="#" class="services-btn">Konsultasi Sekarang</a>
                    </div>
                </div>
                <div class="column">
                    <div class="container">
                        <img src={cardimg2} alt="cardimg"/>
                        <h3>Forum Diskusi</h3>
                        <p>Fitur Forum Diskusi memungkinkan para pemilik bisnis kecil atau UMKM agar dapat melakukan diskusi memalui chat secara real-time dengan sesama pemilik bisnis UMKM lainnya agar mereka dapat saling bertanya dan memberi saran satu sama lain sebagai bagian dari suatu komunitas. </p>
                        <a href="/forum" class="services-btn">Diskusi Sekarang</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices