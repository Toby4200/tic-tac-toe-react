const Cell = ({ id, cell, setCells, turn, setTurn }) => {
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
        setTurn('cross');
      }

      if (turn === 'cross') {
        e.target.firstChild.classList.add('cross');
        setTurn('circle');
      }
    }

    console.log('filled', filled);

    // setCells();
  };

  return (
    <div className="square" id={id} cell={cell} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
