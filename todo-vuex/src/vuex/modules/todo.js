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
    var index = state.all.indexOf(todo);

    state.all[index].done = !state.all[index].done;
  },
  [REMOVE_TODO] (state, todo) {
    var index = state.all.indexOf(todo);

    if (index > -1) {
      state.all.splice(index, 1);
    }
  }
};

export default {
  state,
  mutations
}
