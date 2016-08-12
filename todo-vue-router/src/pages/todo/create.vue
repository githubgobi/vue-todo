<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
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
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <button class="btn btn-primary btn-block">
                        Add todo
                      </button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <a class="btn btn-danger btn-block"
                         v-link="{ name: 'todo.index' }"
                      >
                        Back
                      </a>
                    </div>
                  </div>
                </div>
              </form>
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
      }
    },
    methods: {
      add(newTodo) {
        if (newTodo) {
          this.$parent.todos.push({
            content: newTodo,
            done: false
          });
          this.$router.go({
            name: 'todo.index',
          });
        }
      },
    }
  }
</script>
