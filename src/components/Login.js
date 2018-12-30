import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    handleSubmit() {
        const { selected } = this.state;
        alert(`Signed in as ${selected}`);
    }

    render() {
        const { selected } = this.state;
        const { authedUser, users } = this.props;

        if (authedUser !== null)
            return <div> {`Logged in as ${authedUser}`} </div>
        else
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.handleChange}>
                            {Object.keys(users).map((uid) => {
                                return (<option key={uid} value={uid}>{users[uid]["name"]}</option>)
                            })}
                        </select>
                        <button type="submit" name="submit">
                            {selected ? `Sign in as ${selected}`: 'Sign in'}
                        </button>
                    </form>

                </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(Login);