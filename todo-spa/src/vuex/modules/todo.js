import {
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODOS
} from '../mutation-types'

// initial state
const state = {
  all: [{
    content: 'Hello World!',
    done: true,
  }]
};

// mutations
const mutations = {
  [FETCH_TODOS] (state, todos) {
    state.all = todos;
  },

  [TOGGLE_TODO] (state, todo) {
    var foundTodo = state.all.find(t => t === todo);

    foundTodo.done = !foundTodo.done;
  },

  [REMOVE_TODO] (state, todo) {
    state.all.$remove(todo);
  }
};

export default {
  state,
  mutations
}
