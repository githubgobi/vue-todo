import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import jQuery from 'jquery';
import { routes, redirects } from './routes';
import App from './App.vue';

// Setup bootstrap
window.$ = window.jQuery = jQuery;
require('bootstrap');
require('bootstrap/less/bootstrap.less');

// Setup vue-resource
Vue.use(VueResource);
Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = 'http://todo-example.dev';

// Setup vue-router
Vue.use(VueRouter);
const Router = new VueRouter({
  hashbang: false,
});
Router.map(routes);
Router.redirect(redirects);

window.router = Router;

Router.start(Vue.extend(App), '#app');
