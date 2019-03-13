import React from 'react';
import { string, bool } from 'prop-types';

const EndMessage = ({msg, error}) => {
    return (
        <div className="End-Message">
            <h1 className={`message ${error? "error":""}`}>{msg}</h1>
        </div>
    )};

EndMessage.propTypes = {
    msg: string,
    error: bool,
};

export default EndMessage
