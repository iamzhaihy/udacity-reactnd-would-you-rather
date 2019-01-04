import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { login } from '../actions/authedUser';

class Login extends Component {    
    constructor(props) {
        super(props);
        this.state = {selected: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, {value}) {
        this.setState({
            selected: value
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
        const options = Object.keys(users).map((uid) => {
            const { id, name, avatarURL } = users[uid];
            return {
                key: id,
                value: id,
                text: `${name} (@${id})`,
                image: { avatar: true, src: avatarURL }
            }
        });
        
        return (
            <div style={{width: '80%', margin:'10px auto'}}>
                <h1 style={{textAlign: 'center'}}> Please login first </h1>
                <Form relaxed='very' size='large' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Dropdown 
                            onChange={this.handleChange} 
                            placeholder='Select User' 
                            selection 
                            options={options} 
                            value={selected}
                        />
                    </Form.Field>
                    <Button size='large' content={selected ? `Sign in as ${selected}`: 'Sign in'} primary /> 
                </Form>

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