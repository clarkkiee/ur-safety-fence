import './contact.css'

const Contact = () =>{
    return(
        <section id="contact" class="contact">
            <h2><span>Kontak </span>Kami</h2>
            <p>Jika ada pertanyaan, hubungi kami dengan cara mengisi form dibawah ini.</p>
            <div class="row">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.118416824918!2d112.79719631439896!3d-7.340596794702632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7faaded6208bd%3A0x5b7746296709e88a!2sJl.%20Wiguna%20Selatan%20Indah%20VI%20No.15%2C%20Gn.%20Anyar%2C%20Kec.%20Gn.%20Anyar%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060294!5e0!3m2!1sid!2sid!4v1675006701720!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <form action="">
                    <div class="input-group">
                        <i data-feather="user"></i>
                        <input type="text" placeholder="Nama"/>
                    </div>
                    <div class="input-group">
                        <i data-feather="mail"></i>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div class="input-group">
                        <i data-feather="phone"></i>
                        <input type="text" placeholder="No HP"/>
                    </div>
                    <button class="btn" type="submit">Kirim Pesan</button>
                </form>
            </div>
    </section>
    )
}

export default Contact