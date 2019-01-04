import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: '',
            optionTwo: '',
            submitted: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { authedUser, dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;
        
        dispatch(handleAddQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }))

        this.setState({
            submitted: true
        })
    }
    
    render() {
        if (this.state.submitted)
            return <Redirect to='/unanswered'/>
        
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <h1 style={{textAlign: 'center'}}> Would you rather? </h1>
                <Form size='large' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Option 1</label>
                        <input 
                            name='optionOne'
                            onChange={this.handleChange} 
                            placeholder='Enter the first option...' 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Option 2</label>
                        <input 
                            name='optionTwo'
                            onChange={this.handleChange} 
                            placeholder='Enter the second option...' 
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);