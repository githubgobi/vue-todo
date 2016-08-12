import Vue from 'vue';
import * as types from './mutation-types'

export const fetchTodos = ({ dispatch }) => {
  Vue.http.get('todo')
    .then(({ data }) => dispatch(types.FETCH_TODOS, data));
};

export const addTodo = ({ dispatch }, newTodo) => {
  const todo = {
    content: newTodo,
    done: false,
  };

  Vue.http.post('todo', todo)
    .then(() => {
      fetchTodos({ dispatch });
      window.router.go({
        name: 'todo.index'
      });
    });
};

export const toggleTodo = ({ dispatch }, todo) => {
  Vue.http.get(`todo/${todo.id}/toggle`)
    .then(() => dispatch(types.TOGGLE_TODO, todo));
};

export const removeTodo = ({ dispatch }, todo) => {
  Vue.http.delete(`todo/${todo.id}`)
    .then(() => dispatch(types.REMOVE_TODO, todo));
};
