import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import reducer from './reducers';
import middleWare from './middleware';
import { createStore } from 'redux';

const store = createStore(reducer, middleWare);
