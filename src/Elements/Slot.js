import React from 'react';
import { number, func } from 'prop-types';

const Slot = ({value, columnIndex, slotSelected}) => {
    return (
    <div className={`Slot ${"column" + columnIndex}`} onClick={()=>{slotSelected(columnIndex)}}>
        <div className={`Circle ${value? value === 1? "Black" : "Red" : "White" }`}>

        </div>
    </div>
)};

Slot.propTypes = {
    value: number,
    columnIndex: number,
    slotSelected: func
};

export default Slot
