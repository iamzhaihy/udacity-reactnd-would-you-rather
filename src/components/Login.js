import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authedUser';

class Login extends Component {    
    constructor(props) {
        super(props);
        this.state = {selected: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            selected: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { selected } = this.state;
        if (selected)
            this.props.dispatch(login(selected));
    }

    render() {
        const { users } = this.props;
        const { selected } = this.state;
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        <option value=''>Choose a user from the list</option>
                        {Object.keys(users).map((uid) => {
                            return (
                                <option key={uid} value={uid}>
                                    {users[uid]["name"]}
                                </option>
                            )
                        })}
                    </select>
                    <input type="submit" value={selected ? `Sign in as ${selected}`: 'Sign in'} />
                </form>

            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login);