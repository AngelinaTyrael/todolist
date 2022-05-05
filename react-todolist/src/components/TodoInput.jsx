import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    todoValue: ''
  }

  setTodoValue(e) {
    this.setState({
      todoValue: e.target.value
    })
  }

  addTodo() {
    const _val = this.state.todoValue.trim();
    const { addTodoItem }  = this.props;

    if(_val.length === 0) {
      return;
    }

    addTodoItem({
      id: new Date().getTime(),
      content: _val,
      completed: false
    })

    this.setState({
      todoValue: ''
    })
  }

  render() {
    const { todoValue } = this.state;

    return (
      <div>
        <input type="text"
          value={todoValue}
          onChange={(e) => this.setTodoValue(e)}
        />
        <button onClick={this.addTodo.bind(this)}>增加</button>
      </div>
    )
  }
}

export default TodoInput;
