import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes, redirects } from './routes';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
require('bootstrap');
require('bootstrap/less/bootstrap.less');

Vue.use(VueRouter);
const Router = new VueRouter({
  hashbang: false,
});
Router.map(routes);
Router.redirect(redirects);
Router.start(Vue.extend(App), '#app');
