import React from 'react';
import { func } from 'prop-types';
const RestartButton = ({restartGame}) => (
    <div className="Restart-Button" onClick={restartGame}>
        <h1 className="Restart-Text">Restart Game</h1>
    </div>
);


RestartButton.propTypes = {
    restartGame: func
};

export default RestartButton
