import { _getQuestions, _saveQuestionAnswer } from "../utils/_DATA"

export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

// action creaters
function add_question(optionOneText, optionTwoText, author){
    return {
        type: ADD_QUESTION,
        optionOneText,
        optionTwoText,
        author
    }
}

function answer_question(users, questions){
    return {
        type: ANSWER_QUESTION,
        users,
        questions
    }
}

function receive_questions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

// async functions
export function handleReceiveQuestions() {
    return (dispatch) => {
        _getQuestions()
            .then((questions) => dispatch(receive_questions(questions)))
            .catch(() => console.assert('Error: failed to get questions') )
    }
}

