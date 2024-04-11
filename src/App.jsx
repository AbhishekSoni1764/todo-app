import './App.css'
import AddTodo from './components/AddTodo'
import MessageDisplay from './components/MessageDisplay'
import Title from './components/Title'
import TodoList from './components/TodoList'
import TaskItemContextProvider from './store/Todo-items-context'

function App() {
  return (
    <TaskItemContextProvider>
      <div className="card container" style={{
        height: "70%",
        width: "50%",
      }}>
        <div className="card-header">
          <Title />
        </div>
        <div className="card-body">
          <AddTodo />
          <MessageDisplay />
          <div className="items-container">
            <TodoList />
          </div>
        </div>
      </div>
    </TaskItemContextProvider>
  )
}

export default App
