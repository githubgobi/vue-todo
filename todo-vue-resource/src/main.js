import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
require('bootstrap');
require('bootstrap/less/bootstrap.less');

Vue.use(VueResource);
Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = 'http://todo-example.dev';

new Vue({
  el: 'body',
  components: { App }
});
