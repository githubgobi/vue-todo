<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <span class="panel-title">
                Todos
              </span>
            </div>
            <div class="panel-body">
              <a v-link="{ name: 'todo.create'}"
                 class="btn btn-primary"
              >
                Add todo
              </a>
              <br/>
              <br/>
              <ul class="list-group">
                <li class="list-group-item disabled"
                    v-if="$root.todos.length === 0">
                  No todos...
                </li>
                <li class="list-group-item"
                    :class="{ 'disabled' : todo.done }"
                    v-for="todo in $root.todos"
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
      toggle(todo) {
        todo.done = !todo.done;
      },
      remove(todo) {
        this.$root.todos.$remove(todo);
      }
    }
  }
</script>
