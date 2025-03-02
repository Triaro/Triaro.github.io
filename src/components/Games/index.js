import { useState } from 'react';
import BoxGame from './BoxGame';
import './styles.css';
import MemoryCheck from './MemoryCheck';
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
            title: 'Memory Check',
            component: <MemoryCheck/>
        },
        {
            title: 'More games coming...',
            component: <div>More games coming...</div>
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
            return <div key={game?.id} className={activeGame.id === game.id ? 'game active' : "game"} onClick={() => handleClick(game.id)}>
                <span>{game?.id} - </span>{game.title}
            </div>
        })}
        <div className="game-container" style={{ marginTop: '20px'}}>
            {showGame()}
        </div>
    </div>
};

export default Games;