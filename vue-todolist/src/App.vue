<template>
  <div id="app">
    <TodoInput
      @addTodoItem="addTodoItem"
    />
    <TodoList
      :todoList="todoList"
      @removeTodoItem="removeTodoItem"
      @setCompleted="setCompleted "
    />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    addTodoItem(todoItem) {
      this.todoList.push(todoItem )
    },
    removeTodoItem(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    setCompleted(id) {
      this.todoList = this.todoList.map(item => {
        if(item.id === id) {
          item.completed = !item.completed
        }

        return item;
      })
    }
  }
}
</script>
