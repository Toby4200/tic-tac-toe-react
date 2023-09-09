import { useState } from 'react';
import Cell from './components/Cell';

const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState('circle');
  const [winningMessage, setWinningMessage] = useState(null);

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
            />
          );
        })}
      </div>
      {turn && <p>Now it's the turn of the {turn}</p>}
    </div>
  );
};

export default App;
