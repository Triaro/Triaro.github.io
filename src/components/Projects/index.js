import {useState, useEffect} from 'react';
import TodoApp from './ToDoApp/index.js';
import MoneyBondImg from '../../resources/images/MoneyBond.png';
import TickTacToeImg from '../../resources/images/tictactoe.png';
import TodoAppImg from '../../resources/images/todo_app.jpg';
import WeatherAppImg from '../../resources/images/weather_app.png';
const Projects = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        {
            name: 'MoneyBond App - KhataBook Clone',
            imageURL: MoneyBondImg,
            externalURL: 'https://github.com/Triaro/MoneyBond'
        },
        {
            name: 'Tic Tac Toe Game',
            imageURL: TickTacToeImg,
            externalURL: 'https://github.com/Triaro/TicTacToe'
        },
        {
            name: 'Todo web app (Vue.js)',
            imageURL: TodoAppImg,
            externalURL: 'https://github.com/Triaro/Vue_Todo'
        },
        {
            name: 'Weather app (Vue.js)',
            imageURL: WeatherAppImg,
            externalURL: 'https://github.com/Triaro/Vue_Weather'
        },
      ];
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [slideIndex]);

    const nextSlide = () => {
        setSlideIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    const previousSlide = () => {        
        setSlideIndex((prevIndex) =>
            prevIndex ===  0 ? images.length - 1 : prevIndex - 1
        );
    }
    
    return (
      <section className="work" id="work">
        <TodoApp/>
        <div className="heading white text-center">
            <h2>More Projects</h2>
        </div>
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div key={index} className={`workBx mySlides ${index === slideIndex ? 'active' : ''}`}>
                <div className="numbertext">{index + 1} / {images.length}</div>
                <a href={image.externalURL} target="_blank" rel="noopener noreferrer">
                    <img src={image.imageURL} style={{ width: '100%' }} alt="Unavailable" />
                </a>
                <div className="text">{image.name}</div>
                </div>
            ))}
            <a className="prev" onClick={() => previousSlide()}>{'<'}</a>
            <a className="next" onClick={() => nextSlide()}>{'>'}</a>
        </div>
        <br/>
              {/* The dots/circles */}
              {/* <div style={{textAlign: 'center'}}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
                <span className="dot" onClick={() => currentSlide(4)}></span>
              </div> */}
          <div className="heading text-center">
              <a href="#work" className="btn">View More</a>
          </div>
      </section>
    );
};

export default Projects;