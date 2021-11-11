
import TodoList from "./TodoList"
const TodoCard = () => {
  return (
    <div>
      <h1>Today <span className="date-time">{new Date().toLocaleDateString()}</span></h1>
      <button className="todo-item" placeholder="Enter your task">
        <svg className="svg-class">
          <path
            className="svg-path"
            d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
        </svg>
        Add task
      </button>
    </div>
  )
}

export default TodoCard
