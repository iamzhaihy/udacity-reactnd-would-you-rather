import React from 'react';

const style = {
    fontSize: '2em',
    textAlign: 'center',
    fontFamily: 'Courier New'
}

const NotFound = () => {
    return (
        <div style={style}>
            <h1> 404 </h1>
            <p> The page you requested is not available! </p>
        </div>
    )
}

export default NotFound;