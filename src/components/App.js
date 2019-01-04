import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authedUser';
import { handleReceiveUsers } from '../actions/users';
import { handleReceiveQuestions } from '../actions/questions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import NavBar from './NavBar';
import QuestionList from './QuestionList';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
import NewQuestion from './NewQuestion';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveQuestions())
        this.props.dispatch(handleReceiveUsers())
    }

    render() {
        const { authedUser, dispatch } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    {!authedUser
                        ? <Login />
                        : <div>
                            <div style={{fontSize: '1.5em'}} > 
                                {`Logged in as ${authedUser} `}
                                <span style={{float:'right', color: 'red'}} onClick={() => dispatch(logout(authedUser))}> Logout </span> 
                            </div>
                            <Switch>
                                <Route 
                                    exact path='/' 
                                    render={() => <QuestionList qtype="all" />} 
                                />
                                <Route 
                                    path='/answered' 
                                    render={() => <QuestionList qtype="answered" />} 
                                />
                                <Route 
                                    path='/unanswered' 
                                    render={() => <QuestionList qtype="unanswered" />} 
                                />
                                <Route 
                                    path='/leaderboard' 
                                    component={LeaderBoard}
                                />
                                <Route 
                                    path='/add' 
                                    component={NewQuestion} 
                                />
                                <Route 
                                    path='/questions/:qid' 
                                    component={Question} 
                                />
                                <Route component={NotFound}/>
                            </Switch>
                          </div>}
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(App)
