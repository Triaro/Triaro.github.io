import {useState, useEffect} from 'react';
import MoneyBond from '../resources/images/MoneyBond.png';
import TickTacToe from '../resources/images/tictactoe.png';
import TodoApp from '../resources/images/todo_app.jpg';
import WeatherApp from '../resources/images/weather_app.png';
const ImageSlider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        {
            name: 'MoneyBond App - KhataBook Clone',
            imageURL: MoneyBond,
            externalURL: 'https://github.com/Triaro/MoneyBond'
        },
        {
            name: 'Tic Tac Toe Game',
            imageURL: TickTacToe,
            externalURL: 'https://github.com/Triaro/TicTacToe'
        },
        {
            name: 'Todo web app (Vue.js)',
            imageURL: TodoApp,
            externalURL: 'https://github.com/Triaro/Vue_Todo'
        },
        {
            name: 'Weather app (Vue.js)',
            imageURL: WeatherApp,
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
        <div className="heading white">
            <h2>My Projects</h2>
        </div>
        <div className="slideshow-container">
            <div className="workBx mySlides fade">
                <div className="numbertext">{slideIndex+1} / 4</div>
                <a href={images[slideIndex].externalURL} target="_blank">
                    <img src={images[slideIndex].imageURL} style={{width:'100%'}} alt="unavailable"/>
                </a>             
                <div className="text">{images[slideIndex].name}</div>
            </div>
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
          <div className="heading">
              <a href="#work" className="btn">View More</a>
          </div>
      </section>
    );
};

export default ImageSlider;