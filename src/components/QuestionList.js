import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

const style = {
    margin: '10px',
    padding: '10px',
    border: '2px solid black'
};

class QuestionList extends Component {
    render() {
        const { questions } = this.props;
        
        return (
            <div style={style}>
                <h1> QuestionList </h1>
                {questions && Object.keys(questions).map(qid => {
                    return <Question key={qid} question={questions[qid]}/>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionList)
