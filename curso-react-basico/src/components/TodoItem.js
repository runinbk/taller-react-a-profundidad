
function TodoItem({text, completed}) {
    return (
      <li>
        <span>V</span>
        <p>{text}</p>
        <p>{completed ? 'Completed' : 'Not Completed'}</p>
        <span>X</span>
      </li>
    );
}

export {
    TodoItem
}