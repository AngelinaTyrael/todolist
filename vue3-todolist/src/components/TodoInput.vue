<template>
  <div>
    <input
      type="text" 
      v-model="todoValue"
      @click="setTodoValue($event )"
    />
    <button @click="addTodoItem">增加</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoInput',
  setup(props, ctx) {
    const todoValue = ref('');

    const setTodoValue = (e) => {
      todoValue.value = e.target.value;
    }

    const addTodoItem = () => {
      const _val = todoValue.value.trim();

      if(_val.length === 0) {
        return
      }
      ctx.emit('addTodoItem', {
        id: new Date().getTime(),
        content: _val,
        completed: false
      })
      todoValue.value = '';
    }

    return {
      todoValue,
      setTodoValue,
      addTodoItem
    }
  }
}
</script>