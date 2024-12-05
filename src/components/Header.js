import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation();
    return <div className="header">
        <Link to="/" className="logo">Portfolio</Link>
        <ul className="menu">
            <li><Link to="/" className={(pathname === '/') ? 'active' : ''} >Home</Link></li>
            <li><Link to="/about" className={(pathname === '/about') ? 'active' : ''} >About</Link></li>
            <li><Link to="/projects" className={(pathname === '/projects') ? 'active' : ''} >Projects</Link></li>
            <li><Link to="/contact" className={(pathname === '/contact') ? 'active' : ''} >Contact</Link></li>
    </ul>
    </div>
};

export default Header;