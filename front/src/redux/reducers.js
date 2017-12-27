import { combineReducers } from 'redux';

import login from './example/reducers';
import todos from './todos/reducers';

export default combineReducers({
    todos
});