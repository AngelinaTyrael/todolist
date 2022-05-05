<template>
  <div>
    <TodoInput 
      @addTodoItem="addTodoItem"
    />
    <TodoList 
      :todoList="todoList"
      @setCompleted="setCompleted"
      @removeTodoItem="removeTodoItem"
    />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { reactive, toRefs } from 'vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup(props) {
    const state = reactive({
      todoList: [] 
    })

    const addTodoItem = (todoItem) => {
      state.todoList.push(todoItem);
    }

    const setCompleted = (id) => {
      state.todoList = state.todoList.map(item => {
        if(item.id === id) {
          item.completed = !item.completed
        }

        return item;
      })
    }

    const removeTodoItem = (id) => {
      state.todoList = state.todoList.filter(item => item.id !== id)
    }

    return {
      addTodoItem,
      setCompleted,
      removeTodoItem,
      ...toRefs(state)
    }
  }
}
</script>
