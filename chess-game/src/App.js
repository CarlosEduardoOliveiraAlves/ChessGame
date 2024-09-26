import React from 'react';
import './App.css';

function Chessboard() {
    const createBoard = () => {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const row = [];
            for (let j = 0; j < 8; j++) {
                const isBlack = (i + j) % 2 === 1;
                row.push(
                    <div
                        key={`${i}-${j}`}
                        className={isBlack ? 'black' : 'white'}
                        style={{ width: '80px', height: '80px' }}
                    />
                );
            }
            board.push(<div style={{ display: 'flex' }} key={i}>{row}</div>);
        }
        return board;
    };

    return <div>{createBoard()}</div>;
}

function App() {
    return (
        <div className="App">
            <Chessboard />
        </div>
    );
}

export default App;
