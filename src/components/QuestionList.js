import React from 'react';
import Question from './Question';

const style = {
    margin: '10px',
    padding: '10px',
    border: '2px solid black'
};

const QuestionList = (props) => {
    const { questions } = props;
    
    return (
        <div style={style}>
            <h1> QuestionList </h1>
            {questions && Object.keys(questions).map(qid => {
                return <Question key={qid} question={questions[qid]}/>
            })}
        </div>
    )
}

export default QuestionList
