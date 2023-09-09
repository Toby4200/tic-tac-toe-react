const Cell = ({ id, cell, setCells, turn, setTurn, cells, winningMessage }) => {
  const handleClick = (e) => {
    console.log('hey there click', e);

    const filled =
      e.target.firstChild.classList.contains('circle') ||
      e.target.firstChild.classList.contains('cross');

    // set circle or cross onClick
    // then change turn
    if (!filled) {
      if (turn === 'circle') {
        e.target.firstChild.classList.add('circle');
        handleCellChange('circle');
        setTurn('cross');
      }

      if (turn === 'cross') {
        e.target.firstChild.classList.add('cross');
        handleCellChange('cross');
        setTurn('circle');
      }
    }

    console.log('filled', filled);
  };

  // set value in array
  const handleCellChange = (newCellName) => {
    const newCells = cells.map((cell, index) => {
      if (index === id) {
        return newCellName;
      } else {
        return cell;
      }
    });

    setCells(newCells);
  };

  return (
    <div
      className="square"
      id={id}
      cell={cell}
      onClick={winningMessage ? undefined : handleClick}
    >
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
