import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todoList: []
  }

  addTodoItem(todoItem) {
    this.state.todoList.push(todoItem)
    this.setState({
      todoList: this.state.todoList
    })
  }

  setCompleted(id) {
    const todoList = this.state.todoList.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    })
    this.setState({todoList})
  }

  removeTodoItem(id) {
    const todoList = this.state.todoList.filter(item => item.id !== id)

    this.setState({todoList})
  }

  render() {
    return (
      <div>
        <TodoInput 
          addTodoItem={this.addTodoItem.bind(this)}
        />
        <TodoList 
          todoList={this.state.todoList}
          setCompleted={this.setCompleted.bind(this)}
          removeTodoItem={this.removeTodoItem.bind(this)}
        />
      </div>
    )
  }
}

export default App;