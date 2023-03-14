import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import './navbar.css'
import { Menu, MessageCircle, Search} from 'react-feather';
import usflogo from "./img/usf-logo.jpeg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={usflogo} alt='usf-logo' className='usf-logo'/>
                <a href="#" className="nav-logo">Ur Safety Fence</a>
            </div>
            <div className="navlink">
                <a href="#home">Beranda</a>
                <a href="#about">Tentang</a>
                <a href="#our-services">Layanan Kami</a>
                <a href="#contact">Kontak</a>
            </div>
            <div className="extras">
                <a href="#" id="search"><Search/></a>
                <a href="#" id="message"><MessageCircle/></a>
                <a href="/forum" id="forum"><ForumOutlinedIcon /></a>
                <a href="#" id="hamburger-menu"><Menu/></a>
            </div>
        </nav>
    )
}


export default Navbar