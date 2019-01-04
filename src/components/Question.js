import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';

import { Container, Divider, Grid, Segment, Button, Icon } from 'semantic-ui-react';

const styles = {
    container: {
        width: '80%',
        margin: 'auto',
        textAlign: 'center'
    }
}

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
            <div style={styles.container}>
                <h1> Would you rather </h1>
                <h4> {`posted by ${author}`} </h4>
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <h2> Option 1 </h2> 
                            <p> {`${optionOne['text']}`} </p>
                            { question['optionOne']['votes'].includes(authedUser)
                                && <Icon name="check" color="green" size="huge" /> }
                        </Grid.Column>
                        <Grid.Column>
                            <h2> Option 2</h2>
                            <p> {`${optionTwo['text']}`} </p>
                            { question['optionTwo']['votes'].includes(authedUser)
                                && <Icon name="check" color="green" size="huge" /> }
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>

                { !questionAnswered(authedUser, question)
                    ? <Fragment>
                        <Button onClick={() => this.onSubmit('optionOne')}>Choose Option 1</Button>
                        <Button onClick={() => this.onSubmit('optionTwo')}>Choose Option 2</Button>
                    </Fragment>
                    : <Fragment>
                        <Divider horizontal>Statistics</Divider>
                        <Container text>
                            <p>{`${stats.voterOne} people voted option 1 (${stats.percentOne.toFixed(2)}%)`}</p>
                            <p>{`${stats.voterTwo} people voted option 2 (${stats.percentTwo.toFixed(2)}%)`}</p>
                        </Container>
                    </Fragment>
                }
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