import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Cards } from "./constants";
import "./styles.css";

export default function MemoryCheck() {
  const [cards, setCards] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [hoveringText, setHoveringText] = useState(["Let's see how good your memory is!"]);
  const [isTimeOutActive, setIsTimeOutActive] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    setCards(shuffleArray(Cards));
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (clickedCards.length === 8) {
      setHoveringText("Yayy! You did it.");
    }
  }, [clickedCards]);

  useEffect(() => {
    if (activeCards?.length === 2) {
      if(activeCards[0].value !== activeCards[1].value) { //If cards didn't match
        setIsTimeOutActive(true);
        setTimeout(() => {
          setCards(prev => {
            return prev.map(card => {
              if (card.value === activeCards[0].value || card.value === activeCards[1].value) {
                return {...card, isOpened: false};
              }
              return card
            });
          });
          setIsTimeOutActive(false);
        }, 1000);
      } else {
        setClickedCards(prev => [...prev , activeCards[0], activeCards[1]]);
      }
      setActiveCards([]);
    }
  }, [activeCards]);

  const onReset = () => {
    setIsStarted(false);
    setCards(shuffleArray(Cards));
    setClickedCards([]);
    setActiveCards([]);
    setHoveringText("Let's see how good your memory is!");
  }
  const shuffleArray = array => {
    let shuffledArray = [...array]; // Create a copy to avoid mutation
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  }

  const onStart = () => {
    setCards(prev => {
      return prev.map(card => {
        return {...card, isOpened: false}
      });
    });
    setIsStarted(true);
  };

  const handleClick = (e) => {
    if (e.target.className === "card" && !isTimeOutActive) {
        let finalCards = cards?.map((card) => {
          if (!card.isOpened && card.id.toString() === e.target.id) {
            setActiveCards((prev) => [...prev, card]);
            return { ...card, isOpened: true };
          }
          return card;
        });
        setCards(finalCards);
    }
  };
  return (
    <div className='memory-check-container'>
        <div className="card-container" onClick={(e) => handleClick(e)}>
            {cards?.map((card) => {
                return (
                <div
                    id={card.id}
                    key={card.id}
                    className={card.isOpened ? "card active" : "card"}
                >
                  {card.value}
                </div>
                );
            })}
        </div>
        <span className="hover-text">{hoveringText}</span>
        {!isStarted && <button className="btn" onClick={() => onStart()}>Start</button>}
        {clickedCards.length === 8 && <>
          <Confetti  width={dimensions.width} height={dimensions.height} numberOfPieces={300} />
          <button className="btn" onClick={() => onReset()}>Reset</button>          
        </>
        }
    </div>
  );
}
