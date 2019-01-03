import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

class Question extends Component {
    onSubmit(answer) {
        const { authedUser, question, dispatch } = this.props;
        const qid = question['id'];

        dispatch(handleAnswerQuestion({
            authedUser,
            qid,
            answer
        }))
    }

    render() {
        const { authedUser, question } = this.props;
        const { author, optionOne, optionTwo } = question;
    return (
            <div>
                <h1> Would you rather? </h1>
                <h5> {`posted by ${author}`} </h5>
                <div>
                    <p> {`Option 1: ${optionOne['text']}`} </p>
                    { questionAnswered(authedUser,question) && <p> {`voted by ${optionOne.votes.join(", ")}`} </p>}
                </div>
                <div>
                    <p> {`Option 2: ${optionTwo['text']}`} </p>
                    { questionAnswered(authedUser,question) && <p> {`voted by ${optionTwo.votes.join(", ")}`} </p>}
                </div>
                <button className='button' onClick={() => this.onSubmit('optionOne')}>Choose Option 1</button>
                <button className='button' onClick={() => this.onSubmit('optionTwo')}>Choose Option 2</button>
        </div>
    )
}
}

function questionAnswered(uid, question) {
    let votes1 = question['optionOne']['votes'];
    let votes2 = question['optionTwo']['votes'];
    return votes1.includes(uid) || votes2.includes(uid);
}

function mapStateToProps ({ authedUser, questions }, props) {
    const { qid } = props.match.params;
    const question = questions[qid] ? questions[qid] : null;
    return {
        question,
        authedUser
    };
}

export default connect(mapStateToProps)(Question)