import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Image } from 'semantic-ui-react';

const QuestionList = (props) => {
    const { qlist, qtype, user } = props;
    const { id, avatarURL } = user; 
    
    let questions = [];

    switch (qtype) {
        case 'unanswered':
            questions = qlist.filter((q) => {
                let votes1 = q['optionOne']['votes'];
                let votes2 = q['optionTwo']['votes'];
                return !votes1.includes(id) && !votes2.includes(id);
            });
            break;
        case 'answered':
            questions = qlist.filter((q) => {
                let votes1 = q['optionOne']['votes'];
                let votes2 = q['optionTwo']['votes'];
                return votes1.includes(id) || votes2.includes(id);
            });
            break;
        case 'all':
            questions = qlist;
            break;
        default:
            questions = qlist;
    }

    questions.sort((x, y) => y['timestamp'] - x['timestamp']);
    
    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <h1 style={{textAlign: 'center'}}> 
                {`${capitalize(qtype)} Polls`} 
            </h1>
            <List relaxed='very' size='huge'>
                {questions.map(q => {
                    const { id, optionOne, optionTwo, timestamp } = q;
                    const date = new Date(timestamp);
                    return (
                        <List.Item key={id}>
                            <Image avatar src={avatarURL} />
                            <List.Content>
                                <List.Header>
                                    <Link to={`/questions/${id}`} key={id}> 
                                        {`Would you rather ${optionOne.text} OR ${optionTwo.text}?`}
                                    </Link>
                                </List.Header>
                                <List.Description>{`posted at ${date.toDateString()}`}</List.Description>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
        </div>
    )
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const { qtype } = props;
    const qlist = Object.keys(questions).map(qid => questions[qid]);
    return {
        qtype,
        qlist,
        user: users[authedUser]
    }
} 

export default connect(mapStateToProps)(QuestionList);
