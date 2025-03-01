import { useState, useEffect } from "react";
import { BOXES } from "./constants.js";
import "./styles.css";

export default function BoxGame() {
  const [boxes, setBoxes] = useState(BOXES);
  const [clickedBoxes, setClickedBoxes] = useState(new Set([]));
  useEffect(() => {
    if (clickedBoxes.size === boxes.length) {
      clearAll();
    }
  }, [clickedBoxes]);
  const clearAll = () => {
    setTimeout(() => {
      console.log(clickedBoxes);
      let tempClickedBoxes = [...clickedBoxes];
      let clickedBox = tempClickedBoxes.shift();
      console.log(tempClickedBoxes);
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
      }
    }, 500);
  };
  const handleClick = (e) => {
    if (e.target.className === "box") {
      let finalBoxes = boxes.map((box) => {
        if (!box.isActive && box.id.toString() === e.target.id) {
          setClickedBoxes((prev) => new Set([...prev, box]));
          return { ...box, isActive: true };
        }
        return box;
      });
      setBoxes(finalBoxes);
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
        Click on all the boxes!
    </div>
  );
}
