<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <span class="panel-title">
                  Add todo
              </span>
            </div>
            <div class="panel-body">
              <form @submit.prevent="add(newTodo)">
                <div class="form-group">
                  <input class="form-control"
                         v-model="newTodo"
                         placeholder="Add todo..."
                  />
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block">
                    Add todo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <span class="panel-title">
                  Todos
              </span>
            </div>
            <div class="panel-body">
              <ul class="list-group">
                <li class="list-group-item disabled"
                    v-if="todos.length === 0">
                  No todos...
                </li>
                <li class="list-group-item"
                    :class="{ 'disabled' : todo.done }"
                    v-for="todo in todos"
                >
                  {{ todo.content }}
                  <span class="pull-right">
                    <a @click.prevent="toggle(todo)"
                       href="#"
                    >
                      <i class="glyphicon glyphicon-remove-sign"
                         v-if="todo.done"
                      ></i>
                      <i class="glyphicon glyphicon-ok-sign"
                         v-else
                      ></i>
                    </a>
                    <a @click.prevent="remove(todo)"
                       href="#"
                    >
                      <i class="glyphicon glyphicon-trash"></i>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newTodo: '',
        todos: []
      }
    },
    methods: {
      add(newTodo) {
        if (newTodo) {
          this.todos.push({
            content: newTodo,
            done: false
          });
          this.newTodo = '';
        }
      },
      toggle(todo){
        todo.done = !todo.done;
      },
      remove(todo) {
        this.todos.$remove(todo);
      }
    }
  }
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
