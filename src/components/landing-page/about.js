import "./about.css"
import aboutimg from "./img/about.jpg"

const About = () => {
    return(
        <section id="about" class="about">
            <h2><span>Tentang </span>Kami</h2>
            <div class="row">
                <div class="about-img">
                    <img src={aboutimg} alt="Tentang Kami "/>
                </div>
                <div class="content">
                    <p>Ur Safety Fence merupakan suatu platform yang digunakan untuk memudahkan para pemilik bisnis kecil atau UMKM yang ingin berkonsultasi dengan praktis dan gratis.</p>
                    <br></br>
                    <h3>Kenapa memilih jasa kami?</h3>
                    <p>Selain praktis dan gratis, kami menyediakan fitur-fitur yang sudah kami rancang sedemikian rupa sehingga dapat digunakan oleh semua kalangan. </p>
                </div>
            </div>
        </section>
    )
}

export default About