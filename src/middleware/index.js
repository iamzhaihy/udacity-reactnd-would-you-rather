import logger from './logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import 'semantic-ui-css/semantic.min.css';

export default applyMiddleware(
    thunk,
    logger
)
