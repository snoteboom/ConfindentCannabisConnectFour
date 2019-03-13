import React from 'react';
import { array, func } from 'prop-types';
import Slot from "./Slot"

const Row = ({row, slotSelected}) => (
    <div className="row">
        {row.map((slot, idx) => <Slot key={idx} value={slot} columnIndex={idx} slotSelected={slotSelected}/>)}
    </div>
);


Row.propTypes = {
    row: array,
    slotSelected: func
};

export default Row
