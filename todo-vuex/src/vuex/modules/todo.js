import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from '../mutation-types'

// initial state
const state = {
  all: []
};

// mutations
const mutations = {
  [ADD_TODO] (state, newTodo) {
    state.all.push({
      content: newTodo,
      done: false,
    });
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
