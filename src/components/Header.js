import { Link } from "react-router-dom";
const toggleMenu = () => {
    var menuToggle= document.querySelector('.toggle');
    var menu= document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const Header = () => {
    return <div className="header">
        <Link to="/" className="logo">Portfolio</Link>
        <div className="toggle" onClick={() => toggleMenu()}></div>
        <ul className="menu">
            <li><Link to="/"  onClick={() => toggleMenu()}>Home</Link></li>
            <li><Link to="/about"  onClick={() => toggleMenu()}>About</Link></li>
            <li><Link to="/projects"  onClick={() => toggleMenu()}>Projects</Link></li>
            <li><Link to="/contact"  onClick={() => toggleMenu()}>Contact</Link></li>
    </ul>
    </div>
};

export default Header;