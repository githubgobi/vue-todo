<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store';
  import {
    fetchTodos
  } from './vuex/actions';

  export default {
    store,
    vuex: {
      actions: {
        fetchTodos,
      }
    },
    ready() {
      this.fetchTodos();
    }
  };
</script>
<style>
  a {
    text-decoration: none !important;
  }

  a:hover {
    text-decoration: none !important;
  }

  .list-group-item.disabled,
  .list-group-item.disabled:hover,
  .list-group-item.disabled:focus {
    cursor: default !important;
  }
</style>
