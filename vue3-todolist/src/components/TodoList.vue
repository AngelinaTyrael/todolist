<template>
  <ul>
    <li
      v-for="(item, index) of todoList"
      :key="index"
    >
      <input type="checkbox" 
        :checked="item.completed"
        @click="setCompleted(item.id)"
      />
      <span
        :style="{'text-decoration': item.completed ? 'line-through' : 'none'}"
      >
        {{item.content}}
      </span>
      <button @click="removeTodoItem(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    todoList: Array
  },
  setup(props, ctx) {
    const setCompleted = (id) => {
      ctx.emit('setCompleted', id);
    }

    const removeTodoItem = (id) => {
      ctx.emit('removeTodoItem', id);
    }

    return {
      setCompleted,
      removeTodoItem
    }
  }
}
</script>