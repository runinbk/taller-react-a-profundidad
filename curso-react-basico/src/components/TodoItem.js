
import "./styles/TodoItem.css";

function TodoItem({text, completed}) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
          V
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <p>{completed ? 'Completed' : 'Not Completed'}</p>
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    );
}

export {
    TodoItem
}