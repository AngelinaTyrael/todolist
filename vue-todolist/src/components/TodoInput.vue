<template>
  <div>
    <input 
      type="text" 
      v-model="todoValue"
      @input="setTodoValue($event)"
    />
    <button @click="addTodoItem">增加 </button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      todoValue: ''
    } 
  },
  methods: {
    setTodoValue(e) {
      this.todoValue = e.target.value; 
    },
    addTodoItem() {
      const _val =  this.todoValue.trim();

      if(_val.length === 0) {
        return;
      }
      
      this.$emit('addTodoItem', {
        id: new Date().getTime(),
        content: _val,
        completed: false
      });

      this.todoValue = '';
    }
  }
}
</script>