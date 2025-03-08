import { useState, useEffect } from "react";
import { BOXES } from "./constants.js";
import "./styles.css";

export default function BoxGame() {
  const [boxes, setBoxes] = useState(BOXES);
  const [caption, setCaption] = useState('Click on all the boxes!');
  const [clickedBoxes, setClickedBoxes] = useState(new Set([]));
  const [boxTimeout, setBoxTimeout] = useState(false);
  useEffect(() => {
    if (clickedBoxes.size === boxes.length) {
      clearAll();
    }
  }, [clickedBoxes]);
  const clearAll = () => {
    setBoxTimeout(true);
    setTimeout(() => {
      let tempClickedBoxes = [...clickedBoxes];
      let clickedBox = tempClickedBoxes.shift();
      setClickedBoxes((prev) => {
        prev.delete(clickedBox);
        return prev;
      });
      if (clickedBox) {
        setBoxes((prev) =>
          prev.map((box) => {
            if (clickedBox.id === box.id) {
              return { ...box, isActive: false };
            }
            return box;
          })
        );
        clearAll();
      } else {
        setBoxTimeout(false);
        setCaption('Click on all the boxes!');
      }
    }, 500);
  };
  const handleClick = (e) => {
    if (e.target.className === "box" && !boxTimeout) {
      let finalBoxes = boxes.map((box) => {
        if (!box.isActive && box.id.toString() === e.target.id) {
          setClickedBoxes((prev) => new Set([...prev, box]));
          return { ...box, isActive: true };
        }
        return box;
      });
      setBoxes(finalBoxes);
    } else if (e.target.className === "box" && boxTimeout) {
      setCaption('Wait for the animation to finish :)')
    }
  };
  return (
    <div className='container'>
        <div className="box-container" onClick={(e) => handleClick(e)}>
            {boxes.map((box) => {
                return (
                <div
                    id={box.id}
                    key={box.id}
                    className={box.isActive ? "box active" : "box"}
                />
                );
            })}
        </div>
        <span className="hover-text">{caption}</span>
    </div>
  );
}
