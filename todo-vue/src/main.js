import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
require('bootstrap');
require('bootstrap/less/bootstrap.less');

new Vue({
  el: 'body',
  components: { App }
});
