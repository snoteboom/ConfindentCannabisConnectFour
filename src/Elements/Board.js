import React from 'react';
import Row from '../Elements/Row'

import { array, func } from 'prop-types';
const Board = ({board, slotSelected}) => (
    <div className="Board">
        {board.map((row, idx)=><Row key={"row" + idx} row={row} slotSelected={slotSelected}/>)}
        <div className="Empty"></div>
    </div>
);


Board.propTypes = {
    board: array,
    slotSelected: func
};

export default Board
