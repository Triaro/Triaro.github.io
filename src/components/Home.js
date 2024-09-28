import { Link } from 'react-router-dom';
const Home = () => {
    return <div className="banner" id="home">
        <div className="textBx ">
            <h2>Hello, I'm</h2>
                <div className="sign">
                <span className="fast-flicker">A</span>bhishek <span className="flicker">M</span>ehra
                </div>
            <h2 ><span>F</span><span>u</span><span>l</span><span>l </span><span>S</span><span>t</span><span>a</span><span>c</span><span>k </span>
                <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></h2>
            <Link to="/about" className="btn">About me</Link>
        </div>
    </div>
};

export default Home;