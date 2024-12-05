import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/about/About';
import ContactMe from './components/ContactMe';
import Copyright from './components/Copyright';
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
                <Route path="*" element={<Home />} />
            </Routes>
            <Copyright/>
        </div>
    </BrowserRouter>
  );
}

export default App;
