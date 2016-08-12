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
