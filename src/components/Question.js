import React from 'react';

const style = {
    margin: '10px',
    padding: '10px',
    border: '2px solid black'
};

const Question = (props) => {
    const { author, optionOne, optionTwo } = props.question;

    return (
        <div style={style}>
            <h1> Question </h1>
            <h2> Would you rather? </h2>
            <p> Asked by {author} </p>
            <p> Option A: {optionOne["text"]} </p>
            <p> Option B: {optionTwo["text"]} </p>
        </div>
    )
}

export default Question;