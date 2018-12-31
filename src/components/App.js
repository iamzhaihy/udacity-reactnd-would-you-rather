import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';
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
                    {!authedUser
                        ? <Login />
                        : <div>
                            <div> 
                                {`Logged in as ${authedUser} `} 
                                <span onClick={() => dispatch(logout(authedUser))}> Logout </span> 
                            </div>
                          </div>}
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
