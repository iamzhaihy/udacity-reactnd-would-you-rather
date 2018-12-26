import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveUsers } from '../actions/users';
import { handleReceiveQuestions } from '../actions/questions';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveQuestions())
        this.props.dispatch(handleReceiveUsers())
    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(App)
