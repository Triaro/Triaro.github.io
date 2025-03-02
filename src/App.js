import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Games from './components/Games';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/games" element={<Games />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
