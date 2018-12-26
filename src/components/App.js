import React, { Component } from 'react';
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

export default App;
