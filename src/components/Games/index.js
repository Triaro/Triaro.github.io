import { useState } from 'react';
import BoxGame from './BoxGame';
import './styles.css';
const Games = () => {
    const [activeGame, setActiveGame] = useState({
        id: 1,
        title: 'Magical Boxes',
        component: <BoxGame/>
    });
    const gamesList = [
        {
            id: 1,
            title: 'Magical Boxes',
            component: <BoxGame/>
        },
        {
            id: 2,
            title: 'Tic Tac Toe',
            component: <BoxGame/>
        }
    ];
    const showGame = () => {
        return activeGame.component;
    }
    const handleClick = id => {
        setActiveGame(gamesList.find(game => game.id === id));
    };
    return <div className="games-container" id="games">
        <div className="textBx ">
            <h2>GAMES GALLERY</h2>
        </div>
        { gamesList.map(game => {
            return <div key={game.id} className={activeGame.id === game.id ? 'game active' : "game"} onClick={() => handleClick(game.id)}>
                <span>{game.id} - </span>{game.title}
            </div>
        })}
        {showGame()}
    </div>
};

export default Games;