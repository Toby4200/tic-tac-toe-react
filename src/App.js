import { useState, useEffect } from 'react';
import Cell from './components/Cell';

const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState('circle');
  const [winningMessage, setWinningMessage] = useState(null);

  // on every cells change -> check winners
  // onEach winning combination -> check if it wins
  useEffect(() => {
    let isCircleWinning = false,
      isCrossWinning = false;
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((combo) => {
      isCircleWinning = combo.every((i) => {
        return cells[i] === 'circle';
      });

      isCrossWinning = combo.every((i) => {
        return cells[i] === 'cross';
      });

      if (isCircleWinning) {
        setWinningMessage('circle');
        return;
      }

      if (isCrossWinning) {
        setWinningMessage('cross');
        return;
      }
    });
  }, [cells]);

  console.log('cells', cells);
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => {
          // todo - what will happen if an index will be the same?
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              winningMessage={winningMessage}
            />
          );
        })}
      </div>

      {winningMessage && <p>{winningMessage} wins!</p>}
      {!winningMessage && turn && <p>Now it's the turn of the {turn}</p>}
    </div>
  );
};

export default App;
