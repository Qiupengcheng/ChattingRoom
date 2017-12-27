import { handleActions } from 'redux-actions';
import { actionTypes }  from './actions';

const initialState = {
    todoList: []
};

export default handleActions({
    [actionTypes.ADD_TODO](state, action) {
        return {todoList: state.todoList.concat(action.payload)};
    },
    [actionTypes.DELETE_TODO](state, action) {
        const filteredList = state.todoList.filter(todo => {
            return todo.id !== action.payload.id;
        });
        return {todoList: filteredList};
    },
    [actionTypes.FINISH_TODO](state, action) {
        const filteredList = state.todoList.map(todo => {
             return todo.id === action.payload.id ? Object.assign({}, todo, {isFinished: true}) : todo;
        });
        return {todoList: filteredList};
    }
}, initialState);