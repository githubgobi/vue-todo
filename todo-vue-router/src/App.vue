<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todos: []
      };
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
