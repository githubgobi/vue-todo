import * as types from './mutation-types'

export const addTodo = ({ dispatch }, newTodo) => {
  dispatch(types.ADD_TODO, newTodo);
};

export const toggleTodo = ({ dispatch }, todo) => {
  dispatch(types.TOGGLE_TODO, todo);
};

export const removeTodo = ({ dispatch }, todo) => {
  dispatch(types.REMOVE_TODO, todo);
};
