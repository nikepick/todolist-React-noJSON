import React from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/Layout/Header'
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Play The Witcher",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Buy Sony Xperia 1ii",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Get a lady",
        completed: false
      },
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //delTodo
  delTodo = (id) => {
    console.log(id);
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    });
  }

  //addTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      complete: false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <div className="container">
          <Header />
          <AddTodo addTodo = {this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>


      </div>
    );
  }
}

export default App;
