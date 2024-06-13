
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3056098469.
import "./styles/TodoCounter.css"

function TodoCounter({ total, completed}) {
  {/*return (
      <h1 style= {{
        fontSize: '30px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }} >
        Has completado {completed} de {total} TODOS
      </h1>
    )*/}
    return (
      <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    )
}

export {
    TodoCounter
};