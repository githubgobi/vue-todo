/**
 * The routes
 *
 * @type {object} The routes
 */
export const routes = {
  '/todo': {
    name: 'todo.index',
    component: require('./pages/todo/index.vue'),
  },
  '/todo/create': {
    name: 'todo.create',
    component: require('./pages/todo/create.vue'),
  }
};

/**
 * The redirects
 *
 * @type {object} The redirects
 */
export const redirects = {
  '/': '/todo',
};
