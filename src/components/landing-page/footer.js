import { Facebook, Instagram, Twitter } from 'react-feather'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="socials">
            <a href="#"><Instagram/></a>
            <a href="#"><Twitter/></a>
            <a href="#"><Facebook/></a>
            </div>
            <div class="links">
                <a href="#home">Beranda</a>
                <a href="#about">Tentang</a>
                <a href="#our-services">Layanan Kami</a>
                <a href="#contact">Kontak</a>
            </div>
      </footer>
    )
}

export default Footer