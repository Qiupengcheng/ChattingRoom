import { createAction } from 'redux-actions';

// ------------------------------------
// Constants (Action Types)
// ------------------------------------
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FINISH_TODO = 'FINISH_TODO';
export const UNFINISH_TODO = 'UNFINISH_TODO';


/**
 * 暴露 action 类别
 * @type {{}}
 */
export const actionTypes = {
    ADD_TODO,
    DELETE_TODO,
    FINISH_TODO,
    UNFINISH_TODO
};

// ------------------------------------
// pure action creator
// ------------------------------------

/**
 *  增加todo
 */
const addTodo = createAction(ADD_TODO);
export const add_todo = (param) => {
    return dispatch => {
        dispatch(addTodo(param));
    };
};

/**
 *  删除todo
 */
const deleteTodo = createAction(DELETE_TODO);
export const delete_todo = (param) => {
    return dispatch => {
        dispatch(deleteTodo(param));
    };
};

/**
 *  完成todo
 */
const finishTodo = createAction(FINISH_TODO);
export const finish_todo = (param) => {
    return dispatch => {
        dispatch(finishTodo(param));
    };
};


// ------------------------------------
// asyn action creator
// ------------------------------------




/**
 * 暴露 action creator
 */
export default {
    add_todo,
    delete_todo,
    finish_todo
}