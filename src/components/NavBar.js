import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active">
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/answered' activeClassName="active">
                        Answered
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/unanswered' activeClassName="active"> 
                        Unanswered 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName="active"> 
                        Leaderboard 
                    </NavLink>
                </li>
                <li style={{float: 'right'}}>
                    <NavLink to='/add'> 
                        <Popup trigger={<Icon name='compose' />} content='ask a new question' />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
